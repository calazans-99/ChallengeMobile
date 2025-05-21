import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@mottu:motos';

export type Moto = {
  modelo: string;
  placa: string;
  status: string;
  posicao: string; 
};

export async function buscarMotos(): Promise<Moto[]> {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error('Erro ao carregar as motos:', error);
    return [];
  }
}

export async function salvarMoto(moto: Moto): Promise<void> {
  try {
    const dadosExistentes = await AsyncStorage.getItem(STORAGE_KEY);
    const lista: Moto[] = dadosExistentes ? JSON.parse(dadosExistentes) : [];
    lista.push(moto);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  } catch (error) {
    console.error('Erro ao salvar a moto:', error);
    throw error;
  }
}

export async function limparMotos(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao limpar as motos:', error);
    throw error;
  }
}
