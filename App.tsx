import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './src/utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';

const { width, height } = Dimensions.get('window');

function App() {
  return (
    <NavigationContainer>
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primary}
          translucent={false}
        />
        <BottomNavigation/>

      </SafeAreaView>
    </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  safeArea: {
    flex: 1,
  },
  
});

export default App;