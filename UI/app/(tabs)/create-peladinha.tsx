import { View, Text, SafeAreaView, TextInput, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import CustomButton from "@/components/CustomButton";
import { router } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';


const CreatePeladinha = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
      <View className='flex-1 items-center justify-center'>
          <Text className='text-xl font-semibold mt-4'>Peladinha size</Text>
          <View className='p-6 bg-gray-100 rounded-lg shadow-md items-center'>
            <TextInput placeholder="Enter Peladinha size" />
          </View>
          <Text className='text-xl font-semibold mt-4'>Location</Text>
          <View className='p-6 bg-gray-100 rounded-lg shadow-md items-center'>
            <TextInput placeholder="Enter Peladinha Location" />
          </View>
          <Text className='text-xl font-semibold mt-4'>Peladinha Name</Text>
          <View className='p-6 bg-gray-100 rounded-lg shadow-md items-center'>
            <TextInput placeholder="Enter Peladinha size" />
          </View>
          <Text className='text-xl font-semibold mt-4'>Peladinha Date</Text>
          <View className='p-6 bg-gray-100 rounded-lg shadow-md items-center'>
          <Button className='text-zinc-950' onPress={showDatepicker} title="Pick the day" />
          <Button onPress={showTimepicker} title="Select the time" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          </View>
          
        <CustomButton  containerStyles='w-60 mt-2' title="Create" onPress={() => router.push("../")}/>
      </View>
    </SafeAreaView>
  )
}

export default CreatePeladinha