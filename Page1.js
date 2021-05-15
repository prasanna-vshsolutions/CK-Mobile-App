import React, { Component } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { Icon } from 'react-native-elements';

export default class Page1 extends Component {
    render(){
      return (
        <View style={styles.container}>
          <View>  
              <Image style={styles.logo} source={require('./assets/splash.png')}/>  
          </View> 
          <Text style={styles.title}>Protect the keys to your company.</Text>
          <Text style={styles.paragraph}>It's a huge pain to keep track of and secure your <Text style={styles.boldText}>Google, Twitter, SalesForce, MailChimp,</Text>
           and 100 other accounts.{"\n"}{"\n"}But it's dangerous if you don't.{"\n"}{"\n"}<Text>CommonKey stores your logins and gives you and your team secure one-click access.</Text>
          </Text>
          <Icon
          raised
          name='arrow-circle-right'
          type='font-awesome'
          color='#337ab7'
          reverse={true}
          reverseColor='#fff'
          size="30"
          onPress={() => navigation.navigate('Details')} />
        </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:50,
    },
    
    title:{
      fontSize:22,
      fontWeight:"bold",
      textAlign:"center",
      margin:20,
      marginBottom:0
    },
    paragraph:{
      fontSize:18,
      fontWeight:"bold",
      textAlign:"center",
      padding:20
    },
    logo: {
      width: 75,
      height: 75,
    },
  });
  