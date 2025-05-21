
---

## 👥 Integrantes

| Nome completo                       | RM      |
|------------------------------------|---------|
| Lucas Abud Berbel                  | 557957  |
| Marcus Vinicius de Souza Calazans | 556620  |

---

# 🏍️ Mottu App – Sprint 1 (Challenge 2025)

Aplicativo mobile desenvolvido como parte do Challenge 2025 da FIAP, em parceria com a empresa Mottu. O objetivo é criar uma solução para o **mapeamento inteligente de motos em pátios logísticos**.

## 🎯 Objetivo

Facilitar o cadastro, visualização e monitoramento de motos nos pátios da empresa, criando uma base sólida para futuras integrações com visão computacional, GPS e IoT.

---

## 👨‍💻 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## ✅ Funcionalidades Sprint 1

- [x] **Tela Home** com navegação centralizada
- [x] **Tela de Cadastro de Moto** com validação e persistência de dados
- [x] **Tela de Lista de Motos** com renderização dinâmica dos dados salvos
- [x] **Tela de Mapa do Pátio** (placeholder para futuras funcionalidades)
- [x] **Tela de Configurações** com opção de apagar todas as motos cadastradas
- [x] **Armazenamento local com AsyncStorage**
- [x] **Componentização com `MotoCard`**
- [x] **Navegação entre telas com React Navigation**

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/mottu-app.git
cd mottu-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor Expo

```bash
npx expo start
```

### 4. Abra no celular com o app **Expo Go**

- Escaneie o QR Code que aparece no terminal ou navegador
- O app será carregado automaticamente no seu celular

---

## 📂 Estrutura do Projeto

```plaintext
mottu-app/
├── App.tsx
├── screens/
│   ├── Home.tsx
│   ├── CadastroMoto.tsx
│   ├── ListaMotos.tsx
│   ├── MapaPatio.tsx
│   └── Configuracoes.tsx
├── components/
│   └── MotoCard.tsx
├── utils/
│   └── storage.ts
├── assets/
│   └── logo.png (opcional)
├── app.json
├── package.json
└── README.md
```

## 🔗 GitHub Classroom

> Substitua abaixo pelo link real do seu repositório da FIAP:

📎 https://github.com/fiap-classroom/mottu-app-557957-556620

---

## 📝 Observações

- Projeto modularizado e pronto para futuras integrações com API REST, mapas com GPS e visão computacional.
- Armazenamento persistente implementado com `AsyncStorage`.
- Navegação fluida e layout simples, porém funcional.

---

## 📸 Prints sugeridos para documentação

- Home navegando entre telas
- Cadastro de uma moto
- Lista exibindo motos persistidas
- Configurações com botão de limpeza
