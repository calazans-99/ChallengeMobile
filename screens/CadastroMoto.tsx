import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { salvarMoto } from '../utils/storage';

// Tipagem das rotas
type RootStackParamList = {
  Home: undefined;
  CadastroMoto: undefined;
  ListaMotos: undefined;
  MapaPatio: undefined;
  Configuracoes: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CadastroMoto: React.FC = () => {
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [status, setStatus] = useState('');

  const navigation = useNavigation<NavigationProp>();

  const handleSalvar = async () => {
    if (!modelo.trim() || !placa.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos corretamente!');
      return;
    }

    try {
      await salvarMoto({ modelo, placa, status });
      Alert.alert('Sucesso', 'Moto cadastrada com sucesso!');
      setModelo('');
      setPlaca('');
      setStatus('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a moto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Moto</Text>

      <TextInput
        placeholder="Modelo da Moto"
        value={modelo}
        onChangeText={setModelo}
        style={styles.input}
      />
      <TextInput
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
        style={styles.input}
      />
      <TextInput
        placeholder="Status (opcional)"
        value={status}
        onChangeText={setStatus}
        style={styles.input}
      />

      <Button title="Salvar Moto" onPress={handleSalvar} />

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
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
});

export default CadastroMoto;
