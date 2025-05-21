import { StyleSheet } from 'react-native';

export const mottuColors = {
  primary: '#06C167',
  secondary: '#FFCC00',
  background: '#F5F5F5',
  textDark: '#222222',
  textLight: '#ffffff',
  alert: '#c62828',
};

export const baseScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mottuColors.background,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: mottuColors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: mottuColors.textDark,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: mottuColors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: mottuColors.textLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
