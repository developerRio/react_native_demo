import React, { Component } from 'react'
import {StyleSheet, View, Text, Platform,  Alert, FlatList, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'



class AllergensCatalogue extends Component{

    constructor(props) {
        super(props)
        this.state = {
            pressed : 1
          }
    
        this.state = {
          GridListItems: [
            { key: "Crustacean" },
            { key: "Sesame" },
            { key: "Nuts" },
            { key: "Gluten" },
            { key: "Eggs" },
            { key: "Fish" },
            { key: "Shellfish" },
            { key: "Mustard" },
            { key: "Celery" },
            { key: "Peanuts" },
            { key: "Milk" },
            { key: "Sulphite" },
            { key: "Soya" },
            { key: "Lupins" },
          ]
        }
      }
    
      GetGridViewItem(item) {
        Alert.alert(item)
      }

    render(){

        return(
            <View style={styles.parentContainer}>
                {/* tootlbar */}
                <View style={styles.toolbarContainerViewStyle}>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowItem}>
                                    <Image 
                                        style={styles.child1}
                                        source={require('../../data/images/menu.png')}/>
                                </View>
                                <View style={styles.rowItem}>
                                    <Image 
                                        style={styles.child2}
                                        source={require('../../data/images/owl.png')}/>      
                                </View>

                                <View style={styles.rowItem}>
                                    <Image 
                                        style={styles.child3}
                                        source={require('../../data/images/cart.png')}/>      
                                </View>

                            </View>
                        </View>
                     
                {/* main content containers */}
                <View style={{ flex: 1, backgroundColor: '#eee', }}>

                    <View style={{backgroundColor:'#fff', height:'auto'}}>

                        <Text style={styles.textHeaderStyle}>Select allergens</Text>
                        <Text style={styles.textDescStyle}>In the classic version, the main salad ingredients
                                                            are wheat croutons, romaine lettuce and grated
                                                            parmesan seasoned with a special sauce, which is
                                                            the essence of the recipe.</Text>
                    </View>

                    <View style={{ flex:1}}>
                        {/* Grid view */}
                        
                        <View style={styles.container}>
                            <FlatList
                                style={{ margin:'3%'}}
                                data={ this.state.GridListItems }
                                renderItem={ ({item}) =>
                                
                                <TouchableOpacity 
                                    activeOpacity={0.5}
                                    style={(this.state.pressed == 0)?styles.GridViewContainerSelected:styles.GridViewContainer}
                                     >

                                    <Text style={styles.GridViewTextLayout} 
                                        onPress={
                                            this.GetGridViewItem.bind(this, item.key) } > 
                                        {item.key} 
                                    </Text>
                                </TouchableOpacity> }
                                numColumns={3}
                            />
                       
                            {/* Bottom Buttons */}

                            <View style={styles.flatButtonStyle}>
                                <TouchableOpacity
                                style={styles.registerButtonStyle}
                                activeOpacity={0.5}
                                onPress={() => { 
                                    // perform  register
                                    console.log("Apply Button Clicked")
                                    Actions.move_to_Home()
                                }}>
                                    <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', }}>
                                    <Text style={{color:'#fff', fontWeight:'bold', alignSelf:'center',}}>Apply</Text>
                                    </View>   
                                </TouchableOpacity>                            
                                                                                
                            </View>

                            <View style={styles.flatButtonStyle}>
                                    <TouchableOpacity
                                        style={styles.loginButtonStyle}
                                        activeOpacity={0.5}
                                        onPress={() => { 

                                            // perform  register
                                            console.log("Cancel Button Clicked")
                                        }}>
                                            <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', }}>
                                            <Text style={{color:'#2E77B5', fontWeight:'bold', alignSelf:'center', }}>Cancel</Text>
                                            </View>   
                                    </TouchableOpacity>     
                            </View>
                            
                            

                        </View>

                    </View>

                </View>   

           
            </View>
        )
    }
}

export default AllergensCatalogue