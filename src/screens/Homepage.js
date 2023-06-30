import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';

const Homepage = () => {
  const [text, setText] = useState(
    'It helps me replace #specific  placeholders or variables with my own custom content. I just need to #provide  the tags I want to replace and the new text I want to use.',
  );
  const [selectedTag, setSelectedTag] = useState('');
  const [newWord, setNewWord] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTagClick = tag => {
    setSelectedTag(tag);
    setModalVisible(true);
  };

  const handleOk = () => {
    const regex = new RegExp(`\\b${selectedTag.replace('#', '')}\\b`, 'g');
    const updatedText = text.replace(regex, newWord);
    setText(updatedText);
    setModalVisible(false);
    setSelectedTag('');
    setNewWord('');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      {text.split('.').map((sentence, index) => {
        const words = sentence.trim().split(' ');
        return (
          <View key={index} style={styles.lineContainer}>
            {words.map((word, wordIndex) => {
              if (word.startsWith('#')) {
                const tag = word;
                return (
                  <TouchableOpacity
                    key={wordIndex}
                    onPress={() => handleTagClick(word)}>
                    <Text style={styles.tag}>{tag}</Text>
                  </TouchableOpacity>
                );
              }
              return <Text key={wordIndex}>{word} </Text>;
            })}
          </View>
        );
      })}

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Enter new word:</Text>
          <TextInput
            style={styles.modalInput}
            value={newWord}
            onChangeText={setNewWord}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  tag: {
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  modalInput: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Homepage;
