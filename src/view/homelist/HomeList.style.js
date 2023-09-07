import { StyleSheet } from "react-native"



export const style = StyleSheet.create({
    container: {
        flex: 1,
        
  
    },
    imageFundo: {
        flex: 1,
        alignItems: 'center',
        
    },
    textHeader:{
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color:'#FFF',

    },
    containerInput:{
        backgroundColor: '#67686D',
        height: 42,
        padding: 10,
        borderRadius: 16,
        marginTop: 24,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    input:{
        color: '#FFF',
        width: '80%',
        paddingLeft: 15,
    },
    imageMovie:{
        width: 100,
        height: 145,
        resizeMode: 'contain',
        marginHorizontal: 5,
        marginBottom:10,
        borderRadius: 15,
    }
    
});