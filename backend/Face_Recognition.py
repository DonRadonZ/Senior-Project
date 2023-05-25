import face_recognition
picture_of_Steve_Jobs = face_recognition.load_image_file("Oat.jpg") # ไฟล์ต้นแบบ
face_encoding = face_recognition.face_encodings(picture_of_Steve_Jobs)[0] # เข้ารหัสหน้าตา
unknown_picture = face_recognition.load_image_file("Pramot.jpg") # ไฟล์ที่ต้องการตรวจสอบ
unknown_face_encoding = face_recognition.face_encodings(unknown_picture)[0] # เข้ารหัสหน้าตา
results = face_recognition.compare_faces([face_encoding], unknown_face_encoding) # ทำการเปรียบเทียบด้วย Face Recognition
if results[0] == True:
  print("Both individuals are the same person.!")
else:
  print("The two individuals are not the same person.!")
  
  
  
  
