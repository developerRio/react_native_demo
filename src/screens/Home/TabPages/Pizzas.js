import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { recipes, categories } from '../../../data/DataArrays'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'


export default class PizzaPage extends Component{


    renderRecipes = ({ item }) => (
      <TouchableHighlight underlayColor='#00000000' onPress={() => console.log("Item Clicked")}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
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
            keyExtractor={item => `${item.recipeId}`}
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