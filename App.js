import * as React from 'react';
import {Text,View,Stylesheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from "react-native-elements";
import{createAppContainer} from "react-Navigation"
import Homescreen from "./homescreen.js"


export default class App extends React.Component {
 constructor(){
    super();
    this.state = {
text:"",
displayText:"",

  }
}
render(){


  return(
    <View>
    <AppContainer/>
   </View>
  )
}
}

