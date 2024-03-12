import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [sideLength, setSideLength] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [squareArea, setSquareArea] = useState(null);
  const [triangleArea, setTriangleArea] = useState(null);

  const calculateSquareArea = () => {
    const area = parseFloat(sideLength) ** 2;
    setSquareArea(area);
  };

  const calculateTriangleArea = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setTriangleArea(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Áreas em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSideLength(text)}
        keyboardType="numeric"
        value={sideLength}
      />
      <Button title="Calcular Área do Quadrado" onPress={calculateSquareArea} />
      {squareArea !== null && <Text style={styles.result}>Área do Quadrado: {squareArea}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular Área do Triângulo" onPress={calculateTriangleArea} />
      {triangleArea !== null && <Text style={styles.result}>Área do Triângulo: {triangleArea}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});