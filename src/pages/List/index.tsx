import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export function List() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Listagem de Gastos</Text>
      {[...Array(2)].map((_, index) => (
        <View key={index} style={styles.box}>
          <View style={styles.leftContent}>
            <Text style={styles.text}><Text style={styles.label}>Descrição:</Text> Notebook</Text>
            <Text style={styles.text}><Text style={styles.label}>Data:</Text> 23/11/2019</Text>
            <Text style={styles.text}><Text style={styles.label}>Valor:</Text> 5000.00</Text>
            <Text style={styles.text}><Text style={styles.label}>Categoria:</Text> TI</Text>
            <Text style={styles.text}><Text style={styles.label}>Local:</Text> Site Dell</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}