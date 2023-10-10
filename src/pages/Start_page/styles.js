import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36454F',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    logo2: {
        width: '200px',
        height: '203px',
        marginBottom: '20px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'center',
        marginTop: '30px',
    },
    LinkBtn: {
        fontSize: '50px',
        color: 'black',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '6px solid black',
        fontWeight: 'bold',
    }
});

export default styles;