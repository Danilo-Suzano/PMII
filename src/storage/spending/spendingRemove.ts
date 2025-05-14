import AsyncStorage from '@react-native-async-storage/async-storage';
import { SpendingStorageDTO } from './SpendingStorageDTO';
import { SPENDING_COLLECTION } from '../storageConfig';

export async function spendingRemove(itemToRemove: SpendingStorageDTO) {
  const storage = await AsyncStorage.getItem(SPENDING_COLLECTION);
  const data: SpendingStorageDTO[] = storage ? JSON.parse(storage) : [];

  const newData = data.filter(item =>
    !(item.name === itemToRemove.name &&
      item.datePurchase === itemToRemove.datePurchase &&
      item.amount === itemToRemove.amount)
  );

  await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(newData));
}
