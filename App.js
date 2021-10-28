import { placeholder } from '@babel/types';
import React from 'react';
import {Button, Pressable, Text, View, Separator, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.firstV}>
      <Image
      style={styles.imgStyle} 
      source={require('./fbw.png')} />
    <TextInput
      style={styles.textInputEmail}
        placeholder= "Email or Phone"
    
    />
    
    <TextInput
    secureTextEntry={true}
        style={styles.textInputPassword}
          placeholder="Password"
      />


<TouchableOpacity
style={styles.buttonStyle}
>
<Text style={styles.fontStyle}>LOG IN</Text>

</TouchableOpacity>
 
    <TouchableOpacity style={styles.signUpStyle}>
      <Text
      style={styles.fontStyle}
      >
        Sign Up for Facebook
      </Text>
    </TouchableOpacity>

    <View 
    style={styles.forgotPassView}>

<TouchableOpacity>
        <Text
        style={styles.fontStyle}
        >
        Forgot Password?
        </Text>
</TouchableOpacity> 
<TouchableOpacity>
<Image
      style={styles.qmImgStyle} 
      source={require('./qm.png')} />
</TouchableOpacity>  

    </View>
</View>

  );
};

export default App;

const styles = StyleSheet.create({
  firstV: {
    flex: 1, alignItems: 'center', backgroundColor: '#3B5998'
  }, 
  imgStyle: {
    height: 80, width: 80, marginTop: 150
  },
  textInputEmail: {
    fontSize: 20,
    height: 40,
    width: 310,
    marginTop: 100,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    borderColor: '#e0e0e050'
  }, 
  textInputPassword: {
    fontSize: 20,
    height: 40,
    width: 310,
    marginTop: 30,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    borderColor: '#e0e0e050'
  }, 
  buttonStyle: {
    marginTop: 20, 
    backgroundColor:'#e0e0e050', 
    height: 40, 
    width: 310, 
    alignItems:'center', 
    justifyContent:'center'
  }, 
  signUpStyle: {
    height: 40, marginTop: 150
  },
  fontStyle: {
  fontSize: 18
  },
  forgotPassView: {
    height: 40,
    width:'100%', 
    marginTop: 1, 
    flexDirection:'row', 
    paddingHorizontal: 50,
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight: 60,
    paddingLeft: 148
  },
  qmImgStyle:{
    height: 30, width: 30
  },
  
  });