import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { styles } from './src/pages/Dashboard/styles';
import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold} from '@expo-google-fonts/rubik';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Rubik_600SemiBold, 
    Rubik_400Regular, 
    Rubik_500Medium, 
    Rubik_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}


