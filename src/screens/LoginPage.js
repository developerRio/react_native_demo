import React, { Component } from 'react'
import {StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

class LoginPage extends Component{
    render(){
        return(
            <View style={styles.parentContainer}> 
          

                <View style={styles.parentContainer}>  

                  <View style={styles.parentView}>
                    <View style={styles.containerView}>
                        <View style={styles.rowContainer}>
                        <View style={styles.rowItem}>
                            <Image 
                                style={styles.child1}
                                source={require('../data/images/close.png')}/>
                        </View>
                        <View style={styles.rowItem}>
                            <Image 
                                style={styles.child2}
                                source={require('../data/images/owl.png')}/>      
                        </View>
                        </View>
                    </View>
                  </View>

                  <View style={{backgroundColor:'#fff', marginTop:'5%', width:'100%', height:'auto'}}>

                      <Text style={styles.headingBoldText}>Join</Text>
                      <Text style={styles.descText}>In the classic version, the main salad ingredients are wheat croutons, romaine lettuce and grated.</Text>
                      <Text style={styles.headingBoldText}>Join with social media</Text>

                      <View style={{height:'13%', width:'90%', marginTop:'5%', marginBottom:'1%', justifyContent:'center', alignSelf:'center', padding:'1%' }}>

                        <View style={styles.buttonsPlacementStyle}>
                                          
                                          <View style={{ flex: 1 }}>
                                              <View style={{ flex: 1, flexDirection:'row',  }}>
                                                  <TouchableOpacity
                                                      activeOpacity={0.8}
                                                      style={styles.greyStrokeContainer}
                                                      onPress={() => { 

                                                        // perform facebook signin

                                                      }}>
                                                        <View style={{ flex: 1, flexDirection:'row', }}>
                                                          <Image 
                                                              style={{height:25, width:25, alignSelf:'center', }}
                                                              source={require('../data/images/facebook.png')}/>   
                                                          <Text style={{color:'#4267B2', fontWeight:'bold', marginStart:'8%', alignSelf:'center'}}>Facebook</Text>

                                                        </View>
                                                  </TouchableOpacity>
      
                                                  <TouchableOpacity
                                                      activeOpacity={0.8}
                                                      style={styles.greyStrokeContainer}
                                                      onPress={() => { 

                                                        // perform google signin

                                                      }}>
                                                        <View style={{ flex: 1, flexDirection:'row', }}>
                                                        <Image 
                                                            style={{height:25, width:25, alignSelf:'center', }}
                                                            source={require('../data/images/google_logo.png')}/>   
                                                            <Text style={{color:'#333333', fontWeight:'bold', marginStart:'8%', alignSelf:'center'}}>Google</Text>
                                                        </View>
                                                  </TouchableOpacity>
                                              </View>
                                          </View>
                                      </View>
                                                        
                      </View>

                      <Text style={styles.headingBoldText}>Register via e-mail</Text>

                      <View style={{height:'12%', width:'95%', justifyContent:'center', alignSelf:'center', }}>
                          <Text style={styles.textInputHeaderStyle}>Email:</Text>

                          <View style={styles.textInputLayoutBoxStyle}>

                            <TextInput
                              returnKeyType={'next'}
                              keyboardType={'email-address'}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={{height:'12%', width:'95%', justifyContent:'center', alignSelf:'center', }}>
                          <Text style={styles.textInputHeaderStyle}>Phone:</Text>

                          <View style={styles.textInputLayoutBoxStyle}>

                            <TextInput
                              returnKeyType={'next'}
                              keyboardType={'phone-pad'}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={{height:'12%', width:'95%', justifyContent:'center', alignSelf:'center', marginBottom:'1%' }}>
                          <Text style={styles.textInputHeaderStyle}>Password:</Text>

                          <View style={styles.textInputLayoutBoxStyle}>

                            <TextInput
                              secureTextEntry={true}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={styles.flatButtonStyle}>
                          <TouchableOpacity
                              style={styles.registerButtonStyle}
                              activeOpacity={0.8}
                              onPress={() => { 
                                // perform  register
                              }}>
                                <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', }}>
                                  <Text style={{color:'#fff', fontWeight:'bold', alignSelf:'center',}}>Register</Text>
                                </View>   
                          </TouchableOpacity>                            
                                                                              
                      </View>

                      <View style={styles.flatButtonStyle}>
                          <TouchableOpacity
                                  style={styles.loginButtonStyle}
                                  activeOpacity={0.8}
                                  onPress={() => { 

                                    // perform  register

                                  }}>
                                    <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', }}>
                                      <Text style={{color:'#2E77B5', fontWeight:'bold', alignSelf:'center', }}>I already have account</Text>
                                    </View>   
                          </TouchableOpacity>     
                      </View>                             

                </View>
            
                </View>

              
            </View>
        )
    }
}

export default LoginPage

const styles = StyleSheet.create({
      parentContainer: {
          flex: 1,
          backgroundColor: '#fff',
        },

      parentView:{
          width: '100%',
          height:'8%'
        },

      buttonsPlacementStyle: {
        flex:1,
        flexDirection:'row',
        alignSelf:'center',
      },

      greyStrokeContainer:{
        alignItems:'center',
        flex: 1,
        marginStart:'3%',
        marginEnd:'3%',
        justifyContent:'center',
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#ddd', 
        borderRadius:5,
    },

      flatButtonStyle:{height:'8.5%', width:'90%', justifyContent:'center', alignSelf:'center', marginTop:'4%',},

      loginButtonStyle:{height:'100%', borderWidth:1, borderRadius:5, borderColor:'#2E77B5', width:'100%', },
      
      registerButtonStyle:{height:'100%', borderRadius:5, backgroundColor:'#2E77B5', width:'100%',  },

      textInputHeaderStyle:{color:'#999', marginTop:'4%', marginBottom:'2%', fontWeight:'400', marginStart:'5%', alignSelf:'flex-start'},

      headingBoldText:{fontSize:20,  marginBottom:'1%', color:'#111', marginStart:'5%', fontWeight:'bold'},
    
      descText:{fontSize:16, color:'#202020', marginStart:'5%', marginTop:'2%', marginBottom:'5%', fontWeight:'500'},

      textInputLayoutBoxStyle:{height:'55%', borderWidth:1, borderRadius:5, borderColor:'#eee', width:'90%', justifyContent:'center', alignSelf:'center',},

      containerView:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      rowContainer: {
        flex: 1,
        flexDirection: 'column',
      },
      rowItem:{
        flex: 1,
        justifyContent:'center'
      },
      child1:{
        height:20,
        width:20, 
        marginTop:'7%',
        marginStart:'3%',
      },
      child2: {
        height:35, 
        width:35,
        alignSelf: 'center',
        tintColor:'#2E77B5'
      }
  });
  