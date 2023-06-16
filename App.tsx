import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState<string>('')
  const [peso, setPeso] = useState<string>('')
  const [imc, setImc] = useState<number>(0.0)
  const [msg, setMsg] = useState<string>('')

  const handleAltura = (altura: string)=>{
    setAltura(altura)
  }

  const handlePeso = (peso: string)=>{
    setPeso(peso)
  }

  const handleImc = (imc: number)=>{
    setImc(imc)
  }

  function handleImc2(imcr: number){
    let imc = imcr
    let txt: string = ''
    if (imc < 0) {
      txt = 'IMC invalido, verifique as informações'
    }
    else if (imc < 17.0) {
      txt = 'Muito a baixo do peso'
    } 
    else if (imc < 18.5) {
      txt = 'Abaixo do peso'
    }
    else if (imc < 25.0) {
      txt = 'Peso normal'
    }
    else if (imc < 30.0) {
      txt = 'Acima do peso'
    }
    else if (imc < 35.0) {
      txt = 'Obesidade grau I'
    }
    else if (imc < 40.0) {
      txt = 'Obesidade grau II'
    }
    else {
      txt = 'Obesidade grau III'
    }
    setMsg(txt)
  }

  function handleCalc(){
    let a : number = parseFloat(altura)
    let p : number = parseFloat(peso)
    let r : number = p / (a * a)
    handleImc(r) 
    handleImc2(r) 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <View style={styles.form}>
        <StatusBar style="auto" />
        <Text style={styles.text}>altura</Text>

        <TextInput
          style={styles.input}
          placeholder='EX: 1.70'
          keyboardType='numeric'
          onChangeText={handleAltura}
        />

        <Text style={styles.text}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 60.30'
          keyboardType='numeric'
          onChangeText={handlePeso}
        />

      </View>
      <View style= {styles.bt}><Button onPress={handleCalc} title='calcular'/></View>
      <View style={styles.form}>       

        <Text style={styles.title}>imc = {imc.toFixed(2)}</Text>
        <Text style={styles.text2}>{msg}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop: 40,
    //borderRadius:50,
    backgroundColor:"#f6f6f6",
    height: "100%",
    //margin: 0,
    //paddingLeft:10,    
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 40,
    //width: "95%",
    paddingHorizontal: 30,
    height: "auto",
    margin: 10,
    //padding: 90,
  },
  text: {
    textAlignVertical: 'center',
    height: 40,
    borderRadius: 40,
    margin: 8,
    paddingLeft: 12,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  text2: {
    textAlignVertical: 'center',
    height: "auto",
    borderRadius: 40,
    margin: 8,
    paddingLeft: 12,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    borderRadius: 40,
    margin: 10,
    padding: 20,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  input: {
    width:"auto",
    borderRadius:50,
    backgroundColor:"#f6f6f6",
    height:40,
    margin:5,
    paddingLeft:10
  },
  bt: {
    paddingHorizontal: 20,
    borderRadius: 60,
  }
})
