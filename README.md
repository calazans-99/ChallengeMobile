# 🏍️ Challenge 2025 – Mottu App (Sprint 1 - Mobile)

Aplicativo mobile desenvolvido como parte da Sprint 1 do Challenge 2025 da FIAP, em parceria com a empresa Mottu. O objetivo do app é permitir o **cadastro, visualização e mapeamento inteligente de motos em pátios**, oferecendo uma base para futuras funcionalidades com IoT, visão computacional e GPS.

---

## 👥 Integrantes

| Nome completo                       | RM      |
|------------------------------------|---------|
| Marcus Vinicius de Souza Calazans | 556620  |
| Lucas Abud Berbel                  | 557957  |

---

## 📎 Repositório no GitHub Classroom

🔗 [https://github.com/calazans-99/ChallengeMobile](https://github.com/calazans-99/ChallengeMobile)

---

## ✅ Funcionalidades entregues

- [x] Tela Home com navegação para todas as rotas
- [x] Cadastro de moto com modelo, placa, status e posição no pátio (A1–O15)
- [x] Validação de campos e impedimento de posições duplicadas
- [x] Lista de motos com componente reutilizável (`MotoCard`)
- [x] Mapa visual 15x15 estilo matriz com coordenadas e 🛵
- [x] Cores de status aplicadas no mapa (verde, amarelo, vermelho)
- [x] Tela de configurações com contagem e limpeza de dados
- [x] Armazenamento persistente com AsyncStorage
- [x] Navegação via `@react-navigation/native-stack`
- [x] Estilização com base nas cores da Mottu

---

## 🧭 Telas e Navegação

- `Home`
- `CadastroMoto`
- `ListaMotos`
- `MapaPatio`
- `Configuracoes`

---

## 🛠️ Tecnologias utilizadas

- [React Native + Expo SDK 53](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Navigation](https://reactnavigation.org/)
- [Picker](https://github.com/react-native-picker/picker)

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js
- Expo Go (instalado no celular)
- Git

### Passos:

```bash
git clone https://github.com/calazans-99/ChallengeMobile
cd ChallengeMobile
npm install
npx expo start
