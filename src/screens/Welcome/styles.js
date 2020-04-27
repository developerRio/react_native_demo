import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    selectedButtonStyle:{
        alignItems:'center',
        flex: 1, 
        backgroundColor: '#2E77B5', 
        borderRadius:5,
    },
    
    loginButtonStyle:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1, 
        backgroundColor: '#00000000', 
        borderRadius:5,
        borderColor:'#FFF',
        borderWidth:1
    },

    unSelectedButtonStyle:{
        alignItems:'center',
        flex: 1, 
        backgroundColor: '#FFFFFF', 
        borderRadius:0,
    },

    selectedTextStyle:{
        marginTop:'8%',
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
    },
    
    unSelectedTextStyle:{
        marginTop:'8%',
        fontSize:15,
        color:'#555',
        justifyContent:'center',
        fontWeight:'bold'
    },

    textHeaderStyle: {
        fontSize:40,
        color:'#fff',
        fontWeight:'200'
    },

    buttonsPlacementStyle: {
        flex:1,
        margin:6,
        bottom:'4%'
    },

    textDescStyle: {
        fontSize:20,
        color:'#fff',
        fontWeight:'200'
    },

    backgroundImage: {
        resizeMode:'center',
        height:'100%',
        width:'100%',
    }

  });

  export default styles
  