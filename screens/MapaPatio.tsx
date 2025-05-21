import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

const MapaPatio: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa do Pátio</Text>
      <Text style={styles.subtitle}>
        Visualização do layout do pátio com as motos cadastradas (em desenvolvimento).
      </Text>

      <View style={{ marginTop: 24 }}>
        <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default MapaPatio;
