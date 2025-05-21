import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Moto, buscarMotos } from '../utils/storage';
import MotoCard from '../components/MotoCard';
import { mottuColors, baseScreenStyles as styles } from '../styles/estilosMottu';

const ListaMotos: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const dados = await buscarMotos();
      setMotos(dados);
    };
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motos Cadastradas</Text>

      {motos.length === 0 ? (
        <Text style={styles.subtitle}>Nenhuma moto cadastrada ainda.</Text>
      ) : (
        <FlatList
          data={motos}
          keyExtractor={(item, index) => `${item.placa}-${index}`}
          renderItem={({ item }) => <MotoCard moto={item} />}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

export default ListaMotos;
