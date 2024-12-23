import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, TextInput, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Icon from 'react-native-remix-icon'
import { Link } from "expo-router";
import logo from '../../assets/images/meditation-logo.png'

export default function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true)


    const toggleViewPassword = () => {
      setIsVisible(!isVisible)
    }

    const handleLogin = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem("userData");
            const userData = storedUserData ? JSON.parse(storedUserData) : null;

            if (userData && userData.userName === userName && userData.password === password) {
                Alert.alert("Success", `Welcome back, ${userData.userName}!`);
                router.replace("/"); // Navigate to the home screen
            } else {
                Alert.alert("Error", "Invalid email or password!");
            }
        } catch (error) {
            Alert.alert("Error", "Failed to log in!");
        }
    };
    
    return (
        <View className="flex-1 bg-[#F5F5F5] items-center justify-center">
            <View className="w-40 h-40 bg-[#312651] p-6 items-center justify-center rounded-full">
                <Image 
                source={logo}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                />
            </View>

            <View>

              <View className="px-8">

                <View className="mt-6">
                  <View
                    className="p-1 text-black pl-4 w-full rounded-lg flex-row items-center border justify-between">
                    <TextInput 
                    value={userName}
                    onChangeText={setUserName}
                    keyboardType='email-address'
                    placeholder='Username' 
                    placeholderTextColor="#000" 
                    clearButtonMode='always'
                    autoCapitalize='none' 
                    className="w-full h-full py-3 text-left" />
                  </View>
                </View>

                <View className="mt-6">
                  <View
                    className="p-1 text-black pl-4 w-full rounded-lg flex-row justify-center items-center border">
                    <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password' 
                    placeholderTextColor="#000"
                    secureTextEntry={isVisible ? true : false}
                    autoCapitalize='none' 
                    className="w-11/12 py-3 text-left" />

                    <TouchableOpacity onPress={toggleViewPassword}>
                      <Icon name={isVisible? 'ri-eye-fill' : 'ri-eye-off-fill' } size={20} color='#000' />
                    </TouchableOpacity>
                  </View>
                </View>


                <TouchableOpacity onPress={handleLogin} className="bg-[#312651] p-4 mt-6 rounded-lg ">
                  <Text className="text-white font-semibold text-center">Login</Text>
                </TouchableOpacity>

                <View className="mt-4 items-center">
                  <Text>Already have an account? <Link href="pages/Signup"> <Text className="text-[#2824FF] text-center items-center mt-6">Sign Up</Text> </Link>  </Text>

                </View>
              </View>
          <View>
        </View>

        </View>
            
        </View>
    );
}
