import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';

import ProfileCard from './components/ProfileCard';
import { Button } from 'react-native-web';

export default function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [showCard, setShowCard] = useState(false)

  const handleCreateCard = () => {
    setShowCard(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TextInput 
          placeholder='Digite seu nome:'
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput 
          placeholder='Digite sua descrição:'
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput 
          placeholder='URL da imagem do perfil:'
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button title='Criar cartão' onPress={handleCreateCard}/>
        </View>

        {showCard && (
          <ProfileCard name={name} description={description} image={image} />
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    padding: 20,
    alignItems: "stretch",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonContainer: {
    marginBottom: 20,
  }
});
