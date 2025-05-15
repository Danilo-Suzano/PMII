import { StyleSheet } from 'react-native';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/font-family';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[200],
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  categoryBadge: {
    backgroundColor: colors.green.soft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  category: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.green.dark,
  },
  description: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.gray[500],
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  amount: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.green.base,
  },
});