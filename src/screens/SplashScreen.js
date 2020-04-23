import React, { Component } from 'react'
import {StyleSheet, View, Text, ImageBackground, StatusBar} from 'react-native'
import { Actions } from 'react-native-router-flux'

class SplashPage extends Component{
    
    render(){
        timeOutSplash()
        return(
            <View style={styles.container} >
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />

                <ImageBackground  source={require('../data/images/food_bg.webp')} style={styles.backgroundImage} >

                    <View style={{alignItems:'center', marginTop:140 }}>

                        <Text style={styles.textStyle}>AMICO CHEF</Text>

                    </View>
 
                </ImageBackground >
                                   
            </View>

            
        )
    }
}

export default  SplashPage

function timeOutSplash(){
    setTimeout(() => {
        console.log("TimedOut.............")
        Actions.key_login()
    }, 3000)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textStyle: {
        fontSize:40,
        // fontFamily:'Ubuntu-Bold',
        color:'#FFFFFF',
        fontWeight:'bold'
    },

    backgroundImage: {
        resizeMode:'stretch',
        height:'100%',
        width:'100%',
    }
  });
  