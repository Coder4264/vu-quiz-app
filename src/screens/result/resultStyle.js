// import { StyleSheet, Dimensions } from "react-native";

// const { width, height } = Dimensions.get('window');
// import { colors } from '../../utils/colors';
// import { typography } from '../../utils/typography';

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: '#fff',

//     },
//     backButton:{
//         width: 40,
//         height: 40,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         justifyContent: 'center',
//         elevation: 10,
//         shadowColor: "#979595ff",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
// borderRadius: 7,
//     },
//     header:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//         padding: 16,
//         backgroundColor: '#fff'
//     },
//     empty:{
//         width: 35,
//         height: 35,
//     }
// });






import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

export const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  resultCard: {
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  resultTitle: {
    ...typography.heading,
    marginBottom: 16,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  scoreText: {
    ...typography.h2,
    fontSize: 24,
    color: colors.primary,
    fontWeight: '700',
  },
  percentageText: {
    ...typography.h2,
    fontSize: 32,
    color: colors.primary,
    fontWeight: '800',
    marginTop: 8,
  },
  resultMessage: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    ...typography.h3,
    color: colors.dark,
    marginVertical: 8,
  },
  statLabel: {
    ...typography.small,
    color: colors.gray,
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  tryAgainButton: {
    backgroundColor: colors.secondary,
  },
  actionButtonText: {
    ...typography.body,
    color: colors.white,
    fontWeight: '600',
  },
});