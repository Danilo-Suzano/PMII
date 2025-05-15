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
      <View style={styles.categoryBadge}>
        <Text style={styles.category}>{data.category}</Text>
      </View>

      <Text style={styles.description}>{data.name}</Text>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Valor:</Text>
          <Text style={styles.amount}>R$ {data.amount}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>{data.datePurchase}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Local:</Text>
          <Text style={styles.value}>{data.local}</Text>
        </View>
      </View>
    </View>
  )
}