import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { buscarMotos, Moto } from '../utils/storage';

const MapaPatio: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const windowWidth = Dimensions.get('window').width;
  const cellSize = Math.max(30, Math.floor((windowWidth - 60) / 15));

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
    <ScrollView>
      <View style={styles.legendaContainer}>
        <Text style={styles.legendaTitulo}>Legenda:</Text>
        <View style={styles.legendaItem}>
          <View style={[styles.legendaCor, { backgroundColor: '#81c784' }]} />
          <Text style={styles.legendaTexto}>Disponível</Text>
        </View>
        <View style={styles.legendaItem}>
          <View style={[styles.legendaCor, { backgroundColor: '#ffeb3b' }]} />
          <Text style={styles.legendaTexto}>Manutenção</Text>
        </View>
        <View style={styles.legendaItem}>
          <View style={[styles.legendaCor, { backgroundColor: '#ef5350' }]} />
          <Text style={styles.legendaTexto}>Indisponível</Text>
        </View>
      </View>

      <ScrollView horizontal>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 30 }} />
            {numeros.map((num) => (
              <Text key={`col-${num}`} style={[styles.headerCell, { width: cellSize }]}>
                {num}
              </Text>
            ))}
          </View>
          {letras.map((letra) => (
            <View key={`row-${letra}`} style={{ flexDirection: 'row' }}>
              <Text style={[styles.rowLabel, { height: cellSize }]}>{letra}</Text>
              {numeros.map((coluna) => {
                const pos = `${letra}${coluna}`;
                const moto = obterMotoNaPosicao(pos);
                const bgColor = moto ? getStatusColor(moto.status) : '#fff';
                return (
                  <View key={pos} style={[styles.cell, { backgroundColor: bgColor, width: cellSize, height: cellSize }]}>
                    {moto ? (
                      <>
                        <Text style={styles.motoEmoji}>🛵</Text>
                        <Text style={styles.motoInfo} numberOfLines={1}>{moto.modelo}</Text>
                        <Text style={styles.motoInfo} numberOfLines={1}>{moto.placa}</Text>
                      </>
                    ) : null}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerCell: {
    height: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rowLabel: {
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  motoEmoji: {
    fontSize: 18,
  },
  motoInfo: {
    fontSize: 8,
    textAlign: 'center',
    color: '#222',
    width: '100%',
  },
  legendaContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  legendaTitulo: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  legendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  legendaCor: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 4,
    borderWidth: 1,
    borderColor: '#999',
  },
  legendaTexto: {
    fontSize: 12,
  },
});

export default MapaPatio;