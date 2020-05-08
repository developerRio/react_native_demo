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

  cardContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    alignSelf:'auto',
    margin: 5,
    width: 'auto',  // (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums
    height: 130,
  },

  photo: {
    flex:1.2,
    width: '20%',  // (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums
    height: '80%',
    borderRadius: 15,
    margin:5,
  },

  SecondContainer: {
    flex: 2,
    width: '10%', 
    height: '80%',
    margin:5,
    flexDirection:'column',
  },

  thirdContainer: {
    flex: 1,
    alignItems:'flex-end',
    width: '10%', 
    height: '80%',
    margin:5,
    flexDirection:'column',
  },

  titleCard:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },

  decsCard:{
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left',
    color: '#aaa',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },

  priceTag:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2E77B5',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },

})

export default styles