
import * as React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
     <TextInput style = {styles.textContainer}/>
     
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "black",
    width: 50,
    height: 50,
  }
})
