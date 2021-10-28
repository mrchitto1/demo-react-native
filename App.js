import {placeholder} from '@babel/types';
import React from 'react';
import {
  Button,
  Pressable,
  Text,
  View,
  Separator,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={styles.firstV}>
      <Image style={styles.imgStyle} source={require('./fbw.png')} />
      <TextInput style={styles.textInputEmail} placeholder="Email or Phone" />

      <TextInput
        secureTextEntry={true}
        style={styles.textInputPassword}
        placeholder="Password"
      />

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.fontStyle}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpStyle}>
        <Text style={styles.fontStyle}>Sign Up for Facebook</Text>
      </TouchableOpacity>

      <View style={styles.forgotPassView}>
        <TouchableOpacity>
          <Text style={styles.fontStyle}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.qmImgStyle} source={require('./qm.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  firstV: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3B5998',
  },
  imgStyle: {
    height: windowHeight/10,
    width: '20%',
    marginTop: windowHeight/7,
    resizeMode:"contain"
  },
  textInputEmail: {
    fontSize: windowHeight/50,
    height: windowHeight/11,
    width: '85%',
    marginTop: windowHeight/7,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    borderColor: '#e0e0e050',
    textAlignVertical:"bottom"
  },
  textInputPassword: {
    fontSize: windowHeight/50,
    height: windowHeight/11,
    width: '85%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    borderColor: '#e0e0e050',
    textAlignVertical:"bottom"
  },
  buttonStyle: {
    backgroundColor: '#e0e0e050',
    height: 40,
    width: 310,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight/25
  },
  signUpStyle: {
    height: windowHeight/30,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: windowHeight/10
  },
  fontStyle: {
    fontSize: windowHeight/50,
  },
  forgotPassView: {
    height: windowHeight/15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: windowWidth/3,
    paddingRight: windowWidth/7
  },
  qmImgStyle: {
    height: windowHeight/20,
    width: windowWidth/10,
    resizeMode: 'contain'
  },
});
