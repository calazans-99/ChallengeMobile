import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { salvarMoto, buscarMotos } from '../utils/storage';
import { mottuColors, baseScreenStyles as styles } from '../styles/estilosMottu';

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
  const [posicao, setPosicao] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const screenWidth = Dimensions.get('window').width;

  const handleSalvar = async () => {
    if (!modelo.trim() || !placa.trim() || !status || !posicao) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos corretamente!');
      return;
    }

    const existentes = await buscarMotos();
    if (existentes.find(m => m.posicao === posicao)) {
      Alert.alert('Erro', 'Já existe uma moto nesta posição do pátio.');
      return;
    }

    try {
      await salvarMoto({ modelo, placa, status, posicao });
      Alert.alert('Sucesso', 'Moto cadastrada com sucesso!');
      setModelo('');
      setPlaca('');
      setStatus('');
      setPosicao('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a moto.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Moto</Text>

      <TextInput
        placeholder="Modelo da Moto"
        value={modelo}
        onChangeText={setModelo}
        style={[custom.input, { width: screenWidth * 0.9 }]}
      />
      <TextInput
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
        style={[custom.input, { width: screenWidth * 0.9 }]}
      />

      <Text style={custom.label}>Status da Moto</Text>
      <Picker
        selectedValue={status}
        onValueChange={setStatus}
        style={[custom.picker, { width: screenWidth * 0.9 }]}
      >
        <Picker.Item label="Selecione o status..." value="" enabled={false} />
        <Picker.Item label="Disponível" value="disponível" />
        <Picker.Item label="Manutenção" value="manutenção" />
        <Picker.Item label="Indisponível" value="indisponível" />
      </Picker>

      <Text style={custom.label}>Posição no Pátio</Text>
      <Picker
        selectedValue={posicao}
        onValueChange={setPosicao}
        style={[custom.picker, { width: screenWidth * 0.9 }]}
      >
        <Picker.Item label="Selecione a posição..." value="" enabled={false} />
        <Picker.Item label="A1" value="A1" />
        <Picker.Item label="A2" value="A2" />
        <Picker.Item label="A3" value="A3" />
        <Picker.Item label="A4" value="A4" />
        <Picker.Item label="A5" value="A5" />
        <Picker.Item label="A6" value="A6" />
        <Picker.Item label="A7" value="A7" />
        <Picker.Item label="A8" value="A8" />
        <Picker.Item label="A9" value="A9" />
        <Picker.Item label="A10" value="A10" />
        <Picker.Item label="A11" value="A11" />
        <Picker.Item label="A12" value="A12" />
        <Picker.Item label="A13" value="A13" />
        <Picker.Item label="A14" value="A14" />
        <Picker.Item label="A15" value="A15" />
        <Picker.Item label="B1" value="B1" />
        <Picker.Item label="B2" value="B2" />
        <Picker.Item label="B3" value="B3" />
        <Picker.Item label="B4" value="B4" />
        <Picker.Item label="B5" value="B5" />
        <Picker.Item label="B6" value="B6" />
        <Picker.Item label="B7" value="B7" />
        <Picker.Item label="B8" value="B8" />
        <Picker.Item label="B9" value="B9" />
        <Picker.Item label="B10" value="B10" />
        <Picker.Item label="B11" value="B11" />
        <Picker.Item label="B12" value="B12" />
        <Picker.Item label="B13" value="B13" />
        <Picker.Item label="B14" value="B14" />
        <Picker.Item label="B15" value="B15" />
        <Picker.Item label="C1" value="C1" />
        <Picker.Item label="C2" value="C2" />
        <Picker.Item label="C3" value="C3" />
        <Picker.Item label="C4" value="C4" />
        <Picker.Item label="C5" value="C5" />
        <Picker.Item label="C6" value="C6" />
        <Picker.Item label="C7" value="C7" />
        <Picker.Item label="C8" value="C8" />
        <Picker.Item label="C9" value="C9" />
        <Picker.Item label="C10" value="C10" />
        <Picker.Item label="C11" value="C11" />
        <Picker.Item label="C12" value="C12" />
        <Picker.Item label="C13" value="C13" />
        <Picker.Item label="C14" value="C14" />
        <Picker.Item label="C15" value="C15" />
        <Picker.Item label="D1" value="D1" />
        <Picker.Item label="D2" value="D2" />
        <Picker.Item label="D3" value="D3" />
        <Picker.Item label="D4" value="D4" />
        <Picker.Item label="D5" value="D5" />
        <Picker.Item label="D6" value="D6" />
        <Picker.Item label="D7" value="D7" />
        <Picker.Item label="D8" value="D8" />
        <Picker.Item label="D9" value="D9" />
        <Picker.Item label="D10" value="D10" />
        <Picker.Item label="D11" value="D11" />
        <Picker.Item label="D12" value="D12" />
        <Picker.Item label="D13" value="D13" />
        <Picker.Item label="D14" value="D14" />
        <Picker.Item label="D15" value="D15" />
        <Picker.Item label="E1" value="E1" />
        <Picker.Item label="E2" value="E2" />
        <Picker.Item label="E3" value="E3" />
        <Picker.Item label="E4" value="E4" />
        <Picker.Item label="E5" value="E5" />
        <Picker.Item label="E6" value="E6" />
        <Picker.Item label="E7" value="E7" />
        <Picker.Item label="E8" value="E8" />
        <Picker.Item label="E9" value="E9" />
        <Picker.Item label="E10" value="E10" />
        <Picker.Item label="E11" value="E11" />
        <Picker.Item label="E12" value="E12" />
        <Picker.Item label="E13" value="E13" />
        <Picker.Item label="E14" value="E14" />
        <Picker.Item label="E15" value="E15" />
        <Picker.Item label="F1" value="F1" />
        <Picker.Item label="F2" value="F2" />
        <Picker.Item label="F3" value="F3" />
        <Picker.Item label="F4" value="F4" />
        <Picker.Item label="F5" value="F5" />
        <Picker.Item label="F6" value="F6" />
        <Picker.Item label="F7" value="F7" />
        <Picker.Item label="F8" value="F8" />
        <Picker.Item label="F9" value="F9" />
        <Picker.Item label="F10" value="F10" />
        <Picker.Item label="F11" value="F11" />
        <Picker.Item label="F12" value="F12" />
        <Picker.Item label="F13" value="F13" />
        <Picker.Item label="F14" value="F14" />
        <Picker.Item label="F15" value="F15" />
        <Picker.Item label="G1" value="G1" />
        <Picker.Item label="G2" value="G2" />
        <Picker.Item label="G3" value="G3" />
        <Picker.Item label="G4" value="G4" />
        <Picker.Item label="G5" value="G5" />
        <Picker.Item label="G6" value="G6" />
        <Picker.Item label="G7" value="G7" />
        <Picker.Item label="G8" value="G8" />
        <Picker.Item label="G9" value="G9" />
        <Picker.Item label="G10" value="G10" />
        <Picker.Item label="G11" value="G11" />
        <Picker.Item label="G12" value="G12" />
        <Picker.Item label="G13" value="G13" />
        <Picker.Item label="G14" value="G14" />
        <Picker.Item label="G15" value="G15" />
        <Picker.Item label="H1" value="H1" />
        <Picker.Item label="H2" value="H2" />
        <Picker.Item label="H3" value="H3" />
        <Picker.Item label="H4" value="H4" />
        <Picker.Item label="H5" value="H5" />
        <Picker.Item label="H6" value="H6" />
        <Picker.Item label="H7" value="H7" />
        <Picker.Item label="H8" value="H8" />
        <Picker.Item label="H9" value="H9" />
        <Picker.Item label="H10" value="H10" />
        <Picker.Item label="H11" value="H11" />
        <Picker.Item label="H12" value="H12" />
        <Picker.Item label="H13" value="H13" />
        <Picker.Item label="H14" value="H14" />
        <Picker.Item label="H15" value="H15" />
        <Picker.Item label="I1" value="I1" />
        <Picker.Item label="I2" value="I2" />
        <Picker.Item label="I3" value="I3" />
        <Picker.Item label="I4" value="I4" />
        <Picker.Item label="I5" value="I5" />
        <Picker.Item label="I6" value="I6" />
        <Picker.Item label="I7" value="I7" />
        <Picker.Item label="I8" value="I8" />
        <Picker.Item label="I9" value="I9" />
        <Picker.Item label="I10" value="I10" />
        <Picker.Item label="I11" value="I11" />
        <Picker.Item label="I12" value="I12" />
        <Picker.Item label="I13" value="I13" />
        <Picker.Item label="I14" value="I14" />
        <Picker.Item label="I15" value="I15" />
        <Picker.Item label="J1" value="J1" />
        <Picker.Item label="J2" value="J2" />
        <Picker.Item label="J3" value="J3" />
        <Picker.Item label="J4" value="J4" />
        <Picker.Item label="J5" value="J5" />
        <Picker.Item label="J6" value="J6" />
        <Picker.Item label="J7" value="J7" />
        <Picker.Item label="J8" value="J8" />
        <Picker.Item label="J9" value="J9" />
        <Picker.Item label="J10" value="J10" />
        <Picker.Item label="J11" value="J11" />
        <Picker.Item label="J12" value="J12" />
        <Picker.Item label="J13" value="J13" />
        <Picker.Item label="J14" value="J14" />
        <Picker.Item label="J15" value="J15" />
        <Picker.Item label="K1" value="K1" />
        <Picker.Item label="K2" value="K2" />
        <Picker.Item label="K3" value="K3" />
        <Picker.Item label="K4" value="K4" />
        <Picker.Item label="K5" value="K5" />
        <Picker.Item label="K6" value="K6" />
        <Picker.Item label="K7" value="K7" />
        <Picker.Item label="K8" value="K8" />
        <Picker.Item label="K9" value="K9" />
        <Picker.Item label="K10" value="K10" />
        <Picker.Item label="K11" value="K11" />
        <Picker.Item label="K12" value="K12" />
        <Picker.Item label="K13" value="K13" />
        <Picker.Item label="K14" value="K14" />
        <Picker.Item label="K15" value="K15" />
        <Picker.Item label="L1" value="L1" />
        <Picker.Item label="L2" value="L2" />
        <Picker.Item label="L3" value="L3" />
        <Picker.Item label="L4" value="L4" />
        <Picker.Item label="L5" value="L5" />
        <Picker.Item label="L6" value="L6" />
        <Picker.Item label="L7" value="L7" />
        <Picker.Item label="L8" value="L8" />
        <Picker.Item label="L9" value="L9" />
        <Picker.Item label="L10" value="L10" />
        <Picker.Item label="L11" value="L11" />
        <Picker.Item label="L12" value="L12" />
        <Picker.Item label="L13" value="L13" />
        <Picker.Item label="L14" value="L14" />
        <Picker.Item label="L15" value="L15" />
        <Picker.Item label="M1" value="M1" />
        <Picker.Item label="M2" value="M2" />
        <Picker.Item label="M3" value="M3" />
        <Picker.Item label="M4" value="M4" />
        <Picker.Item label="M5" value="M5" />
        <Picker.Item label="M6" value="M6" />
        <Picker.Item label="M7" value="M7" />
        <Picker.Item label="M8" value="M8" />
        <Picker.Item label="M9" value="M9" />
        <Picker.Item label="M10" value="M10" />
        <Picker.Item label="M11" value="M11" />
        <Picker.Item label="M12" value="M12" />
        <Picker.Item label="M13" value="M13" />
        <Picker.Item label="M14" value="M14" />
        <Picker.Item label="M15" value="M15" />
        <Picker.Item label="N1" value="N1" />
        <Picker.Item label="N2" value="N2" />
        <Picker.Item label="N3" value="N3" />
        <Picker.Item label="N4" value="N4" />
        <Picker.Item label="N5" value="N5" />
        <Picker.Item label="N6" value="N6" />
        <Picker.Item label="N7" value="N7" />
        <Picker.Item label="N8" value="N8" />
        <Picker.Item label="N9" value="N9" />
        <Picker.Item label="N10" value="N10" />
        <Picker.Item label="N11" value="N11" />
        <Picker.Item label="N12" value="N12" />
        <Picker.Item label="N13" value="N13" />
        <Picker.Item label="N14" value="N14" />
        <Picker.Item label="N15" value="N15" />
        <Picker.Item label="O1" value="O1" />
        <Picker.Item label="O2" value="O2" />
        <Picker.Item label="O3" value="O3" />
        <Picker.Item label="O4" value="O4" />
        <Picker.Item label="O5" value="O5" />
        <Picker.Item label="O6" value="O6" />
        <Picker.Item label="O7" value="O7" />
        <Picker.Item label="O8" value="O8" />
        <Picker.Item label="O9" value="O9" />
        <Picker.Item label="O10" value="O10" />
        <Picker.Item label="O11" value="O11" />
        <Picker.Item label="O12" value="O12" />
        <Picker.Item label="O13" value="O13" />
        <Picker.Item label="O14" value="O14" />
        <Picker.Item label="O15" value="O15" />
      </Picker>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar Moto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: screenWidth * 0.9 }]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const custom = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
  },
});

export default CadastroMoto;