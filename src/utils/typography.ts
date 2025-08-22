import { Typography } from './types'
import { colors } from './colors'

export const typography: Typography = {
  h1: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.heading,
    lineHeight: 36,
    fontFamily: 'Roboto-Regular',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.heading,
    lineHeight: 32,
    fontFamily: 'Roboto-Regular',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.heading,
    lineHeight: 28,
    fontFamily: 'Roboto-Bold',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.heading,
    lineHeight: 26,
    fontFamily: 'Roboto-Regular',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.subHeading,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.border,
    lineHeight: 22,
    fontFamily: 'Roboto-Regular',
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.border,
    lineHeight: 18,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.secondary,
    // textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
  },
  link: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Regular',
  },
  success: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.success,
    fontFamily: 'Roboto-Regular',
  },
  danger: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.danger,
    fontFamily: 'Roboto-Regular',
  },
}
