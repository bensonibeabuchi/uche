import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import logo from '../../assets/images/meditation-logo.png'
import MeditationCard from "../components/MeditationCard";
import meditate from '../../assets/images/meditate.jpg'
import DailyMeditation from "../components/DailyMeditation";
import meditationData from "../constants/meditationData.json"
import bestMeditation from "../constants/bestMeditation.json"



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
      <SafeAreaView className="bg-[#F5F5F5] flex-1 p-4">
        <FlatList
          data={['']} // A placeholder for the outer list's data
          className="p-4"
          renderItem={() => (
            <View>
              {/* Header Section */}
              <View className="w-16 h-16 mb-6 bg-[#312651] p-3 rounded-full">
                <Image
                  source={logo}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                />
              </View>
              <Text className="text-black">Hello {userName}!</Text>
              <Text className="font-semibold text-xl">
                Find your perfect meditation
              </Text>
              <View className="border-[0.2px] rounded-md p-4 my-4">
                <Text>
                  “Laziness May Appear Attractive, But Work Gives Satisfaction”
                </Text>
              </View>

              {/* Popular Meditations Section */}
              <View className="my-4">
                <Text className="font-semibold text-lg pb-4">
                  Popular Meditations
                </Text>
                <FlatList
                  horizontal
                  data={meditationData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                          onPress={() =>
                            router.push({
                              pathname: 'pages/DetailsPage',
                              params: {
                                title: item?.title,
                                description: item?.description,
                                duration: item?.duration,
                                target: item?.target,
                                image: item?.image,
                                instructions: JSON.stringify(item?.instructions),
                              },
                            })
                          }
                        >
                      <MeditationCard
                        title={item?.title}
                        description={item?.shortDescription}
                        duration={item?.duration}
                        tag1={item?.target}
                        source={item.image ? { uri: item.image } : meditate}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>

              {/* Daily Meditation Section */}
              <View className="my-4">
                <Text className="font-semibold text-lg pb-4">
                  Daily Meditation
                </Text>
                <FlatList
                  data={bestMeditation}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: 'pages/DetailsPage',
                        params: {
                          title: item?.title,
                          description: item?.description,
                          duration: item?.duration,
                          target: item?.target,
                          image: item?.image,
                          instructions: JSON.stringify(item?.instructions),
                        },
                      })
                    }
                    >
                      <DailyMeditation
                        title={item?.title}
                        description={item?.shortDescription}
                        duration={item?.duration}
                        tag1={item?.target}
                        source={item.image ? { uri: item.image } : meditate}
                      />

                    </TouchableOpacity>
                  )}
                />
              </View>

              {/* Logout Button */}
              <TouchableOpacity
                onPress={handleLogout}
                className="bg-[#312651] p-4 mt-6 rounded-lg"
              >
                <Text className="text-white text-center">Logout</Text>
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={<View style={{ height: 32 }} />} // Prevent cutoff
        />
      </SafeAreaView>
    );
}
