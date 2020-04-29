import React, { Component } from 'react'
import {StyleSheet, View, Text, Platform,  Alert, FlatList, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'

class HomeScreen extends Component{

    render(){

        return(
            <View style={styles.parentContainer}></View>
        )
    }

}

export default HomeScreen

