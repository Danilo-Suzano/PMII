import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";
import { fontFamily } from "../../styles/font-family";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 6,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[200],
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.green.light,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 18,
    fontFamily: fontFamily.medium,
    fontWeight: 'bold',
  },
});