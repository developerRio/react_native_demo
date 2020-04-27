import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
     
    parentContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },

    parentView:{
        width: '100%',
        height:'8%'
      },

    textHeaderStyle: {
        fontSize:40,
        color:'#fff',
        fontWeight:'200'
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
    },

    containerView:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      rowContainer: {
        flex: 1,
        flexDirection: 'column',
      },

      rowItem:{
        flex: 1,
        justifyContent:'center'
      },

      child1:{
        height:20,
        width:20, 
        marginTop:'7%',
        marginStart:'3%',
      },

      child2: {
        height:35, 
        marginTop:'3%',
        width:35,
        alignSelf: 'center',
        tintColor:'#2E77B5'
      },

      child3: {
        height:30, 
        width:30,
        marginEnd:'3%',
        marginTop:'0%',
        alignSelf:'flex-end'
      }

  });

  export default styles