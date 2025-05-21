import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import CadastroMoto from './screens/CadastroMoto';
import ListaMotos from './screens/ListaMotos';
import MapaPatio from './screens/MapaPatio';
import Configuracoes from './screens/Configuracoes';

export type RootStackParamList = {
  Home: undefined;
  CadastroMoto: undefined;
  ListaMotos: undefined;
  MapaPatio: undefined;
  Configuracoes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroMoto" component={CadastroMoto} />
        <Stack.Screen name="ListaMotos" component={ListaMotos} />
        <Stack.Screen name="MapaPatio" component={MapaPatio} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
