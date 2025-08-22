import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import {styles} from "./quizStyle"

const Quiz = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const numColumns = width >= 1024 ? 4 : width >= 768 ? 3 : 2;
  const CARD_MARGIN = 12;
  const CARD_WIDTH = (width * 0.6 - CARD_MARGIN * (numColumns + 1)) / numColumns;
  const CARD_HEIGHT = CARD_WIDTH;

  // State management
  const [selectedTime, setSelectedTime] = useState(null);
  const [customTimeModalVisible, setCustomTimeModalVisible] = useState(false);
  const [customMinutes, setCustomMinutes] = useState('');
  const [quizRulesAccepted, setQuizRulesAccepted] = useState(false);

  // Handle time selection
  const handleTimeSelect = (minutes) => {
    setSelectedTime(minutes);
  };

  // Handle custom time submission
  const handleCustomTimeSubmit = () => {
    if (customMinutes && parseInt(customMinutes) > 0) {
      setSelectedTime(parseInt(customMinutes));
      setCustomTimeModalVisible(false);
    }
  };

  // Start the quiz
  const startQuiz = () => {
    if (selectedTime) {
      const questionCount = Math.min(selectedTime, 10); // Max 10 questions for demo
      navigation.navigate('QuizTaker', {
        duration: selectedTime,
        questionCount,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={26} />
        </TouchableOpacity>
        <Text style={{ ...typography.heading, fontSize: 22, fontWeight: '700' }}>Quiz Settings</Text>
        <View style={styles.empty}></View>
      </View>

      {/* Scroll Body */}
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Select Quiz Duration</Text>
        <Text style={styles.sectionSubtitle}>
          Choose how much time you want for this quiz
        </Text>

        {/* Time Buttons */}
        <View style={styles.timeButtonContainer}>
          {[5, 10, 15, 20].map((minutes) => (
            <TouchableOpacity
              key={minutes}
              activeOpacity={0.6}
              style={[
                styles.timeButton,
                selectedTime === minutes && styles.timeButtonSelected,
                { width: CARD_WIDTH, height: CARD_HEIGHT },
              ]}
              onPress={() => handleTimeSelect(minutes)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === minutes && styles.timeButtonTextSelected,
                ]}
              >
                {minutes} mins
              </Text>
              
            </TouchableOpacity>
          ))}

          {/* Custom Time Button */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.timeButton,
              styles.customTimeButton,
              selectedTime === 'custom' && styles.timeButtonSelected,
              { width: CARD_WIDTH, height: CARD_HEIGHT },
            ]}
            onPress={() => setCustomTimeModalVisible(true)}
          >
            <Icon 
              name="time-outline" 
              size={24} 
              color={selectedTime === 'custom' ? '#fff' : colors.primary} 
            />
            <Text
              style={[
                styles.timeText,
                selectedTime === 'custom' && styles.timeButtonTextSelected,
                { marginTop: 8 },
              ]}
            >
              Custom Time
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quiz Rules */}
        <View style={styles.rulesContainer}>
          <Text style={styles.sectionTitle}>Quiz Rules</Text>
          <View style={styles.rulesList}>
            <View style={styles.ruleItem}>
              <View style={styles.ruleIcon}>
                <Icon name="alert-circle-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.ruleText}>One question per minute timeframe</Text>
            </View>
            <View style={styles.ruleItem}>
              <View style={styles.ruleIcon}>
                <Icon name="alert-circle-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.ruleText}>You can't go back to previous questions</Text>
            </View>
            <View style={styles.ruleItem}>
              <View style={styles.ruleIcon}>
                <Icon name="alert-circle-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.ruleText}>Quiz auto-submits when time expires</Text>
            </View>
            <View style={styles.ruleItem}>
              <View style={styles.ruleIcon}>
                <Icon name="alert-circle-outline" size={18} color={colors.primary} />
              </View>
              <Text style={styles.ruleText}>Answers can't be changed after submission</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.acceptButton,
              quizRulesAccepted && styles.acceptButtonSelected,
            ]}
            onPress={() => setQuizRulesAccepted(!quizRulesAccepted)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.checkbox,
                quizRulesAccepted && styles.checkboxSelected,
              ]}
            >
              {quizRulesAccepted && <Icon name="checkmark" size={16} color="#fff" />}
            </View>
            <Text style={styles.acceptText}>
              I understand and accept the quiz rules
            </Text>
          </TouchableOpacity>
        </View>

        {/* Start Quiz Button */}
        <TouchableOpacity
          style={[
            styles.startButton,
            selectedTime && quizRulesAccepted
              ? styles.startButtonActive
              : styles.startButtonInactive,
          ]}
          onPress={startQuiz}
          disabled={!selectedTime || !quizRulesAccepted}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
          <Icon name="arrow-forward" size={20} color="#fff" style={styles.startButtonIcon} />
        </TouchableOpacity>
      </ScrollView>

      {/* Custom Time Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={customTimeModalVisible}
        onRequestClose={() => setCustomTimeModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoid}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalHandle}></View>
                <Text style={styles.modalTitle}>Set Custom Time</Text>
                <Text style={styles.modalSubtitle}>Enter Duration in Minutes</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.timeInput}
                    placeholder="e.g., 25"
                    keyboardType="numeric"
                    value={customMinutes}
                    onChangeText={setCustomMinutes}
                    maxLength={3}
                  />
                  <Text style={styles.inputSuffix}>minutes</Text>
                </View>

                <Text style={styles.estimatedQuestions}>
                  Estimated: {customMinutes ? Math.min(parseInt(customMinutes), 10) : 0} questions
                </Text>

                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.modalButtonCancel]}
                    onPress={() => setCustomTimeModalVisible(false)}
                  >
                    <Text style={styles.modalButtonTextCancel}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.modalButton, styles.modalButtonConfirm]}
                    onPress={handleCustomTimeSubmit}
                    disabled={!customMinutes || parseInt(customMinutes) <= 0}
                  >
                    <Text style={styles.modalButtonTextConfirm}>Set Time</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fcfcfc',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     zIndex: 10,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 10,
//     shadowColor: '#979595',
//     shadowOffset: { width: 0, height: 2 },
//     borderRadius: 7,
//   },
//   headerTitle: {
//     ...typography.heading,
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   empty: {
//     width: 35,
//     height: 35,
//   },
//   scrollContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   sectionTitle: {
//     ...typography.h2,
//     fontSize: 22,
//     marginBottom: 8,
//     color: colors.dark,
//   },
//   sectionSubtitle: {
//     ...typography.body,
//     color: colors.gray,
//     marginBottom: 24,
//   },
//   timeButtonContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 4,
//     paddingVertical: 12,
//     gap: 12,
//   },
//   timeButton: {
//     backgroundColor: '#f5f5f7',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#e8e8e8',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   timeButtonSelected: {
//     backgroundColor: colors.primary,
//     borderColor: colors.primary,
//     shadowColor: colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 4,
//     transform: [{ scale: 1.02 }],
//   },
//   timeText: {
//     ...typography.h3,
//   },
//   timeButtonTextSelected: {
//     color: '#fff',
//   },
//   customTimeButton: {
//     backgroundColor: '#f0f4ff',
//     borderColor: '#d0dcff',
//   },
//   questionCount: {
//     ...typography.small,
//     color: colors.gray,
//     marginTop: 4,
//   },
//   rulesContainer: {
//     marginTop: 32,
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   rulesList: {
//     marginVertical: 16,
//   },
//   ruleItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   ruleIcon: {
//     marginRight: 12,
//   },
//   ruleText: {
//     ...typography.body,
//     flex: 1,
//     color: colors.darkGray,
//   },
//   acceptButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#e8e8e8',
//   },
//   acceptButtonSelected: {
//     backgroundColor: '#f0f8ff',
//     borderColor: colors.primaryLight,
//   },
//   checkbox: {
//     width: 22,
//     height: 22,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: colors.gray,
//     marginRight: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxSelected: {
//     backgroundColor: colors.primary,
//     borderColor: colors.primary,
//   },
//   acceptText: {
//     ...typography.body,
//     color: colors.dark,
//   },
//   startButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     borderRadius: 12,
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   startButtonInactive: {
//     backgroundColor: '#e8e8e8',
//   },
//   startButtonActive: {
//     backgroundColor: colors.primary,
//     shadowColor: colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   startButtonText: {
//     ...typography.h3,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   startButtonIcon: {
//     marginLeft: 8,
//   },
//   // Modal styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//   },
//   keyboardAvoid: {
//     width: '100%',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 24,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 10,
//   },
//   modalHandle: {
//     width: 50,
//     height: 3,
//     backgroundColor: '#c6c3c3',
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   modalTitle: {
//     ...typography.h2,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   modalSubtitle: {
//     ...typography.body,
//     textAlign: 'center',
//     color: colors.gray,
//     marginBottom: 24,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#e8e8e8',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   timeInput: {
//     flex: 1,
//     paddingVertical: 16,
//     ...typography.h3,
//   },
//   inputSuffix: {
//     ...typography.body,
//     color: colors.gray,
//   },
//   estimatedQuestions: {
//     ...typography.small,
//     color: colors.gray,
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 12,
//   },
//   modalButton: {
//     flex: 1,
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   modalButtonCancel: {
//     backgroundColor: '#f5f5f5',
//     borderWidth: 1,
//     borderColor: '#e8e8e8',
//   },
//   modalButtonConfirm: {
//     backgroundColor: colors.primary,
//   },
//   modalButtonTextCancel: {
//     ...typography.body,
//     color: colors.dark,
//     fontWeight: '600',
//   },
//   modalButtonTextConfirm: {
//     ...typography.body,
//     color: colors.white,
//     fontWeight: '600',
//   },
// });

export default Quiz;