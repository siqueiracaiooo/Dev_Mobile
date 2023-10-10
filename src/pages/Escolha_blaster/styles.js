import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '374px',
        height: '226px',
        marginBottom: '40px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        
    },
    itemName: {
        fontSize: '20px',
        color: 'Black',
        justifyContent: 'center',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    itemDescription: {
        fontSize: '14px',
        color: 'Black',
        padding: 20,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#282828',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: '#BEBEBE'
    },
    LinkBtn: {
        fontSize: '15px',
        color: 'Black',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '2px solid Black',
        fontWeight: 'bold',
    }, 
    Attack: {
        fontSize: '14px',
        color: 'red',
        padding: 20,
        justifyContent: 'center'
    },
    Defense: {
        fontSize: '14px',
        color: 'blue',
        padding: 20,
        justifyContent: 'center'
    },
    Fraqueza: {
        fontSize: '14px',
        color: 'gray',
        padding: 20,
        justifyContent: 'center',
        fontWeight:'bold'
    },

    Escolha: {
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        border: '5px solid black',
        marginTop: '30px',
    },

    viewEscolha: {
        fontWeight: 'bold',
        fontSize: '25px',
        justifyContent: 'center',
    }


});

export default styles;