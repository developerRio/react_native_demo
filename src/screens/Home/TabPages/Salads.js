import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { recipes, categories } from '../../../data/DataArrays'
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

export default class SaladsPage extends Component{

  renderRecipes = ({ item }) => (
    <TouchableHighlight 
      style={{flex:1,}}
      underlayColor='#00000000' 
      onPress={() => console.log("Item Clicked")}>
      <View style={styles.cardContainer}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <View style={styles.SecondContainer}>
          <Text style={styles.titleCard}>{item.title}</Text>
          <Text style={styles.decsCard}>{getCategoryName(item.categoryId)}</Text>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.priceTag}>$4.99</Text> 
          {/* circle view 2E77B5 */}
          <View style={{flex:1, width:'100%', alignItems:'flex-end', }}>

            <View style={{width: 50, alignItems:'center', height: 50, marginTop:20, borderRadius: 60/2, borderColor:'#ccc', borderWidth:1, backgroundColor:'#fff', }}>
                <TouchableOpacity activeOpacity={0.5}>

                <Image 
                  style={{width:30, tintColor:'#2E77B5', marginTop:8, height:30, alignSelf:'center'}}
                  source={require('../../../data/images/plus.png')}/>

                </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </TouchableHighlight>
  )

  render(){
    return(
      <View style={styles.parentContainer}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={true}
          numColumns={1}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}` + Math.floor(1000 + Math.random() * 9000) }
        />  

      </View>
    )

  }
}

function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}