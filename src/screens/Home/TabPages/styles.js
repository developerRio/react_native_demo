import { StyleSheet, Dimensions } from 'react-native'

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;

const styles = StyleSheet.create({
  
parentContainer: {
    width: '100%',
    height:'100%',
    flex: 1,
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

  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'auto',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    width: '90%',  // (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#eee',
    backgroundColor:'#fff',
    borderWidth: 0.5,
    borderRadius: 15
  },

  photo: {
    width: '100%',  // (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }

})

export default styles