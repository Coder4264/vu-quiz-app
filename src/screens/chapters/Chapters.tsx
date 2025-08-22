import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../../utils/typography';
import { styles } from './chapterStyles';
import { colors } from '../../utils/colors';
import Quiz from '../quiz/Quiz';

const Chapters = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={26} />
        </TouchableOpacity>
        <Text
          style={{ ...typography.heading, fontSize: 22, fontWeight: '700' }}
        >
          All Chapters
        </Text>
        <View style={styles.empty}></View>
      </View>
      <ScrollView>
        {[1, 2, 3, 4, 5].map(item => (
          <TouchableOpacity onPress={()=>navigation.navigate(Quiz)} activeOpacity={0.6} key={item} style={styles.chapterContainer}>
            <View style={styles.indexContainer}>
              <Text style={styles.index}>{item}</Text>
            </View>
            <View style={styles.chapterNameContainer}>
              <View style={{ marginLeft: 7 }}>
                <Text style={styles.chapterHeading}>Chapter No {item}</Text>
                <Text style={styles.description}>Chapter {item} Quizzes</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chapters;
