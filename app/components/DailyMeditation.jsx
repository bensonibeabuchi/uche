import { View, Text, Image } from 'react-native'
import React from 'react'
import meditate from '../../assets/images/meditate.jpg'

export default function DailyMeditation(props) {
  return (
    <View className="bg-white p-4 mx-2 mb-4 rounded-md w-full truncate overflow-clip ">
        <Image source={props.source} resizeMode='cover' style={{width: '100%', height: '142'}} className="rounded-lg" />
        <View className="flex-row p-1 mt-1">
            <Text className="text-[6px] mr-2 bg-[#3E57FF] items-center text-center justify-center p-2 rounded-md text-white">{props.tag1}</Text>
            <Text className="text-[6px] mr-2 bg-[#3E57FF] items-center text-center justify-center p-2 rounded-md text-white">{props.tag2}</Text>
            <Text className="text-[6px] mr-2 bg-[#3E57FF] items-center text-center justify-center p-2 rounded-md text-white">{props.tag3}</Text>
        </View>
      <Text className="font-semibold text-lg">{props.title}</Text>
      {/* <View className="h-[60]">
      <Text className="text-xs">{props.description}</Text>
      </View> */}
      <Text className="text-[8px] text-[#808080]">{props.duration}</Text>
    </View>
  )
}