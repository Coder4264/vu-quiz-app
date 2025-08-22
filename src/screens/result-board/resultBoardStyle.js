import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

export const styles = StyleSheet.create({
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
});