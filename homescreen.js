import * as React from 'react';
import {Text,View,Stylesheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from "react-native-elements";

class Homescreen extends React.Component{
    render(){
        getWord = (word) =>{
            var searchKeyWord = word.toLowerCase()
            var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"
            return fetch(url)
        
            .then((data)=>{
        if (data.status === 200) {
          return data.json()
        }
        else{
          return null
        }
          })
        
        
          .then((response)=>{
              varResponseObject = response
              if (responseObject)
              {
                  var wordData = responseObject.definitions[0]
                  var definition = wordData.description
                  var lexicalCategory = wordData = wordData.wordtype
        
                  this.setState({
                      "word" : this.state.text,
                      "definition":"Not Found"
                  })
              }
          })
        }
        
        
        
        return(
<View style={styles.container}>
    <Header
    backgroundColor = {'#9c8218'}
    centerComponent = {{text:"Pocket Dictionary",style:{color:"#fff",fontSize:20}}}
   />
   <TextInput
   style  = {styles.inputBox}
   onChangeText = {(text)=>{
     this.setState({
      text:text, 
      isSearchPressed:false,
      word:"Loading...", 
      lexicalCategory:"",
      examples:[],
      definition:""
    });
   }}
   value = {this.state.text}/>
  <Text>{this.state.displayText}</Text>
  <TouchableOpacity
    style = {styles.searchButton}
    onPress = { () => {
      this.setState({isSearchPressed:true});
      this.getWord(this.state.text)
    }}/>

    <View style = {styles.detailsContainer}>
        <Text style = {styles.detailsTitle}>
            Word:{""}
        </Text>
        <Text style = {{fontSize:18}}>
            {this.state.word}
        </Text>
    </View>

    <View style = {styles.detailsContainer}>
        <Text style = {styles.detailsTitle}>
            Word:{""}
        </Text>
        <Text style = {{fontSize:18}}>
            {this.state.lexicalCategory}
        </Text>
    </View>

    <View style = {styles.detailsContainer}>
        <Text style = {styles.detailsTitle}>
            Type:{""}
        </Text>
        <Text style = {{fontSize:18}}>
            {this.state.word}
        </Text>
    </View>

    <View style = {{flexDirection:"row",flexWrap:"wrap"}}>
        <Text style = {styles.detailsTitle}>
            Definition:{""}
        </Text>
        <Text style = {{fontSize:18}}>
            {this.state.word}
        </Text>
    </View>


   </View>
        )
    }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
    inputBox:{
      marginTop:50,
      width:"80%",
      alignSelf:"center",
      height:40,
      textAlign:"center",
      borderWidth:4,
      outline:"none"
    },

    detailsContainer:{
     height:20,
     width:60,
     textAlign:"center",
     borderWidth:"none",
},

    detailsTitle:{
     color: "black",
      textAlign: "center",

},
searchButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 70,
    backgroundColor: '#fff',


},
  
});


export default Homescreen;