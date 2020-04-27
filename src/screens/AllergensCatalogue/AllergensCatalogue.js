import React, { Component } from 'react'
import {StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'



class AllergensCatalogue extends Component{
    render(){
        return(
            <View style={styles.parentContainer}>

                {/* messed up with tab layout :( ) */}

                <View style={styles.parentContainer}> 
                    <View style={styles.parentView}>
                        <View style={styles.containerView}>
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
                    </View>
                </View>
           
                <View style={{
                                flex: 1,
                                backgroundColor: '#eee',
                            }} >



                </View>

           
            </View>
        )
    }
}

export default AllergensCatalogue