import { View, Text, TouchableOpacity, ActivityIndicator, Image, FlatList, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-remix-icon';
import logo from '../../assets/images/meditation-logo.png'
import { useRouter } from 'expo-router';
import { WebView } from "react-native-webview";
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import meditate from '../../assets/images/meditate.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewsDetails() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const { title, description, duration, target, image, instructions } = useLocalSearchParams();
  const [about, setAbout ] = useState(false)
  const [fav, setFav] = useState("")

  const aboutSet = () => {
    setAbout(true)
  }

  const instructionSet = () => {
    setAbout(false)

  }

  const instructionData = instructions.split(',').map((instruction, index) => ({
    key: index.toString(), // Unique key based on index
    text: instruction.replace("[", "").replace("]", "").replace("\"", "").replace("\"", "") // Remove any leading/trailing whitespace
  }));

  const addToFav = async () => {
    try {
      await AsyncStorage.setItem("fav", JSON.stringify(fav));
      Alert.alert("Success", "Meditation added to Favourites");
    } catch (error) {
      console.error("Error saving to favourites:", error);
    }
  };
  
  

  return (
    <View className="flex-1 bg-white">
      <View className="justify-between w-full flex-row items-center p-5">
        <TouchableOpacity onPress={() => router.back()} className="">
          <View className="w-12 h-12 mb-6 bg-[#312651] p-3 rounded-full">
            <Image
              source={logo}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <Text className="font-bold">MEDITATION</Text>
        <TouchableOpacity onPress={addToFav} className="p-2 rounded-full bg-gray-100">
          <Icon name="ri-heart-line" size="24" color="#F7B386"></Icon>
        </TouchableOpacity>
      </View>

      <View className="p-5">

        <View className="w-full h-48 rounded-xl">
          <Image
          source={image ? { uri:image } : meditate}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          className="rounded-2xl"
          />
        </View>

        <View className="p-4 items-center">
          <Text className="font-semibold text-xl text-center">{title}</Text>
          <Text className="text-[6px] bg-[#3E57FF] mt-2 items-center text-center justify-center p-2 rounded-md text-white w-32">{target}</Text>
          <Text className="text-gray-400 text-xs mt-2">{duration}</Text>          
        </View>

        <View>
          <View className="flex-row justify-center">
            <TouchableOpacity onPress={aboutSet} className="px-4">
              <Text className={about? "font-medium bg-[#312651] text-white p-4 rounded-2xl w-32 text-center" : "font-medium text-black p-4 rounded-2xl w-32 text-center"}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={instructionSet} className="px-4">
              <Text className={!about? "font-medium bg-[#312651] text-white p-4 rounded-2xl w-32 text-center" : "font-medium text-black p-4 rounded-2xl w-32 text-center"}>Instruction</Text>
            </TouchableOpacity>
          </View>

          
          {about ? 
          <View className="p-4">
            <Text className="text-justify">{description}</Text>
          </View> 
          : 
          <View className="p-4">
           <FlatList
              data={instructionData}
              renderItem={({ item }) => (
                <View key={item}>
                  <Text>{`\u2022 ${item.text}`}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
          }

        </View>


      </View>


    </View>
  )
}