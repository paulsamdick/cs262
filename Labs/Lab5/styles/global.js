import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
    },
});

export const titleStyle = StyleSheet.create({
    container: {
        fontSize : 22,
        fontWeight: 'Bold',
        color : '#00008b',
    }
})

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#00008b",
        padding: 10,
        borderRadius: 180,
        marginBottom: 375,
    },
    buttonText: {
            fontSize: 22,
            color: '#fff',
            fontWeight: 'Bold',
            justifyContents: 'center'
    },
})
