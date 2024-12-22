import { Tabs } from 'expo-router'
import Icon from 'react-native-remix-icon';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: '#25292e',
      },
    }}
    >
      <Tabs.Screen
      name='index'
      options={{
        title: 'Home',
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-home-fill' : 'ri-home-line'} size={24} color={color} />
        )
      }}
      />
      <Tabs.Screen
      name='about'
      options={{
        title: 'About',
        tabBarIcon: ({color, focused}) => (
          <Icon name={focused ? 'ri-information-fill' : 'ri-information-line'} size={24} color={color} />
        )
      }}
      />
    </Tabs>
  )
}