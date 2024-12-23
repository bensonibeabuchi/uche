import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops! Not Found' }}/>
    <View className="bg-white flex-1 items-center justify-center">
      <Text className="text-4xl font-semibold m-4">Oops! Page Not Found</Text>
        <Link href="/" className='bg-black text-white p-4 rounded-md'>
            Go back to Home Screen
        </Link>

    </View>
    </>
  )
}