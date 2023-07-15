import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import Spacer from '../components/Spacer';

const Homepage = () => {
  const promptData = [
    {
      id: '1',
      name: 'Momal',
      title: 'This is title',
      tag: 'tags',
      prompt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    },
    {
      id: '2',
      name: 'Maida',
      title: 'This is title',
      tag: 'tags',
      prompt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    },
    {
      id: '3',
      name: 'Sajeel',
      title: 'This is title',
      tag: 'tags',
      prompt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    },
    {
      id: '4',
      name: 'Ahmad',
      title: 'This is title',
      tag: 'tags',
      prompt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    },
    {
      id: '5',
      name: 'Khabir',
      title: 'This is title',
      tag: 'tags',
      prompt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.',
    },
  ];
  const tagData = [
    {
      id: '1',
      tag: 'All',
    },
    {
      id: '2',
      tag: 'Tech',
    },
    {
      id: '3',
      tag: 'Art',
    },
    {
      id: '4',
      tag: 'Science',
    },
    {
      id: '5',
      tag: 'Prog',
    },
  ];
  const promptsList = ({item}) => (
    <View style={styles.flatListContainer}>
      <View style={styles.promptContainer}>
        <Text style={styles.promptTitle}>{item.title}</Text>
        <View style={styles.promptTags}>
          <Text style={styles.promptTagsText}>{item.tag}</Text>
        </View>
        <Text style={styles.promptText} numberOfLines={2}>
          {item.prompt}
        </Text>
        <View style={styles.promptBottom}>
          <Text style={styles.promptName}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
  const tagsList = ({item}) => (
    <View style={styles.tagsContainer}>
      <Text>{item.tag}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Spacer top={20} />
        <Text style={styles.welcomeText}>Welcome! Momal ✨ </Text>
        <Spacer top={20} />
        <Text style={styles.text}>We unlock the full potential of AI!</Text>
      </View>
      <View style={{width: '100%', paddingTop: 10}}>
        <FlatList
          data={tagData}
          renderItem={tagsList}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={[styles.text, {textAlign: 'left', paddingLeft: 10}]}>
          Latest 🔥{' '}
        </Text>
        <Spacer top={20} />
        <FlatList
          data={promptData}
          renderItem={promptsList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
  },
  headingContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  filterPrompt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
  },
  promptContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderColor: '#E3E8F8',
    borderWidth: 0.5,
  },
  promptTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  promptTags: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDCDA',
    padding: 5,
    borderRadius: 20,
    width: 60,
    marginTop: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  promptTagsText: {
    fontSize: 12,
    color: 'red',
    marginRight: 5,
  },
  promptText: {
    fontSize: 14,
    marginTop: 5,
  },
  promptBottom: {
    padding: 5,
    borderTopColor: '#E3E8F8',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  promptName: {
    fontSize: 12,
    color: 'grey',
  },
  tagsContainer: {
    // width: '100%',
    backgroundColor: '#F6F6F0',
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homepage;
