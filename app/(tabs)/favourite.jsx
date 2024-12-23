import { View, Text, SafeAreaView, Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyMeditation from '../components/DailyMeditation';
import meditate from "../../assets/images/meditate.jpg"

export default function favourite() {
  const [favourites, setFavorites] = useState([])
  
  console.log("FAVSS:",favourites)

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favs = await AsyncStorage.getItem("fav");
        setFavorites(favs ? JSON.parse(favs) : []);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  

  const removeFavorite = async (title) => {
    try {
      const updatedFavorites = favorites.filter((fav) => fav.title !== title);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("fav", JSON.stringify(updatedFavorites));
      Alert.alert("Success", "Meditation removed from Favorites");
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]">
      <View className="p-8 flex-1">
        {favourites > 0 ?
        <View>
          <Text>Favourites</Text>
          <FlatList
          data={favourites}
          renderItem={({ item }) => (
            <View >
              <DailyMeditation
                title={item?.title}
                description={item?.description}
                duration={item?.duration}
                tag1={item?.target}
                source={item.image ? { uri: item.image } : meditate}
              />
            </View>
          )}
          keyExtractor={(item, index) => item?.title || index.toString()}
          />
        </View> 
        :
        <View>
        <Text> No Favourites</Text>
        </View>}

      </View>
    </SafeAreaView>
  )
}