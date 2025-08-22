import { StyleSheet, Dimensions } from 'react-native';

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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  empty: {
    width: 35,
    height: 35,
  },
  container:{
    flex:1,
    height: height,
backgroundColor:"#fcfcfcff",
  },
  chapterContainer: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginVertical:6,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    elevation:10,
    shadowColor:"#E3E3EC"
  },
  indexContainer: {
    height: 45,
    width: 45,
    backgroundColor: '#eeeeeeff',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  index: {
    ...typography.h1,
    color: '#30304D',
    fontSize: 24,
  },
  chapterNameContainer: {
    height: 45,
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  chapterHeading: {
    ...typography.h1,
    color: colors.primary,
    fontSize: 18,
    lineHeight: 22,
    marginTop:5,
  },
  description: {
    ...typography.body,
    fontSize: 14,
  },
});
