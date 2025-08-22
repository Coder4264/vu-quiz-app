import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Subjects from '../screens/subjects/Subjects'
import Chapters from '../screens/chapters/Chapters'
const Stack = createStackNavigator()

const chapterStack = () => {
  return (
    <Stack.Navigator initialRouteName='Subjects'>
        <Stack.Screen options={{headerShown: false}} name='Subjects' component={Subjects} />
        <Stack.Screen options={{headerShown: false}} name='Chapters' component={Chapters} />
    </Stack.Navigator>
  )
}

export default chapterStack