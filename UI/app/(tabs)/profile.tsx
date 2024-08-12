// src/components/Profile.js
import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import beachImage from "@/assets/meditation-images/beach.webp"


const Profile = () => {
  

  return (
    <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
      <View className='flex-1 items-center justify-center'>
        <View className='p-6 bg-gray-100 rounded-lg shadow-md items-center'>
          <Image
            source={beachImage} 
            className='w-32 h-32 rounded-full'
          />
          <Text className='text-xl font-semibold mt-4'>Nome do Usuário</Text>
          <Text className='text-gray-600'>user@example.com</Text>
          <Text className='mt-4 text-center'>
            Position
          </Text>
          <Text className='mt-4 text-center'>
            Rating
          </Text>
          <Text className='mt-4 text-center'>
            Goals Scored
          </Text>
          <Text className='mt-4 text-center'>
            Games Played
          </Text>
          <Text className='mt-4 text-center'>
            Prefered position
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
