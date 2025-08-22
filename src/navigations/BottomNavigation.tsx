import React from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';
import { colors } from '../utils/colors';
import Quiz from '../screens/quiz/Quiz';
import Result from '../screens/result/Result';
import chapterStack from './chapterStack';
import quizStack from './quizStack';
import ResultBoard from '../screens/result-board/ResultBoard';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

// Derived light color from #30304D (20% opacity)
const lightPrimary = '#30304D';

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          height: 65,
          borderTopWidth: 0,
          elevation: 10,
          position: 'absolute',
          bottom: 0,
          left: 30,
          right: 30,
          borderRadius: 20,
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          paddingHorizontal: 10, 
          
        },
        animationEnabled: true,
        animationTypeForReplace: 'push',
        lazy: false,
      }}        
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem 
              focused={focused}
              iconName={focused ? "home" : "home-outline"}
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Subjects" 
        component={chapterStack} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem 
              focused={focused}
              iconName={focused ? "book" : "book-outline"}
              label="Subjects"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Quiz" 
        component={quizStack} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem 
              focused={focused}
              iconName={focused ? "newspaper" : "newspaper-outline"}
              label="Quiz"
            />
          ),
        }}
      />
       <Tab.Screen 
        name="Result Board" 
        component={ResultBoard} 
        
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem 
              focused={focused}
              iconName={focused ? "bar-chart" : "bar-chart-outline"}
              label="Results"
            />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}

const TabBarItem = ({ focused, iconName, label }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  const widthInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 100] 
  });

  const backgroundColorInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', colors.primary]
  });

  return (
    <View style={styles.tabItemContainer}>
      <Animated.View 
        style={[
          styles.tabItem,
          {
            width: widthInterpolate,
            backgroundColor: backgroundColorInterpolate,
            marginHorizontal: 5, 
          }
        ]}
      >
        <Icon 
          name={iconName} 
          size={24} 
          color={focused ? '#fff' : colors.border} 
          style={styles.icon}
        />
        {focused && (
          <Animated.Text 
            style={[
              styles.label,
              {
                opacity: animatedValue,
                transform: [{
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-5, 0]
                  })
                }]
              }
            ]}
          >
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2, 
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginTop:20
  },
  icon: {
    minWidth: 24,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 6,
    overflow: 'hidden', 
  },
});