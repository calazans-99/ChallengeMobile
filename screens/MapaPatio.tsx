import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { buscarMotos, salvarMoto, Moto } from '../utils/storage';

const MapaPatio: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const dados = await buscarMotos();
      setMotos(dados);
    };
    carregar();
  }, []);

  const obterMotoNaPosicao = (posicao: string): Moto | undefined =>
    motos.find((moto) => moto.posicao === posicao);

  const letras = 'ABCDEFGHIJKLMNO'.split('');
  const numeros = Array.from({ length: 15 }, (_, i) => i + 1);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'manutenção':
        return '#ffeb3b';
      case 'indisponível':
        return '#ef5350';
      case 'disponível':
      default:
        return '#81c784';
    }
  };

  return (
    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 30 }} />
        {numeros.map((num) => (
          <Text key={`col-${num}`} style={styles.headerCell}>{num}</Text>
        ))}
      </View>
      {letras.map((letra) => (
        <View key={`row-${letra}`} style={{ flexDirection: 'row' }}>
          <Text style={styles.rowLabel}>{letra}</Text>
          {numeros.map((coluna) => {
            const pos = `${letra}${coluna}`;
            const moto = obterMotoNaPosicao(pos);
            const bgColor = moto ? getStatusColor(moto.status) : '#fff';
            return (
              <View key={pos} style={[styles.cell, { backgroundColor: bgColor }]}>
                <Text style={styles.cellText}>{moto ? '🛵' : ''}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerCell: {
    width: 40,
    height: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rowLabel: {
    width: 30,
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 18,
  },
});

export default MapaPatio;