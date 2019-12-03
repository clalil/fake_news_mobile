import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native'

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Login to view our fake news
        </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          type='text'
          underlineColorAndroid='transparent'
          placeholder='Email'
          placeholderTextColor='#1a222e'
          autoCapitalize='none'
          onChangeText={props.handleEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          placeholder='Password'
          placeholderTextColor='#1a222e'
          autoCapitalize='none'
          onChangeText={props.handlePassword}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={props.onLogin}
      >
        <Text
          style={styles.loginText}
        >Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f5f3',
  },
  header: {
    fontFamily: 'Palatino-Italic',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer: {
    borderBottomColor: '#f5fcff',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    borderBottomColor: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#7299cf",
  },
  loginText: {
    color: '#000000',
  }
});
