import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { typography } from '../../utils/typography';
import { styles } from './homeStyle';
import { colors } from '../../utils/colors';
import Hero from '../../components/hero/Hero';

function Home() {
  const { width, height } = useWindowDimensions(); 
  const numColumns = width >= 1024 ? 4 : width >= 768 ? 3 : 2;
  const CARD_MARGIN = 12;
  const CARD_WIDTH = (width - CARD_MARGIN * (numColumns + 1)) / numColumns;
  const CARD_HEIGHT = CARD_WIDTH * 1.3; // keeps aspect ratio uniform across devices

  const data = [
    {
      id: '1',
      title: 'Math-100',
      topics: '45 Topics',
      image: require('../../../assets/images/math.png'),
    },
    {
      id: '2',
      title: 'CS-200',
      topics: '32 Topics',
      image: require('../../../assets/images/cs.png'),
    },
    {
      id: '3',
      title: 'Chemistry-300',
      topics: '28 Topics',
      image: require('../../../assets/images/math.png'),
    },
    {
      id: '4',
      title: 'CS-502',
      topics: '50 Topics',
      image: require('../../../assets/images/cs.png'),
    },
    {
      id: '5',
      title: 'CS-502',
      topics: '50 Topics',
      image: require('../../../assets/images/cs.png'),
    },
    {
      id: '6',
      title: 'CS-502',
      topics: '50 Topics',
      image: require('../../../assets/images/cs.png'),
    },
    {
      id: '7',
      title: 'CS-502',
      topics: '50 Topics',
      image: require('../../../assets/images/cs.png'),
    },
    {
      id: '8',
      title: 'CS-502',
      topics: '50 Topics',
      image: require('../../../assets/images/cs.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ margin: 8 }}>
      <View
        style={[styles.card, { width: CARD_WIDTH * 0.98, height: CARD_HEIGHT }]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.cardImage} source={item.image} />
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.topics}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.enrollButton}
          // onPress={() => nav.navigate('Chapters')}
        >
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primary}
          translucent={false}
        />

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <Hero/>

          {/*************************************************
                            Subjects here
            *************************************************/}

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            key={numColumns} // ✅ force FlatList to re-render when numColumns changes
            contentContainerStyle={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginHorizontal: 'auto',
            }}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;
