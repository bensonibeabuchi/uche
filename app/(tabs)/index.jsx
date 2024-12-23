import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import logo from '../../assets/images/meditation-logo.png'
import MeditationCard from "../components/MeditationCard";
import meditate from '../../assets/images/meditate.jpg'
import meditate2 from '../../assets/images/images.jpeg'
import DailyMeditation from "../components/DailyMeditation";

export default function Home() {
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
      <SafeAreaView className="bg-[#F5F5F5]">
        <ScrollView className="p-4">
          <View className="bg-[#F5F5F5]">
            <View className="w-16 h-16 mb-6 bg-[#312651] p-3 rounded-full">
                <Image 
                source={logo}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                />
            </View>
            <View>
              <Text className="text-black">Hello {userName}!</Text>
              <Text className="font-semibold text-xl">Find your perfect meditation</Text>              
            </View>

            <View className="border-[0.2px] rounded-md p-4 my-4">
              <Text>
              “Laziness May Appear Attractive, But Work Gives Satisfaction”
              </Text>
            </View>

            <View className="my-4">
              <Text className="font-semibold text-lg pb-4">Popular Meditations</Text>
              <ScrollView
              horizontal
              >
                <MeditationCard
                title="Mindful"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
                duration="10 minutes"
                tag1="calmness"
                tag2="Breathing"
                tag3="Mindful"
                source={meditate}
                />

                <MeditationCard
                title="Calmnes"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
                duration="10 minutes"
                tag1="calmness"
                tag2="Breathing"
                tag3="Mindful"
                source={meditate2}
                />

                <MeditationCard
                title="Breathing"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
                duration="10 minutes"
                tag1="calmness"
                tag2="Breathing"
                tag3="Mindful"
                source={meditate}
                />

                <MeditationCard
                title="Yoga"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
                duration="10 minutes"
                tag1="calmness"
                tag2="Breathing"
                tag3="Mindful"
                source={meditate2}
                />

              </ScrollView>
            </View>

            <View className="my-4">
              <Text className="font-semibold text-lg pb-4">Daily Meditation</Text>
              <DailyMeditation 
              title="Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
              duration="10 minutes"
              tag1="calmness"
              tag2="Breathing"
              tag3="Mindful"
              source={meditate2}
              />

              <DailyMeditation 
              title="Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
              duration="10 minutes"
              tag1="calmness"
              tag2="Breathing"
              tag3="Mindful"
              source={meditate2}
              />

              <DailyMeditation 
              title="Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut ipsum omnis, quia laboriosam magni maiores voluptatibus fugiat iure inventore laudantium sint sapiente unde distinctio, tenetur dolorem possimus, molestiae molestias?"
              duration="10 minutes"
              tag1="calmness"
              tag2="Breathing"
              tag3="Mindful"
              source={meditate2}
              />

            </View>





              {/* <TouchableOpacity onPress={handleLogout} className="bg-[#312651] p-4 mt-6 rounded-lg">
                  <Text className="text-white text-center">Logout</Text>
              </TouchableOpacity> */}
          </View>

        </ScrollView>
        </SafeAreaView>
    );
}
