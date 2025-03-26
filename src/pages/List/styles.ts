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
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
        marginBottom: 20,
        textAlign: 'center',
    },
    box: {
        backgroundColor: colors.gray[100],
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: colors.gray[500],
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: colors.gray[200],
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    leftContent: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
    },
    transactions: {
        flex: 1,
        padding: 24,
        marginTop: 3,
    },
    header: {
        marginTop: 70,
        width: '100%',
        height: 40,
        //backgroundColor: colors.gray[200],
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
