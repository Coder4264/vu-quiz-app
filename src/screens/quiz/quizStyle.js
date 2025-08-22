// quizStyle.js
import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#fcfcfcff',
    marginBottom:65,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#979595ff',
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10,
  },
  empty: {
    width: 35,
    height: 35,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    ...typography.h2,
    fontSize: 22,
    marginBottom: 8,
    color: colors.dark,
  },
  sectionSubtitle: {
    ...typography.body,
    color: colors.gray,
    marginBottom: 24,
  },
  timeButtonContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // spread buttons properly
  paddingHorizontal: 10,
  paddingVertical: 12,
  gap: 10,
},

timeButton: {
  flex: 1, // ✅ auto expand to fill space
  minWidth: '45%', // ensures good look for 2 buttons
  backgroundColor: '#f5f5f5ff',
  paddingVertical: 12,
  borderRadius: 7,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth:1,
  borderColor:"#f0f0f0",
  elevation:5,
  shadowColor:"#a1a1a1ff"
},

  timeButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    transform: [{ scale: 1.02 }],
  },
  timeButtonTextSelected: {
    color: '#fff',
  },
  customTimeButton: {
    // backgroundColor: '#f0f4ff',
    // borderColor: '#d0dcff',
  },
  questionCount: {
    ...typography.small,
    color: colors.gray,
    marginTop: 4,
  },
  rulesContainer: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 0,
  },
  rulesList: {
    marginVertical: 16,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ruleIcon: {
    marginRight: 12,
  },
  ruleText: {
    ...typography.body,
    flex: 1,
    color: colors.darkGray,
  },
  acceptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    // backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  acceptButtonSelected: {
    // backgroundColor: '#f0f8ff',
    borderColor: "#f0f0f0",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  acceptText: {
    ...typography.body,
    color: colors.dark,
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom:40
  },
  startButtonInactive: {
    backgroundColor: '#e8e8e8',
  },
  startButtonActive: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  startButtonText: {
    ...typography.h3,
    color: '#fff',
    fontWeight: '600',
  },
  startButtonIcon: {
    marginLeft: 8,
  },
  // Modal styles
  modalOverlay: {
  flex: 1,
  justifyContent: 'flex-end', // ✅ pushes content to bottom
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
keyboardAvoid: { width: '100%', },
modalContent: {
  width: width,       
  height: height * 0.4, 
  position:"absolute",
  bottom:0,
  backgroundColor: 'white',
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16, 
  padding: 24,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 0,
},

  modalTitle: {
    ...typography.h3,
    textAlign: 'center',
    fontWeight:"600",
    marginBottom: 0,
  },
  modalSubtitle: {
    ...typography.body,
    textAlign: 'center',
    color: "#949494ff",
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 6,
    backgroundColor: '#fafafa',
  },
  timeInput: {
    flex: 1,
    paddingVertical: 16,
    ...typography.h3,
  },
  inputSuffix: {
    ...typography.body,
    color: colors.gray,
  },
  estimatedQuestions: {
    ...typography.small,
    color: colors.gray,
    textAlign: 'flex-end',
    marginBottom: 24,
    marginLeft:6
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop:20
  },
  modalButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  modalButtonConfirm: {
    backgroundColor: colors.primary,
  },
  modalButtonTextCancel: {
    ...typography.body,
    color: colors.dark,
    fontWeight: '600',
  },
  modalButtonTextConfirm: {
    ...typography.body,
    color: '#fff',
    fontWeight: '600',
  },
});

