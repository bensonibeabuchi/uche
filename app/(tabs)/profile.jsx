import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../assets/images/meditation-logo.png'
import Icon from 'react-native-remix-icon'

export default function ProfileScreen() {
  const [userName, setUserName] = useState("");
      const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem("userData");
            const userData = storedUserData ? JSON.parse(storedUserData) : null;

            if (userData) {
                setUserName(userData.userName);
            }
        } catch (error) {
            console.error("Failed to fetch user data:", error);
            router.replace("pages/Login")
        }
    };

    fetchUserData();
}, []);

const handleLogout = async () => {
  await AsyncStorage.removeItem("userData"); // Clear user data
  router.replace("pages/Signup"); // Navigate to Signup screen
};


  return (
    <SafeAreaView className="flex-1">
      <View className="bg-[#F5F5F5] flex-1 p-8">
        <View className="w-16 h-16 mb-6 bg-[#312651] p-3 rounded-full">
          <Image
            source={logo}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      
        <Text className="font-bold text-black">Hello {userName}! </Text>
        <Text>Would you like to change any settings?</Text>

        <View className="my-8 gap-5">
          <TouchableOpacity className="flex-row justify-between items-center p-6 bg-white rounded-2xl shadow-md shadow-gray-200">
            <Text>Settings</Text>
            <Icon name="ri-arrow-right-line" size="24" color="black"/>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center p-6 bg-white rounded-2xl shadow-md shadow-gray-200">
            <Text>Favourites</Text>
            <Icon name="ri-arrow-right-line" size="24" color="black"/>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center p-6 bg-white rounded-2xl shadow-md shadow-gray-200">
            <Text>Daily Reminders</Text>
            <Icon name="ri-arrow-right-line" size="24" color="black"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} className="flex-row justify-between items-center p-6 bg-red-500 rounded-2xl shadow-md shadow-gray-200">
            <Text className="text-white">Logout</Text>
            <Icon name="ri-arrow-right-line" size="24" color="black"/>
          </TouchableOpacity>
        </View>



    </View>
    </SafeAreaView>
  )
}