import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏍️ Mottu App</Text>
      <Text style={styles.subtitle}>Mapeamento inteligente de motos</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroMoto')}>
        <Text style={styles.buttonText}>Cadastrar Moto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaMotos')}>
        <Text style={styles.buttonText}>Ver Motos Cadastradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MapaPatio')}>
        <Text style={styles.buttonText}>Mapa do Pátio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuracoes')}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#06C167',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#222222',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#06C167',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
