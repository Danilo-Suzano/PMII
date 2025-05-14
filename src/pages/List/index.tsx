// hooks
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';

import { styles } from './styles';

import { spendingGetAll } from '../../storage/spending/spendingGetAll';
import { spendingRemove } from '../../storage/spending/spendingRemove'; 
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO';

import { TransactionExpenses } from '../../components/TransactionExpenses';

export function List() {
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([]);

  async function loadDataSpending() {
    const data = await spendingGetAll();
    setDataExpenses(data);
  }

  async function handleDeleteSpending(itemToDelete: SpendingStorageDTO) {
    Alert.alert(
      'Excluir gasto',
      'Deseja mesmo excluir este gasto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await spendingRemove(itemToDelete);
            loadDataSpending(); // Atualiza a lista
          },
        },
      ]
    );
  }

  useFocusEffect(
    useCallback(() => {
      loadDataSpending();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Listagem de Gastos</Text>
      </View>

      <View style={styles.transactions}>
        <FlatList
          data={dataExpenses}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <View>
              <TransactionExpenses data={item} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteSpending(item)}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
