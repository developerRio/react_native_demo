import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textStyle: {
        fontSize:40,
        // fontFamily:'Ubuntu-Bold',
        color:'#FFFFFF',
        fontWeight:'bold'
    },

    backgroundImage: {
        resizeMode:'stretch',
        height:'100%',
        width:'100%',
    }
  });

  export default styles