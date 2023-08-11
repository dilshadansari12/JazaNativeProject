import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Link } from "react-native";
import { useAuthProvider, useSafeState } from "@jazasoft/react-native-admin";

const LoginScreen = ({ navigation, route, i18nKey }) => {
  const {login} = useAuthProvider();
  const [form, setFrom] = useSafeState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {

    if (form?.email && form?.setPassword) {
        setFrom((prev)=>({email:"", password:""}))
    } else {
        setFrom((prev)=>({email:"", password:""}))
    //   alert("Please enter both email and password.");
    
    }
//    login(form)
    

  };

  const forgetPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setFrom((prev)=> ({...prev, email:text}))}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setFrom((prev)=> ({...prev, password:text}))}
        value={form.password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 15 }} onPress={forgetPassword}>
        Forget Password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
