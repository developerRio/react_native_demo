import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  scrollStyle: {
    backgroundColor: '#fcfcfc',
    paddingLeft: '3%',
    elevation:3,
    paddingRight: '3%',
    // justifyContent: 'center',
  },

  tabBarTextStyle: {
    fontSize: 16,
    fontWeight: "600",
  },

  underlineStyle: {
    flex:1,
    height: 3,
    justifyContent:'center',
    backgroundColor: '#2E77B5',
    borderRadius: 5,
    width: '18%',
  },

  parentContainer: {
    width: '100%',
    height:'100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  
textHeaderStyle: {
  fontSize:25, 
  marginBottom:'1%', 
  color:'#111', 
  marginStart:'3%', 
  fontWeight:'bold'
},

textDescStyle: {
  fontSize:16, 
  color:'#202020', 
  marginStart:'3%', 
  marginEnd:'3%',
  marginTop:'2%', 
  marginBottom:'3%', 
  fontWeight:'500'
},

backgroundImage: {
    resizeMode:'center',
    height:'100%',
    width:'100%',
},

toolbarContainerViewStyle:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  rowContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
  },

  rowItem:{
    flex:1,
    justifyContent:'center',
    marginEnd:'3%',
    marginStart:'3%',
  },

  child1:{
    height:20,
    width:20, 
    alignSelf:'flex-start',
  },

  child2: {
    height:35, 
    marginTop:'3%',
    width:35,
    alignSelf: 'center',
    tintColor:'#2E77B5',
  },

  child3: {
    height:30, 
    width:30,
    marginEnd:'3%',
    alignSelf:'flex-end',
  },

  flatButtonStyle:{
    height:'8.5%', 
    width:'90%', 
    justifyContent:'center', 
    alignSelf:'center', 
    marginTop:'4%',},

  loginButtonStyle:{
    height:'100%', 
    borderWidth:1, 
    borderRadius:5, 
    borderColor:'#2E77B5', 
    width:'100%', },

  registerButtonStyle:{
    height:'100%', 
    borderRadius:5, 
    backgroundColor:'#2E77B5', 
    width:'100%',  
  },

})

export default styles