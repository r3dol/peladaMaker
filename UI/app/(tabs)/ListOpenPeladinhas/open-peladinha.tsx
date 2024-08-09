import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import OpenPeladinhaTemplate from "@/components/OpenPeladinhaTemplate";

const OpenPeladinha = () => {
  return (
    <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
                
  
      <View>
        <OpenPeladinhaTemplate />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default OpenPeladinha