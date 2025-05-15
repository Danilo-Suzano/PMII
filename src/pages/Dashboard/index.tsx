import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
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

    // Validação dos campos
    if (name.trim() === '' || amount.trim() === '' || datePurchase.trim() === '' || 
        category.trim() === '' || local.trim() === '') {
      return Alert.alert('Atenção', 'Todos os campos devem ser preenchidos!');
    }

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

    Alert.alert('Sucesso', 'Gasto adicionado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Categoria</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Categoria'
          value={category}
          onChangeText={value => setCategory(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Despesa'
          value={name}
          onChangeText={value => setName(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor</Text>
        <TextInput 
          style={styles.input} 
          placeholder='R$0,00'
          keyboardType='numeric'
          value={amount}
          onChangeText={value => setAmount(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={datePurchase}
          onChangeText={value => setDatePurchase(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Local</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Local'
          value={local}
          onChangeText={value => setLocal(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddNewSpending}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}