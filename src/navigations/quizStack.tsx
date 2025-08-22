import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Quiz from '../screens/quiz/Quiz'
import QuizTaker from '../screens/quizTaker/QuizTaker'
import Result from '../screens/result/Result'

const quizStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Quiz" component={Quiz} />
      
      {/* Hide bottom tab here */}
      <Stack.Screen  
        name="QuizTaker" 
        component={QuizTaker}  
        
      />

      {/* Hide bottom tab here too */}
      <Stack.Screen 
        name="QuizResult" 
        component={Result} 
        
      />
    </Stack.Navigator>
  )
}

export default quizStack
