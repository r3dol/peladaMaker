import { View, Text, ImageBackground, SafeAreaView, Pressable} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import ListOpenToJoinPeladinhas from "@/components/ListOpenPeladinhas";


import beachImage from "@/assets/meditation-images/beach.webp"
import { StatusBar } from 'expo-status-bar'

import CustomButton from "@/components/CustomButton";
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';


const ListOpenPeladinhas = () => {
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
                <Pressable
                      onPress={() => router.back()}
                      className="absolute top-5 left-5 z-10"
                  >
                      <AntDesign name="leftcircleo" size={30} color="black" />
                  </Pressable>
                
  
                  <View>
                    {/* <CustomButton 
                    onPress={() => router.push("/open-peladinha")} 
                    title='Show open peladinhas'/> */}

                    {AFFIRMATION_GALLERY.map((g) => (
                              <ListOpenToJoinPeladinhas
                                  key={g.title}
                                  title={g.title}
                                  products={g.data}
                              />
                          ))}
                  </View>
  
                <StatusBar style="light" />
              </SafeAreaView>
            </LinearGradient>
          </ImageBackground> 
      </View>
  
    )
}

export default ListOpenPeladinhas