import { View, Text } from 'react-native'

import { styles } from './styles';

import { SpendingStorageDTO }
  from "../../storage/spending/SpendingStorageDTO";

type Props = {
  data: SpendingStorageDTO
}

export function TransactionExpenses({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{data.name}</Text>
      <Text style={styles.amount}>{data.amount}</Text>
      <Text style={styles.local}>{data.local}</Text>
      <View style={styles.footer}>
        <Text style={styles.category}>{data.category}</Text>
        <Text style={styles.date}>{data.datePurchase}</Text>
      </View>
    </View>
  )
}