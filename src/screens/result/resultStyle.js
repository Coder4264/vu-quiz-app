
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

export const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
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
    paddingVertical: 16,
    paddingHorizontal:12,
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
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '600',
  },
  PrimaryButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
});