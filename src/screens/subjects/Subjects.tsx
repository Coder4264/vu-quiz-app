import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './subjectStyle';
import { typography } from '../../utils/typography';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import Chapters from '../chapters/Chapters';

const Subjects = ({ navigation }: { navigation: ParamListBase }) => {
  const nav = useNavigation();
  const { width, height } = useWindowDimensions(); // ✅ auto-updates on rotation

  const [search, setSearch] = useState('');

  const numColumns = width >= 1024 ? 4 : width >= 768 ? 3 : 2;

  const CARD_MARGIN = 12;
  const CARD_WIDTH = (width - CARD_MARGIN * (numColumns + 1)) / numColumns;
  const CARD_HEIGHT = CARD_WIDTH * 1.3; 

  const data = [
    { id: '1', title: 'Math-100', topics: '45 Topics', image: require('../../../assets/images/math.png') },
    { id: '2', title: 'CS-200', topics: '32 Topics', image: require('../../../assets/images/cs.png') },
    { id: '3', title: 'Chemistry-300', topics: '28 Topics', image: require('../../../assets/images/math.png') },
    { id: '4', title: 'CS-502', topics: '50 Topics', image: require('../../../assets/images/cs.png') },
    { id: '5', title: 'CS-502', topics: '50 Topics', image: require('../../../assets/images/cs.png') },
    { id: '6', title: 'CS-502', topics: '50 Topics', image: require('../../../assets/images/cs.png') },
    { id: '7', title: 'CS-502', topics: '50 Topics', image: require('../../../assets/images/cs.png') },
    { id: '8', title: 'CS-502', topics: '50 Topics', image: require('../../../assets/images/cs.png') },
  ];

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <View style={{ margin: 8, }}>
      <View style={[styles.card, { width: CARD_WIDTH * 0.98, height: CARD_HEIGHT }]}>
        <View style={styles.imageContainer}>
          <Image style={styles.cardImage} source={item.image} />
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.topics}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.enrollButton}
          onPress={() => nav.navigate('Chapters')}
        >
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back-outline" size={26}  />
      </TouchableOpacity>
      <Text style={{ ...typography.heading, fontSize: 22, fontWeight: '700' }}>
        Subjects
      </Text>
      <View style={styles.empty}></View>
    </View>

    {/* Search */}
    <View style={styles.searchContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
        <Icon name="search-outline" size={24} color={colors.primary} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.searchText}
          placeholder="Search Subject"
        />
      </View>
    </View>

    {/* Subjects */}
    {filteredData.length > 0 ? (
      <FlatList

        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        key={numColumns}   // ✅ force FlatList to re-render when numColumns changes
        contentContainerStyle={{alignItems: "flex-start", justifyContent: "center", marginHorizontal: "auto" }}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{ width: width * 0.7, height: height * 0.6, resizeMode: 'contain' }}
          source={require("../../../assets/images/error.png")}
        />
      </View>
    )}
  </ScrollView>
  
)};


export default Subjects;
