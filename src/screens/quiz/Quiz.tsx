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
      const questionCount = Math.min(selectedTime); // Max 10 questions for demo
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


export default Quiz;