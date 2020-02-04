
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class App extends Component {
state={email:'',
 password:''}

  constructor(props) {
    super(props);
  
  }

onPress = () => {
    this.setState({
      
      email:'',
      password:''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>

          <TextInput onChangeText= {(text)=>this.setState({email:text})} style={styles.inputs}
              placeholder="Email"
            >{this.state.email}</TextInput>
        </View>
        
        <View style={styles.inputContainer}>
            <TextInput onChangeText= {(text)=>this.setState({password:text})} style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
             >{this.state.password}</TextInput>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

