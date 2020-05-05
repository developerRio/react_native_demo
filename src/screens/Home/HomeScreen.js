import React, { Component } from 'react'
import {StyleSheet, View, Text, Platform,  Alert, FlatList, Dimensions, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'
import { ScrollableTabBar} from 'react-native-scrollable-tab-view'
var ScrollableTabView = require('react-native-scrollable-tab-view')

// Tab Imports
import PizzasPage from '../Home/TabPages/Pizzas'
import BurgersPage from '../Home/TabPages/Burgers' 
import SaladsPage from '../Home/TabPages/Salads'

 
export default class HomeScreen extends Component{

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
                <View style={{flex:1, width:'100%', backgroundColor: '#eee', alignSelf:'baseline' }}>

                  <ScrollableTabView

                    renderTabBar={() => (
                      <ScrollableTabBar
                        style={styles.scrollStyle}
                      />
                    )}
                    tabBarTextStyle={styles.tabBarTextStyle}
                    tabBarInactiveTextColor={'#333333'}
                    tabBarActiveTextColor={'#2E77B5'}
                    tabBarUnderlineStyle={styles.underlineStyle}
                    initialPage={0}>

                    <View key={'1'} tabLabel={'Pizzas'} style={{flex:1, backgroundColor:'#ffd58c'}}>
                        <PizzasPage>
                          
                        </PizzasPage>
                    </View>
                    <View key={'2'} tabLabel={'Burgers'} style={{flex:1, backgroundColor:'#b8ffbd'}}>
                        <BurgersPage>

                        </BurgersPage>
                    </View>
                    <View key={'3'} tabLabel={'Salads'} style={{flex:1, backgroundColor:'#b8e3ff'}}>
                        <SaladsPage>

                        </SaladsPage>
                    </View>
                    <View key={'4'} tabLabel={'Soups'} style={{flex:1, backgroundColor:'#aaa'}}></View>
                    <View key={'5'} tabLabel={'Dumplings'} style={{flex:1, backgroundColor:'#ccc'}}></View>

                  </ScrollableTabView>    
                
                </View>

            </View>
        )
    }

}
