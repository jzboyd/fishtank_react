import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {};

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar sytle="light" />
        <Image
          source={require("../images/FishLogo.png")}
          style={{ width: 250, height: 250 }}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="E-mail"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View> 
        <Button raised containerStyle={styles.button} 
        onPress={signIn} 
        title="Login" />
        <Button raised onPress={() => navigation.navigate('Signup')} 
        containerStyle={styles.button} 
        type="outline" 
        title="Sign Up" />
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
    marginTop: 15,
  },
  button: {
    width: 175,
    marginTop: 10,
  },
});