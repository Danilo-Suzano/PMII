import { StyleSheet } from 'react-native';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/font-family';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
    textAlign: 'center',
  },
  transactions: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
    gap: 12, 
  },
  deleteButton: {
    backgroundColor: colors.red.base,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  deleteButtonText: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.medium,
  },
  
});
