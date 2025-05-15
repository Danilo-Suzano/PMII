import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.gray[100]
  },
  header: {
    marginTop: 70,
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: colors.gray[500],
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  input: {
    fontSize: 16,
    color: colors.gray[500],
  },
  buttonContainer: {
    marginLeft: 10,
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: colors.green.base,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.green.soft,
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyStateContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyIcon: {
    fontSize: 60,
    color: colors.gray[300],
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray[400],
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: colors.gray[300],
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  }
})