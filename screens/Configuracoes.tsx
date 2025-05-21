import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { limparMotos, buscarMotos, Moto } from '../utils/storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { mottuColors, baseScreenStyles as styles } from '../styles/estilosMottu';

type RootStackParamList = {
  Home: undefined;
  Configuracoes: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Configuracoes: React.FC = () => {
  const [quantidade, setQuantidade] = useState<number>(0);
  const navigation = useNavigation<NavigationProp>();
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const carregar = async () => {
      const motos: Moto[] = await buscarMotos();
      setQuantidade(motos.length);
    };
    carregar();
  }, []);

  const handleLimpar = async () => {
    Alert.alert(
      'Confirmar',
      'Deseja apagar todas as motos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: async () => {
            await limparMotos();
            setQuantidade(0);
            Alert.alert('Todas as motos foram apagadas.');
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>
      <Text style={styles.subtitle}>Total de motos cadastradas: {quantidade}</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: mottuColors.alert, width: screenWidth * 0.9 }]}
        onPress={handleLimpar}
      >
        <Text style={styles.buttonText}>Apagar todas as motos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { width: screenWidth * 0.9 }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Configuracoes;