import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { spendingCreate } from '../../storage/spending/spendingCreate';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';
import { TextInputMask } from 'react-native-masked-text'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Dashboard() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [datePurchase, setDatePurchase] = useState('');
  const [category, setCategory] = useState('');
  const [local, setLocal] = useState('');

  async function handleAddNewSpending() {
    // await AsyncStorage.clear()
    // alert("O programa será finalizado")
    // return;


    const data = {
      name,
      amount,
      datePurchase,
      category,
      local,
    };

    await spendingCreate(data);
    const result = await spendingGetAll();
    console.log(result);

    setName('');
    setAmount('');
    setDatePurchase('');
    setCategory('');
    setLocal('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder='Descrição' 
        value={name}
        onChangeText={value => setName(value)}
      />
      
      
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        style={styles.input}
        placeholder="Data"
        value={datePurchase}
        onChangeText={value => setDatePurchase(value)}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder='Valor' 
        keyboardType='numeric' 
        value={amount}
        onChangeText={value => setAmount(value)}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder='Categoria' 
        value={category}
        onChangeText={value => setCategory(value)}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder='Local' 
        value={local}
        onChangeText={value => setLocal(value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddNewSpending}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
