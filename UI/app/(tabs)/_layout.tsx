import { View, Text } from 'react-native';
import React from 'react';
import {Tabs} from "expo-router";
import  Colors  from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: Colors.primary}}>

       {/* < Tabs.Screen name="ListClosedPeladinhas" options={{tabBarLabel:"Closed Peladinhas", tabBarIcon:({ color }) => ( <Ionicons name="football" size={24} color={color} />)}}/> */}
       < Tabs.Screen name="ListOpenPeladinhas" options={{tabBarLabel:"Open Peladinhas", tabBarIcon:({ color }) => ( <Ionicons name="football" size={24} color={color} />)}}/>
       < Tabs.Screen name="create-peladinha" options={{tabBarLabel:"Create Peladinhas", tabBarIcon:({ color }) => ( <Ionicons name="football" size={24} color={color} />)}}/>
       < Tabs.Screen name="ListClosedPeladinhas" options={{tabBarLabel:"Closed Peladinhas", tabBarIcon:({ color }) => ( <Ionicons name="football" size={24} color={color} />)}}/>
       < Tabs.Screen name="ListFinishedPeladinhas" options={{tabBarLabel:"Finished Peladinhas", tabBarIcon:({ color }) => ( <Ionicons name="football" size={24} color={color} />)}}/>
       < Tabs.Screen name="profile" options={{tabBarLabel:"Profile", tabBarIcon:({ color }) => ( <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={color} />)}}/>

    </Tabs>
  )
}

export default TabsLayout