import { StyleSheet } from 'react-native';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/font-family';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  transactions: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  deleteButtonText: {
    fontSize: 18,
    color: colors.red.base,
  },
  
});