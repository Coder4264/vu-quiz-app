

export type HexColor = `#${string}`

export type FontWeight = '400' | '500' | '600' | '700'
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none'
export type TextDecorationLine = 'underline' | 'line-through' | 'none'

export type FontFamily =
  | 'Roboto-Regular'
  | 'Roboto-Bold'
  | 'Roboto-Italic'


  export type Colors = {
  primary: HexColor,
  lightPrimary: HexColor,
  secondary: HexColor,
  border: HexColor,
  heading: HexColor,
  subHeading: HexColor,
  success: HexColor,
  danger: HexColor,
  yellow: HexColor,
  green: HexColor,
}
 
export interface TypographyStyle {
  fontSize: number
  fontWeight: FontWeight
  fontFamily: FontFamily
  color?: HexColor
  lineHeight?: number
  textTransform?: TextTransform
  textDecorationLine?: TextDecorationLine
}
export type Typography = {
  h1: TypographyStyle
  h2: TypographyStyle
  h3: TypographyStyle
  heading: TypographyStyle
  subHeading: TypographyStyle
  body: TypographyStyle
  small: TypographyStyle
  button: TypographyStyle
  link: TypographyStyle
  success: TypographyStyle
  danger: TypographyStyle
}
