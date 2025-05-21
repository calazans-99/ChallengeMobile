import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Moto } from '../utils/storage';

type Props = {
  moto: Moto;
};

const MotoCard: React.FC<Props> = ({ moto }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Modelo:</Text>
      <Text style={styles.text}>{moto.modelo}</Text>

      <Text style={styles.label}>Placa:</Text>
      <Text style={styles.text}>{moto.placa}</Text>

      {moto.status && (
        <>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.text}>{moto.status}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    elevation: 2, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 6,
  },
});

export default MotoCard;
