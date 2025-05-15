import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO';
import { TransactionExpenses } from '../../components/TransactionExpenses';
import { Feather } from '@expo/vector-icons';

export function Search() {
  const [category, setCategory] = useState('')
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  
  async function handleSearchSpending() {
    if (category.trim()===''){
      return Alert.alert('Gastos', 'Por favor digite o nome da categoria')
    }
    
    const data = await spendingGetAll()
    const newData = data.filter(dat => dat.category.toLowerCase().trim() === category.toLowerCase().trim())
    
    setDataExpenses(newData)
    setHasSearched(true)
  }

    useFocusEffect(
      useCallback(() => {
        setDataExpenses([])
      }, [])
    );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pesquisar</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Pesquisar por categoria...'
            placeholderTextColor="#999"
            onChangeText={value => setCategory(value)}
            value={category}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSearchSpending}
          >
            <Feather name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        {hasSearched && dataExpenses.length === 0 ? (
          <View style={styles.emptyStateContainer}>
            <Feather name="search" size={60} color="#ccc" style={styles.emptyIcon} />
            <Text style={styles.emptyText}>Digite uma categoria para pesquisar</Text>
            <Text style={styles.emptySubText}>Exemplo: Alimentação, Transporte, Saúde...</Text>
          </View>
        ) : (
          <FlatList
            data={dataExpenses}
            renderItem={({item}) => <TransactionExpenses data={item}/>}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}