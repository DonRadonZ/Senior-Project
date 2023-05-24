from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask import g
import os
from werkzeug.utils import secure_filename
import bcrypt
from deepface import DeepFace
import cv2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/imagestore'
app.config['ALLOWED_EXTENSIONS'] = {'jpg','jpeg','png','gif'}
db = SQLAlchemy(app)

# Define the model for the database
class User(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.String(50))
    laser_id = db.Column(db.String(50))
    email = db.Column(db.String(100))
    password_hash = db.Column(db.String(100))
    front_card_photo = db.Column(db.String(100))
    back_card_photo = db.Column(db.String(100))

    def set_password(self, password):
        password_bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed_bytes = bcrypt.hashpw(password_bytes, salt)
        self.password_hash = hashed_bytes.decode('utf-8')

    def check_password(self, password):
        password_bytes = password.encode('utf-8')
        hashed_bytes = self.password_hash.encode('utf-8')
        return bcrypt.checkpw(password_bytes, hashed_bytes)

# Create the database tables
@app.before_request
def create_tables():
    if not getattr(g, '_got_first_request', False):
        db.create_all()
        g._got_first_request = True

# Route for registration page
# Route for registration page
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        id_user = request.form['id_user']
        laser_id = request.form['laser_id']
        email = request.form['email']
        password = request.form['password']
        front_card_photo = request.files['front_card_photo']
        back_card_photo = request.files['back_card_photo']

        # Generate filenames with ID prefix
        front_filename = id_user + "_front." + secure_filename(front_card_photo.filename.rsplit('.', 1)[1].lower())
        back_filename = id_user + "_back." + secure_filename(back_card_photo.filename.rsplit('.', 1)[1].lower())

        front_card_photo.save(os.path.join(app.config['UPLOAD_FOLDER'], front_filename))
        back_card_photo.save(os.path.join(app.config['UPLOAD_FOLDER'], back_filename))

        user = User(
            id_user=id_user,
            laser_id=laser_id,
            email=email,
            front_card_photo=front_filename,
            back_card_photo=back_filename
        )
        user.set_password(password)
        db.session.add(user)
        db.session.commit()

        return 'Registration successful!'

    return render_template('register.html')

# Route for login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            return 'Login successful!'
        else:
            return 'Login failed!'

    return render_template('login.html')

# Route to display all user data
@app.route('/users')
def display_users():
    users = User.query.all()
    return render_template('users.html', users=users)



@app.route('/face_recognition', methods=['GET', 'POST'])
def face_recognition():
    if request.method == 'POST':
        id_user = request.form['id_user']
        face_photo = request.files['face_photo']

        # Load the Front Card photo associated with the ID from the database
        user = User.query.filter_by(id_user=id_user).first()
        front_card_photo_path = os.path.join(app.config['UPLOAD_FOLDER'], user.front_card_photo)

        # Save the uploaded face photo to a temporary file
        face_photo_path = os.path.join(app.config['UPLOAD_FOLDER'], 'temp', face_photo.filename)
        face_photo.save(face_photo_path)

        # Perform face recognition using deepface
        result = DeepFace.verify(face_photo_path, front_card_photo_path)

        # Delete the temporary face photo file
        os.remove(face_photo_path)

        # Retrieve the verification result
        verification_result = result['verified']

        return str(verification_result)

    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)
