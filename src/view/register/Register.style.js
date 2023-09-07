import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 10,
        //  alignItems: 'center',
        //justifyContent: 'center',
    },
    imagePng: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    input: {
        color: '#333',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 5,
        width: '80%',
        height: 50,
        marginVertical: 10,

    },
    button1: {
        backgroundColor: 'rgb(229, 9, 20)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
    },
    register: {
        fontSize: 20,
        padding: 10,
        color: "#fff9ff",
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        color: "#fff9ff",
        textAlign: 'center',
    },
    text2: {
        fontSize: 20,
        marginBottom: 40,
        color: "#fff9ff",
    },
    button2: {
        fontSize: 15,
        color: "#fff9ff",
    },
});