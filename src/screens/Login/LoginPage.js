import React, { Component } from 'react'
import {StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'

class LoginPage extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
      baseURL : "http://reqres.in/api",
      email : '',
      password: '',
      phoneNumber: '',     
      wholeResult: '',      
    }
  }

    onClickListener = (viewId) => {
          if(this.state.phoneNumber || this.state.phoneNumber != " "){
          if(this.state.email){
            if(this.state.password){
                this.registerCall();
            }else{
            alert("Please enter password");
            }
          }else{
          alert("Please enter email");
          }
        }else{
          alert("Please enter phone Number");
        }   

      }

      registerCall(){
        var that = this;
        var url = that.state.baseURL + '/login'
        console.log("url_login : " + url)
      
        fetch(url,{
              method: 'POST',
              headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: JSON.stringify({email: 'eve.holt@reqres.in', password: 'cityslicka'}) // statically added for testing 
              //body: JSON.stringify({"phone": this.state.phoneNumber, "email": this.state.email,"password": this.state.password})

              }).then(function (response) {
                return response.json()
              }).then(function (result) { 

              console.log("Login_API resposne = " + result)


              if(!result.error){
                // sucess 
                Actions.move_to_AllergensCatalogue() // sending user to next page
                
                that.setState({ status: result.error, wholeResult: result, })
              }else{
              alert(result.error_msg)
        }
      }).catch(function (error) {
        console.log("registerCall error occured "+error)
        alert("result:" + error)
      })
     }

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
                                source={require('../../data/images/close.png')}/>
                        </View>
                        <View style={styles.rowItem}>
                            <Image 
                                style={styles.child2}
                                source={require('../../data/images/owl.png')}/>      
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
                                                              source={require('../../data/images/facebook.png')}/>   
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
                                                            source={require('../../data/images/google_logo.png')}/>   
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
                              onChangeText={(email) => this.setState({email})}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={{height:'12%', width:'95%', justifyContent:'center', alignSelf:'center', }}>
                          <Text style={styles.textInputHeaderStyle}>Phone:</Text>

                          <View style={styles.textInputLayoutBoxStyle}>

                            <TextInput
                              returnKeyType={'next'}
                              keyboardType={'phone-pad'}
                              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={{height:'12%', width:'95%', justifyContent:'center', alignSelf:'center', marginBottom:'1%' }}>
                          <Text style={styles.textInputHeaderStyle}>Password:</Text>

                          <View style={styles.textInputLayoutBoxStyle}>

                            <TextInput
                              secureTextEntry={true}
                              onChangeText={(password) => this.setState({password})}
                              underlineColorAndroid={'rgba(0,0,0,0)'}> </TextInput>

                          </View> 
                      </View>

                      <View style={styles.flatButtonStyle}>
                          <TouchableOpacity
                              style={styles.registerButtonStyle}
                              activeOpacity={0.8}
                              onPress={() => { 
                                // perform  register
                                console.log("Register Button Clicked")

                                this.onClickListener('sign_up')

      
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
                                    console.log("Register Button Clicked")
                                    Actions.move_to_AllergensCatalogue()

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
