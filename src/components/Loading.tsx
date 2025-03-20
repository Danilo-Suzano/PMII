import { ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../styles/color";
import { fontFamily } from "../styles/font-family";

export function Loading() {
    return (
        <ActivityIndicator style={styles.load} size={"large"} color={'black'}/>
    )
}

export const styles = StyleSheet.create({
    load: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})