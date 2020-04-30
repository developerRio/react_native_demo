import React, { Component } from 'react'
import {StyleSheet, View, Text, Platform,  Alert, FlatList, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'

class HomeScreen extends Component{

    render(){

        return(
            <View style={styles.parentContainer}>

                {/* tootlbar */}
                <View style={styles.toolbarContainerViewStyle}>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowItem}>
                                    <TouchableOpacity onPress={() => { 
                                        console.log("Menu Button Clicked")}}>
                                        <Image 
                                            style={styles.child1}
                                            source={require('../../data/images/menu.png')}/>
                                    </TouchableOpacity> 
                                </View>
                                <View style={styles.rowItem}>
                                    <Image 
                                        style={styles.child2}
                                        source={require('../../data/images/owl.png')}/>      
                                </View>

                                <View style={styles.rowItem}>
                                    <TouchableOpacity onPress={() => { 
                                        console.log("Cart Button Clicked")}}>
                                        <Image 
                                            style={styles.child3}
                                            source={require('../../data/images/cart.png')}/>      
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                     
                {/* main content containers */}
                <View style={{ height:'10%', width:'100%', backgroundColor: '#eee', alignSelf:'baseline' }}>

                    

                </View>


            </View>
        )
    }

}

export default HomeScreen

