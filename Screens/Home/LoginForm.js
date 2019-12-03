import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

const LoginForm = (props) => {
  return (
    <View>
    <TextInput 
      type='text'
      underlineColorAndroid='transparent'
      placeholder='Email'
      autoCapitalize='none'
      onChangeText={props.handleEmail}
    />
    <TextInput
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      placeholder='Password'
      autoCapitalize='none'
      onChangeText={props.handlePassword}
    />
    <TouchableOpacity 
    onPress={props.onLogin}
    >
    <Text>Submit</Text>
    </TouchableOpacity>
  </View>
  )
}

export default LoginForm
