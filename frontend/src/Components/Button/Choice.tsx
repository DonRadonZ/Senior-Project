import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const MyComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>Account No. Wrong</Text>
        <RadioButton value="first" />
          </View>
          <View>
        <Text>Account No. Wrong</Text>
        <RadioButton value="first" />
          </View>
          <View>
        <Text>Account No. Wrong</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>other</Text>
        <RadioButton value="other" />
      </View>
    </RadioButton.Group>
  );
};

export default MyComponent;