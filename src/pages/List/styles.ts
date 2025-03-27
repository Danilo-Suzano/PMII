import { StyleSheet } from 'react-native';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/font-family';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[100],
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
        marginBottom: 20,
        textAlign: 'center',
    },
    transactions: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 20, // 🔥 Aumentado para evitar que a lista sobreponha o título
    },
    header: {
        width: '100%',
        height: 60, // 🔥 Aumentei um pouco a altura para evitar sobreposição
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10, // 🔥 Criado mais espaçamento abaixo do título
    },
});
