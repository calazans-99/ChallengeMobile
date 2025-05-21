import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Moto, buscarMotos } from '../utils/storage';
import MotoCard from '../components/MotoCard';

const ListaMotos: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);

  useEffect(() => {
    const carregarMotos = async () => {
      const dados = await buscarMotos(); // 🔥 Aqui é onde vai
      setMotos(dados);
    };

    carregarMotos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motos Cadastradas</Text>

      {motos.length === 0 ? (
        <Text style={styles.vazio}>Nenhuma moto cadastrada ainda.</Text>
      ) : (
        <FlatList
          data={motos}
          keyExtractor={(item, index) => `${item.placa}-${index}`}
          renderItem={({ item }) => <MotoCard moto={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  vazio: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ListaMotos;
