import React, { Component } from 'react'
import {View, Text, StyleSheet, ImageBackground, Button, TouchableOpacity, Image} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

class WelcomePage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground  
                    source={require('../../data/images/food_bg.webp')} 
                    blurRadius={10}
                    style={styles.backgroundImage} >

                    <View style={{backgroundColor:'#00000000', height:'8%', width:'92%', marginTop:'1%', marginStart:'4%', marginRight:'4%', justifyContent:'center' }}>
                    
                        <View style={{ flex: 1, flexDirection:'row', marginTop:'2%' }}>
                        
                            <View style={{height:50, width:50, marginTop:'1%'}}>
                                <Image 
                                    style={{height:35, width:35, marginTop:'15%', marginStart:'15%', tintColor:'#fff'}}
                                    source={require('../../data/images/owl.png')}/> 
                            </View>

                            <View
                                style={{
                                    height:'auto',
                                    marginStart:'2%',
                                    borderLeftWidth: 1,
                                    borderLeftColor: 'white',
                                }}/>    

                            <View style={{marginStart:'2%', justifyContent:'center'}}>

                                <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>AMICO CHEF</Text>
                                <Text style={{fontSize:16, color:'#fff', fontWeight:'200'}}>Restaurant</Text>

                            </View>  

                            <View style={{height:50, width:100, marginTop:'1%', marginLeft: 'auto' }}>
                                <TouchableOpacity
                                    activeOpacity={0.1}
                                    style={styles.loginButtonStyle}
                                    onPress={() => { 
                                        console.log("Login Button Clicked")
                                        Actions.move_to_login_page()
                                    }}>

                                        <Text style={{fontSize:15, color:'#fff', fontWeight:'bold' }}>Login</Text>   

                                </TouchableOpacity>
                            </View>   

                        </View>

                    </View>     

                    <View style={{ marginTop:'15%' }}>

                        <View style={{alignItems:'center', marginTop:'10%' }}>

                            <Text style={{fontSize:40, color:'#fff', margin:'5%', fontWeight:'bold'}}>AMICO CHEF</Text>
                            <Text style={styles.textDescStyle}>A best Cafe out in City ...</Text>

                            <View style={{backgroundColor:'#fff', height:'15%', width:'90%', marginTop:'15%', borderRadius:5, justifyContent:'center' }}>

                                <View style={styles.buttonsPlacementStyle}>
                                    
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 1, flexDirection:'row' }}>
                                            <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={styles.selectedButtonStyle}
                                            onPress={() => {  }}>
                                                <Text style={styles.selectedTextStyle}>On the spot</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={styles.unSelectedButtonStyle}
                                            onPress={() => {  }}>
                                            <Text style={styles.unSelectedTextStyle}>Takeaway</Text>
                                        </TouchableOpacity>
                                        </View>
                                        
                                    </View>

                                </View>

                            </View>

                            <View style={{ backgroundColor:'#fff', height:'15%', width:'90%', marginTop:'5%', borderRadius:5, justifyContent:'center' }}>

                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Mac Donalds', value: 'Mac Donalds' },
                                        { label: 'Pizza Hut', value: 'Pizza Hut' },
                                        { label: 'Burger king', value: 'Burger king' },
                                    ]}
                                />

                            </View>

                            <View style={{backgroundColor:'#2E77B5', height:'15%', width:'90%', marginTop:'5%', borderRadius:5, justifyContent:'center' }}>
                                <View style={{flex:1, alignContent:'center'}}>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={{flex:1, flexDirection:'row', justifyContent:'center', bottom:'3%'}}
                                        onPress={() => { 
                                            console.log("Login Button Clicked")
                                            Actions.move_to_login_page()
                                         }}>
                                            <Text style={styles.selectedTextStyle}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </ImageBackground >
            </View>
        )
    }
}


export default  WelcomePage
 
