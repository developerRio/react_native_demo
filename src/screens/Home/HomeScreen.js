import React, { Component } from 'react'
import {StyleSheet, View, Text, Platform,  Alert, FlatList, Dimensions, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'
import { TabView, SceneMap, TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view'


 
class HomeScreen extends Component{
    
    state = {
        index: 0,
        routes: [
          { key: '1', title: 'First' },
          { key: '2', title: 'Second' },
        ],
      }
    
      _renderScene = ({ route }) => {
        switch (route.key) {
        case '1':
          return <View style={{ flex: 1, backgroundColor: '#ff4081' }} />;
        case '2':
          return <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;
        default:
          return null;
        }
      }
    
      _renderPage = (props) => <TabViewPage {...props} renderScene={this._renderScene} />;

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
                                
                <TabViewAnimated
                    style={{ flex: 1 }}
                    navigationState={this.state.navigation}
                    renderScene={this._renderPage}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={index => this.setState({ index })}
                />
                 
                </View>


            </View>
        )
    }

}

 
  

export default HomeScreen

