import { View, Text,Image, ImageBackground, SafeAreaView, Pressable} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'


import beachImage from "@/assets/meditation-images/beach.webp"
import { StatusBar } from 'expo-status-bar'

import CustomButton from "@/components/CustomButton";
import { useRouter } from 'expo-router'

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
        <ImageBackground
          source={beachImage}
          resizeMode="cover"
          className="flex-1"
        >
          <LinearGradient
              className="flex-1"
              colors={["rgba(0,0,0,0.4", "rgba(0,0,0,0.8)"]}
          >
            <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-4xl"> 
                  PeladinhaMaker 
                </Text>
                <Text className="text-center text-white text-regular text-2xl mt-3"> 
                  Organiza as tuas peladinhas 
                </Text>
                <Pressable className="absolute top-0 right-0" onPress={() => router.push("/create-peladinha")}>
                  <Image className="absolute top-0 right-0 w-10 h-10 rounded-full" source={beachImage} alt="Rounded avatar"/>
                </Pressable>
              </View>

              <View>

                <CustomButton 
                onPress={() => router.push("ListOpenPeladinhas")} 
                title='Show open peladinhas'/>
                <CustomButton 
                onPress={() => router.push("ListClosedPeladinhas")} 
                title='Show Closed peladinhas'/>
                <CustomButton 
                onPress={() => router.push("/list-open-peladinhas")} 
                title='History of peladinhas'/>
                <CustomButton 
                onPress={() => router.push("/create-peladinha")} 
                title='Create your own peladinha'/>
                <CustomButton 
                onPress={() => router.push("/list-open-peladinhas")} 
                title='Check Statistics'/>
                <CustomButton 
                onPress={() => router.push("/list-open-peladinhas")} 
                title='My Profile'/>
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground> 
    </View>

  )
}

export default App