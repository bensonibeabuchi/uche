import React, { useState } from 'react';
import { View, Text, Button, Platform, Touchable, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CalendarScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date'); // 'date' for calendar, 'time' for time picker
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Keep the picker open for iOS
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  return (
    <View className="bg-[#F5F5F5] flex-1 items-center justify-center">

      <View className="flex-row p-4 gap-4">

        <View className="bg-blue-500 rounded-lg p-4 w-48 items-center justify-center">
          <TouchableOpacity  onPress={() => showMode('date')}>
            <Text className="text-center text-white font-medium justify-center">Show Calendar</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-blue-500 rounded-lg p-4 w-48 items-center justify-center">
          <TouchableOpacity  onPress={() => showMode('time')}>
            <Text className="text-center text-white font-medium justify-center">Show Time</Text>
          </TouchableOpacity>
        </View>

      </View>

      {show && (

        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View className="p-8 items-center justify-center">
        <Text className="font-bold text-black text-xl mb-4">Selected Date and Time:</Text>
        <Text className="text-black">
          Date: {date.toLocaleDateString()}
        </Text>
        <Text>
         Time:  {date.toLocaleTimeString()}
        </Text>
      </View>


    </View>
  );
}
