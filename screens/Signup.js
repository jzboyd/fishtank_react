import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from 'react-native-elements';

const Signup = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'Back to Login',
    });
}, [navigation])

    const register = () => {}
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>
                Create An Account                
                </Text>
                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="Full Name" 
                    autoFocus type='text' 
                    value={name}
                    onChangeText={(text) => setName(text)} />
                    <Input 
                    placeholder="E-mail" 
                    type="email"        
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                    <Input 
                    placeholder="Password" 
                    type="password"
                    secureTextEntry    
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
                    <Input 
                    placeholder="Profile Picture URL" 
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={Signup} />
                </View>

                <Button containerStyle={styles.button}
                raised 
                onPress={Signup} 
                title="Create Account" />
                <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 175,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
        marginTop: 15,
    },
})