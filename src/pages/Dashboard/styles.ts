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
title: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
    marginBottom: 30,
    textAlign: 'center',
},
input: {
    height: 50,
    width: '100%',
    borderColor: colors.gray[200],
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: colors.gray[100],
    fontFamily: fontFamily.regular,
},
button: {
    backgroundColor: colors.green.light,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
},
buttonText: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fontFamily.medium,
},
});
