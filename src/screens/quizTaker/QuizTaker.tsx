import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const sampleQuestions = [
  {
    id: 1,
    question: "Which language is used in React?",
    options: ["Java", "JavaScript", "Python", "C#"],
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 3,
    question: "2 + 2 equals?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 4,
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    id: 5,
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
    answer: "Islamabad",
  },
  {
    id: 6,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 7,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    answer: "Oxygen",
  },
  {
    id: 8,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 9,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    id: 10,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
];

const QuizTaker = ({ route, navigation }) => {
  const parentNav = useNavigation();

  useLayoutEffect(() => {
    // Hide tab bar
    parentNav.getParent()?.setOptions({ 
      tabBarStyle: { display: "none" } 
    });

    // return () => {
    //   // Restore default style (important!)
    //   parentNav.getParent()?.setOptions({ 
    //     tabBarStyle: {
    //       backgroundColor: "#fff",  // your tab bar background
    //       height: 65,              // default height (or leave out if auto)
    //       position: "absolute",
    //     }
    //   });
    // };
  }, [parentNav]);
  const { duration, questionCount } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert to seconds
  const [questions] = useState(sampleQuestions.slice(0, questionCount));
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Time's up, finish the quiz
      finishQuiz();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (option) => {
    if (answered) return;
    
    setSelected(option);
    setAnswered(true);
    
    // Check if answer is correct
    if (option === questions[currentQuestion].answer) {
  setScore(prev => prev + 1);
}

    
    // Auto-advance after 1 second if it's the last question
    if (currentQuestion + 1 === questions.length) {
  setTimeout(() => {
    finishQuiz(option === questions[currentQuestion].answer ? score + 1 : score);
  }, 500);
}

  };

  const handleNext = () => {
    // Move to next question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = (finalScore = score) => {
  navigation.replace('QuizResult', { 
    score: finalScore, 
    total: questions.length,
    timeSpent: (duration * 60) - timeLeft 
  });
};


  // Format time as MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <View style={styles.quizContainer}>
      {/* Header with progress and timer */}
      <View style={styles.quizHeader}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
        
        <View style={styles.timerContainer}>
          <Icon name="time-outline" size={20} color={colors.secondary} />
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Question */}

        <View style={styles.questionContainer}>
                  <Text style={{fontSize: 15,letterSpacing: 2.5, fontWeight: "500", color: colors.border,}} >
            QUESTION NO # {currentQuestion + 1  }
          </Text>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
        </View>

        {/* Options */}
        {questions[currentQuestion].options.map((option, index) => {
          let optionStyle = styles.optionButton;
          let optionState = '';
          
          if (answered) {
            if (option === questions[currentQuestion].answer) {
              optionStyle = {...optionStyle, ...styles.optionCorrect};
              optionState = 'correct';
            } else if (option === selected && option !== questions[currentQuestion].answer) {
              optionStyle = {...optionStyle, ...styles.optionIncorrect};
              optionState = 'incorrect';
            }
          } else if (option === selected) {
            optionStyle = {...optionStyle, ...styles.optionSelected};
          }
          
          return (
            <TouchableOpacity
              key={index}
              style={optionStyle}
              onPress={() => handleAnswer(option)}
              disabled={answered}
            >
              <Text style={styles.optionText}>{option}</Text>
              {optionState === 'correct' && (
                <Icon name="checkmark-circle" size={24} color={colors.success} style={styles.optionIcon} />
              )}
              {optionState === 'incorrect' && (
                <Icon name="close-circle" size={24} color={colors.danger} style={styles.optionIcon} />
              )}
            </TouchableOpacity>
          );
        })}

        {/* Next Button */}
        {answered && currentQuestion + 1 < questions.length && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              Next Question
            </Text>
            <Icon name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  progressContainer: {
    flex: 1,
    marginRight: 16,
  },
  progressText: {
    ...typography.body,
    color: "gray",
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#504184ff",
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.yellow,
    borderRadius: 3,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  timerText: {
    ...typography.h3,
    color: colors.secondary,
    marginLeft: 6,
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  questionContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 25,
    paddingHorizontal: 5,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  questionText: {
    ...typography.h3,
    fontSize: 22,
    fontWeight: '600',
    color: colors.secondary,
    marginVertical: 16,
    lineHeight: 28,
  },
  optionButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e3e2e2ff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionCorrect: {
    // backgroundColor: '#D1FAE5',
    borderColor: colors.success,
  },
  optionIncorrect: {
    // backgroundColor: '#FEE2E2',
    borderColor: colors.danger,
  },
  optionText: {
    ...typography.body,
    flex: 1,
    fontSize:20,
    color:colors.secondary
  },
  optionIcon: {
    marginLeft: 8,
  },
  nextButton: {
    backgroundColor: colors.yellow,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nextButtonText: {
    ...typography.h3,
    color: colors.primary,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default QuizTaker;