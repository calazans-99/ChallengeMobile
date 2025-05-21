import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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

      <Button title="Cadastrar Moto" onPress={() => navigation.navigate('CadastroMoto')} />
      <View style={{ height: 20 }} />
      <Button title="Ver Motos Cadastradas" onPress={() => navigation.navigate('ListaMotos')} />
      <View style={{ height: 20 }} />
      <Button title="Mapa do Pátio" onPress={() => navigation.navigate('MapaPatio')} />
      <View style={{ height: 20 }} />
      <Button title="Configurações" onPress={() => navigation.navigate('Configuracoes')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
});

export default Home;
