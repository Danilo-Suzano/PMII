import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';
export function Search() {
  const [category, setCategory] = useState('')
  
  async function handleSearchSpending() {
    if (category.trim()===''){
      return Alert.alert('Gastos', 'Por favor digite o nome da categoria')
    }

    const data = await spendingGetAll()

    const newData = data.filter(dat => dat.category.toLowerCase() === category.toLowerCase())

    if (newData.length === 0){
      return Alert.alert('Gastos', 'Categoria Inexistente')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controle de Gastos</Text>
      </View>

      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Categoria:'
            onChangeText={value => setCategory(value)}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSearchSpending}
            >
              <Text style={styles.buttonText}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}