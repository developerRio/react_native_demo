import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import * as Font from 'expo-font';

/**
 * components fro router
 */

 import SplashScreen from './src/screens/SplashScreen'
 import WelcomePage from './src/screens/WelcomePage'
 import LoginPage from './src/screens/LoginPage'
 import { render } from 'react-dom'

//  Font.loadAsync({
//   'Ubuntu-Bold': require('./src/data/fonts/Ubuntu-Bold.ttf'),
// });

// export default function App() {
//   return (
    
//     <View style={styles.container}>
//       <Text>Splash Up !</Text>
//     </View>
//   );
// }

class App extends Component{
  render(){

    return(
      <Router>
       <Scene key="root"> 
          <Scene key="key_loading" component={SplashScreen} initial={true} hideNavBar={true}/>
          <Scene key="key_login" component={WelcomePage} hideNavBar={true}/>
          <Scene key="move_to_login_page" component={LoginPage} hideNavBar={true}/>
       </Scene>
      </Router>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
