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

    buttonsPlacementStyle: {
      flex:1,
      flexDirection:'row',
      alignSelf:'center',
    },

    greyStrokeContainer:{
      alignItems:'center',
      flex: 1,
      marginStart:'3%',
      marginEnd:'3%',
      justifyContent:'center',
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'#ddd', 
      borderRadius:5,
  },

    flatButtonStyle:{height:'8.5%', width:'90%', justifyContent:'center', alignSelf:'center', marginTop:'4%',},

    loginButtonStyle:{height:'100%', borderWidth:1, borderRadius:5, borderColor:'#2E77B5', width:'100%', },
    
    registerButtonStyle:{height:'100%', borderRadius:5, backgroundColor:'#2E77B5', width:'100%',  },

    textInputHeaderStyle:{color:'#999', marginTop:'4%', marginBottom:'2%', fontWeight:'400', marginStart:'5%', alignSelf:'flex-start'},

    headingBoldText:{fontSize:20,  marginBottom:'1%', color:'#111', marginStart:'5%', fontWeight:'bold'},
  
    descText:{fontSize:16, color:'#202020', marginStart:'5%', marginTop:'2%', marginBottom:'5%', fontWeight:'500'},

    textInputLayoutBoxStyle:{height:'55%', borderWidth:1, borderRadius:5, borderColor:'#eee', width:'90%', justifyContent:'center', alignSelf:'center',},

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
      width:35,
      alignSelf: 'center',
      tintColor:'#2E77B5'
    }
});

export default styles
