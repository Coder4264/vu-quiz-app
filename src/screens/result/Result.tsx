import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Dimensions, ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import  { useCallback } from "react";



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
    if (percentage >= 60) return "Good effort! With a bit more practice, you'll excel.";
    return "Keep practicing! Review the material and try again.";
  };

  const getResultIcon = () => {
    if (percentage >= 90) return "trophy";
    if (percentage >= 75) return "star";
    if (percentage >= 60) return "thumbs-up";
    return "school";
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
        <Image style={{marginVertical:16}} source={require('../../../assets/images/trophy2.png')} />
        <Text style={{fontSize: 32, fontWeight:700, letterSpacing:2.5, color: colors.secondary}}>Congratulations!</Text>
        <Text style={styles.resultMessage}>{getResultMessage()}</Text> 

        <View style={styles.scoreCircle}>
           <Text style={{fontSize: 16,letterSpacing: 2.5, fontWeight: "500", color: colors.border,}} >
                      YOUR SCORE
                    </Text>
          <View style={styles.scoreText}>
            <Text style={styles.obtainMarks}>{score}</Text>
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

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:colors.primary
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // makes it cover entire parent
    backgroundColor: colors.primary,
    opacity: 0.95, // adjust transparency
    zIndex: 1,
  },
  resultCard: {
    // backgroundColor: colors.secondary,
    
    alignItems: "center",
  },
  resultHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultTitle: {
    ...typography.h2,
    fontWeight: '900',
    fontSize: 26,
    marginTop: 10,
    textAlign: 'center',
    color: colors.secondary,
    // fontStyle:"italic"
  },
  scoreCircle: {
    alignItems: 'center',
    marginVertical: 10,
  },
  scoreText: {
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"center",
    gap:5
    
  },
  obtainMarks:{
    fontSize: 28,
    color: colors.green,
    fontWeight: '700',
    marginTop: 8,
    letterSpacing:2.5
  },
  totalMarks:{
    fontSize: 28,
    color: colors.secondary,
    fontWeight: '700',
    marginTop: 8,
    letterSpacing:2.5
  },
  percentageText: {
    ...typography.h2,
    fontSize: 32,
    color: colors.primary,
    fontWeight: '800',
    marginTop: 8,
  },
  resultMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
    color: colors.secondary,
  },
  statsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginVertical: 30,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap:5,
    marginBottom: 48,

  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    gap:10
  },
  statText: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: '400',
    marginVertical: 8,
    letterSpacing:2.5
  },
  statLabel: {
    ...typography.body,
    color: colors.border,
  },
  actionButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,

  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    width: '45%',
    // height: "100%",
    marginHorizontal: 'auto',
  },
  primaryButton: {
    backgroundColor: colors.yellow,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  buttonIcon: {
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '600',
  },
  PrimaryButtonText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default Result;