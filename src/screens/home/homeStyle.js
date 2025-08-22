import { StyleSheet, Dimensions } from "react-native";
import { typography } from "../../utils/typography";
const { width, height } = Dimensions.get('window');
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    marginBottom: 65,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: colors.secondary,
  },
  
  heading:{
    // width: width * 0.95,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 16
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: '#f5f5f5ff',
    borderRadius: 12,
    padding: 5,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardTitle: {
    ...typography.h3,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 2,
  },
  cardSubtitle: {
    ...typography.body,
    textAlign: 'center',
    color: '#718096',
    marginBottom: 6,
  },
  enrollButton: {
    backgroundColor: '#ffdf20',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  enrollButtonText: {
    ...typography.body,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
});