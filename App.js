import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numeros, setNumeros] = useState(['','','','','','']);
  const [contador, setContador] = useState(0);

  const gerarNumeros = () => {
    let numeros = [];
    for(let i = 1; i <= 6; i++) {
      setContador(i);
      numeros.push({
        key: i,
        value: (Math.floor(Math.random()*100))%60+1
      });
    }
    setNumeros(numeros);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnGerar}>
        <Button title="Gerar Números" onPress={gerarNumeros} />
      </View>
      <View style={styles.resultado}>
        {numeros.map((n) => (
          <View key={n.key} style={styles.numero}>
            <Text style={{color: 'blue', fontSize: 12, fontWeight: 'bold'}}>{n.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    flexDirection:'row',
  },
  numero: {
    margin: 8,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 8,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
