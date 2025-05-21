import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { mottuColors, baseScreenStyles as styles } from '../styles/estilosMottu';

type RootStackParamList = {
  Home: undefined;
  CadastroMoto: undefined;
  ListaMotos: undefined;
  MapaPatio: undefined;
  Configuracoes: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏍️ Mottu App</Text>
      <Text style={styles.subtitle}>Mapeamento inteligente de motos</Text>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={() => navigation.navigate('CadastroMoto')}>
        <Text style={styles.buttonText}>Cadastrar Moto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={() => navigation.navigate('ListaMotos')}>
        <Text style={styles.buttonText}>Ver Motos Cadastradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={() => navigation.navigate('MapaPatio')}>
        <Text style={styles.buttonText}>Mapa do Pátio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={() => navigation.navigate('Configuracoes')}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;