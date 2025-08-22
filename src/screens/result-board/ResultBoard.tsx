import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "./resultBoardStyle"
import { typography } from '../../utils/typography'
import Icon from 'react-native-vector-icons/Ionicons';

const ResultBoard = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.2}
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="chevron-back-outline" size={26} />
              </TouchableOpacity>
              <Text style={{ ...typography.heading, fontSize: 22, fontWeight: '700' }}>Result Board</Text>
              <View style={styles.empty}></View>
            </View>
    </View>
  )
}

export default ResultBoard