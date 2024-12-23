import { Tabs } from 'expo-router'
import Icon from 'react-native-remix-icon';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: "#F7B386",
      headerShadowVisible: false,
      tabBarStyle: {
      backgroundColor: '#EF680E',
      },
    }}
    >
      <Tabs.Screen
      name='index'
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-home-fill' : 'ri-home-line'} size={24} color={color} />
        )
      }}
      />

    <Tabs.Screen
      name='favourite'
      options={{
        title: 'Favourite',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-heart-3-fill' : 'ri-heart-3-line'} size={24} color={color} />
        )
      }}
      />

    <Tabs.Screen
      name='calendar'
      options={{
        title: 'Calendar',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-calendar-2-fill' : 'ri-calendar-2-line'} size={24} color={color} />
        )
      }}
      />

      <Tabs.Screen
      name='profile'
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-user-fill' : 'ri-user-line'} size={24} color={color} />
        )
      }}
      />
    </Tabs>
  )
}