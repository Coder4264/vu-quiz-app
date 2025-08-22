import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Dimensions, ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import  { useCallback } from "react";
import {styles} from "./resultStyle"



const Result = ({ route, navigation }) => {
  const { width, height } = Dimensions.get('window');
  const parentNav = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // Hide bottom tab
      parentNav.getParent()?.setOptions({
        tabBarStyle: { display: "none" },
      });

      return () => {
        // Restore default tab style
        parentNav.getParent()?.setOptions({
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 65,
            position: "absolute",
          },
        });
      };
    }, [parentNav])
  );

  
  const { score, total, timeSpent } = route.params;
  const percentage = Math.round((score / total) * 100);

  const getResultMessage = () => {
    if (percentage >= 90) return "Outstanding! You've mastered this subject!";
    if (percentage >= 75) return "Great job! You have a solid understanding.";
    if (percentage >= 50) return "Good effort! With a bit more practice, you'll excel.";
    return "You didn’t fail, you just found another way that doesn’t work";
  };
  const getResultCheering = () => {
    if (percentage >= 50) return "Congratulations!";
    return "Oops!";
  };

  const getResultImages = () => {
  if (percentage >= 50) return require("../../../assets/images/trophy2.png");
  return require("../../../assets/images/failed.png");
};
  const getResultColor = () => {
  if (percentage >= 50) {
    return { color: colors.green };
  }
  return { color: colors.red };
};

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m} Min ${s} Sec`;
  };

  return (
     <ImageBackground
     style={styles.resultContainer}
      source={require('../../../assets/images/pp4.jpg')}
      resizeMode="cover" 
    >
     <View style={styles.overlay}>
    
      <View style={styles.resultCard}>
        <View style={styles.resultHeader}> 
           {/* <Icon name={getResultIcon()} size={32} color={colors.primary} />  */}
           <Text style={styles.resultTitle}>Quiz Result</Text>
        </View> 
        <Image style={{ marginVertical: 16,  resizeMode: "contain" }}  source={getResultImages()} />
        <Text style={{fontSize: 32, fontWeight:700, letterSpacing:2.5, color: colors.secondary}}>{getResultCheering()}</Text>
        <Text style={styles.resultMessage}>{getResultMessage()}</Text> 

        <View style={styles.scoreCircle}>
           <Text style={{fontSize: 16,letterSpacing: 2.5, fontWeight: "500", color: colors.border,}} >
                      YOUR SCORE
                    </Text>
          <View style={styles.scoreText}>
            <Text style={[styles.obtainMarks, getResultColor()]}>{score}</Text>
            <Text style={{fontSize: 28, fontWeight:800, color: colors.secondary}}>/</Text>
            <Text style={styles.totalMarks}>{total}</Text>
            </View>
          {/* <Text style={styles.percentageText}>{percentage}%</Text> */}
        </View>
        

        <View style={styles.statsContainer}>
          <Text style={{fontSize: 16,letterSpacing: 2.5, fontWeight: "500", color: colors.border,}} >
                      TIME SPENT
                    </Text>
          <View style={styles.statItem}>
              <Icon style={{marginRight:10}} name="time-outline" size={24} color="#fff" />
              <Text style={styles.statText}>{formatTime(timeSpent)}</Text>
          </View>

          {/* <View style={styles.statItem}>
            <View style={[styles.statIconContainer, { backgroundColor: colors.success + '20' }]}>
              <Icon name="checkmark-circle" size={20} color={colors.success} />
            </View>
            <Text style={styles.statText}>{score}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>

          <View style={styles.statItem}>
            <View style={[styles.statIconContainer, { backgroundColor: colors.danger + '20' }]}>
              <Icon name="close-circle" size={20} color={colors.danger} />
            </View>
            <Text style={styles.statText}>{total - score}</Text>
            <Text style={styles.statLabel}>Incorrect</Text>
          </View> */}
        </View> 

         <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={() => navigation.navigate("Subjects")}
          >
            {/* <Icon name="library-outline" size={20} color="#fff" style={styles.buttonIcon} /> */}
            <Text style={styles.PrimaryButtonText}>Back to Subjects</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={() => navigation.replace("Quiz")}
          >
            <Icon name="refresh-outline" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.actionButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </View> 
    </ImageBackground>
  );
};
export default Result;