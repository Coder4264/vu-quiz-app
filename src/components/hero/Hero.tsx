import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { styles } from './heroStyle';
import { colors } from '../../utils/colors';

const Hero = () => {
  const { width, height } = useWindowDimensions();

  // breakpoints
  const isSmall = width < 480;
  const isTablet = width >= 768;

  return (
    <View style={[styles.header, { height: height * 0.3 }]}>
      {/* Logo */}
      <Image
        style={{
          alignSelf: 'flex-start',
          width: isSmall ? width * 0.35 : width * 0.3,
          height: height * 0.06,
          resizeMode: 'contain',
          marginTop: 16,
        }}
        source={require('../../../assets/images/logo.png')}
        accessibilityLabel="App Logo"
      />

      {/* Character */}
      <Image
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: isSmall ? width * 0.4 : width * 0.4,
          height: height * 0.24,
        }}
        source={require('../../../assets/images/character.png')}
        accessibilityLabel="Motivational Character"
      />

      {/* Text + Button */}
      <View
        style={{
          position: 'absolute',
          bottom: height * 0.05,
          left: width * 0.05,
          maxWidth: width * 0.6,
        }}
      >
        <Text
          style={{
            fontSize: isSmall ? 22 : isTablet ? 36 : 26,
            fontWeight: '700',
            color: colors.secondary,
            marginBottom: 4,
          }}
        >
          Challenge Yourself
        </Text>
        <Text
          style={{
            fontSize: isSmall ? 14 : 18,
            color: colors.secondary,
          }}
        >
          Keep practicing to stay ahead!
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginTop: 14,
            backgroundColor: colors.secondary,
            width: isSmall ? width * 0.35 : width * 0.25,
            height: height * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: isSmall ? 6 : 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: isSmall ? 16 : 20,
              fontWeight: '500',
              color: colors.primary,
            }}
          >
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hero;
