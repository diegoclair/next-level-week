import React, {useState, useEffect} from 'react';
import { Feather as Icon} from '@expo/vector-icons'
import { StyleSheet, Image, View, Text, ImageBackground, Alert, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'


//to install fonst on expo -> expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
//install react navigation -> See docs: https://reactnavigation.org/docs/getting-started/
//npm i @react-navigation/stack

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

const Home = () => {

  const navigation = useNavigation();
  
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => {
      const ufInitials = response.data.map(uf => uf.sigla)
      setUfs(ufInitials)
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const city = response.data.map(city => city.nome)
      setCities(city)
    });
    
  }, [selectedUf]); //here we say that this useEffect will be called when the variable selectedUf change

  function handleNavigateToPoints(){
    if(selectedUf === '0' || selectedCity === '0') {
      Alert.alert('Por gentileza selecione a UF e a Cidade para continuar')
      return;
    }
    navigation.navigate('Points', {
      selectedUf, 
      selectedCity
    });
  }
  
  // The View after line with image logo, was necessary for the ios system

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container}
        imageStyle={{width: 274, height: 368}}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View> 
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
          </View>
        </View>

        <View style={styles.footer} >
          <View style={styles.select}>
            <Picker
              style={styles.picker}
              mode='dropdown'
              selectedValue={selectedUf}
              onValueChange={(itemValue, itemIndex) => setSelectedUf(itemValue)}
            >
              <Picker.Item label="Selecione uma UF" value="0" />
              {ufs.map(uf => [
                <Picker.Item 
                  key={uf}
                  label={uf} 
                  value={uf} 
                />
              ])}
            </Picker>
          </View>
          <View style={styles.select}>
            <Picker
              style={styles.picker}
              mode='dropdown'
              selectedValue={selectedCity}
              onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
            >
              <Picker.Item label="Selecione uma Cidade" value="0" />
              {cities.map(city => [
                <Picker.Item 
                  key={city}
                  label={city} 
                  value={city} 
                />
              ])}
            </Picker>
          </View>
          <RectButton 
            style={styles.button} 
            onPress={handleNavigateToPoints}
            >
            <View style={styles.buttonIcon}>
              <Text><Icon name='arrow-right' color='#fff' size={24} /></Text>
            </View>
            <Text style={styles.buttonText}>
            <Text>Entrar</Text>
            </Text>
          </RectButton>
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},
  
  picker: {
    height: 60,
    color: '#747474',
  },

  select: {
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;