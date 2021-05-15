import React, { Component } from "react";
import { StyleSheet, Text, View,Image,ActivityIndicator } from "react-native";
import {WebView} from "react-native-webview";
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'



class SplashScreen extends Component {
  render(){
    return (
      <View style={styles.container}> 
      <View>  
          <Image style={styles.logo} source={require('./assets/splash.png')}/>  
      </View> 
      <Text style={styles.title}>Team Password Management</Text>
      <Text style={styles.paragraph}>CommonKey saves your passwords and lets you and your team securely login without having to remember the password.</Text>  
      <ActivityIndicator size="large" />
      </View>
    );
  }
}
class Page1 extends Component {
  render(){
    return (
      <View style={styles.containerPage1}>
        <View>  
            <Image style={styles.logo} source={require('./assets/splash.png')}/>  
        </View> 
        <Text style={styles.title}>Protect the keys to your company.</Text>
        <Text style={styles.paragraph}>It's a huge pain to keep track of and secure your <Text style={styles.boldText}>Google, Twitter, SalesForce, MailChimp,</Text>
         and 100 other accounts.{"\n"}{"\n"}But it's dangerous if you don't.{"\n"}{"\n"}<Text>CommonKey helps company's securely manage and share passwords across teams. Ditch the Google doc filled with passwords, increase productivity, and control user access with a click of a button. </Text>
        </Text>
        <Icon
        raised
        name='arrow-right-circle'
        type='feather'
        color='#337ab7'
        reverse={true}
        reverseColor='#fff'
        size="30"
        onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
class Page2 extends Component {
  render(){
    return (
      <View style={styles.containerPage2}>
        <View>  
            <Image style={styles.logo} source={require('./assets/splash.png')}/>  
        </View> 
        <Text style={styles.title}>Start improving your productivity and security today</Text>
        <View style={styles.iconDiv}>
          <View style={{alignItems: "center",margin:0}}>
            <Icon
            raised
            name='briefcase'
            type='feather'
            color='#337ab7'
            size={50} />
            <Text>Save your passwords</Text>
          </View>
          <View style={{alignItems: "center",margin:0}}>
            <Icon
            raised
            name='edit-2'
            type='feather'
            color='#337ab7'
            size={50} />
            <Text>Auto-login, everywhere</Text>
          </View>       
        <View style={{alignItems: "center",margin:0}}>
            <Icon
            raised
            name='users'
            type='feather'
            color='#337ab7'
            size={50} />
            <Text>Share with your team</Text>
          </View>
          <View style={{alignItems: "center",margin:0}}>
            <Icon
            raised
            name='lock'
            type='feather'
            color='#337ab7'
            size={50} />
            <Text>Everything secure</Text>
          </View>
          <View style={{alignItems: "center",marginTop:10}}>
          <Icon
          raised
          name='arrow-right-circle'
          type='feather'
          color='#337ab7'
          reverse={true}
          reverseColor='#fff'
          size="30"
          />
          </View>
        </View>

      </View>
    );
  }
}
class Page3 extends Component {
  render(){
    return (
      <View style={styles.containerPage3}>
        <View>  
            <Image style={styles.logo} source={require('./assets/splash.png')}/>  
        </View> 
        <Text style={styles.title}>CommonKey takes the hassle and security risks out of sharing apps</Text>
        <Text style={styles.paragraph}>Designed for collaborative and growing companies, CommonKey is a simple and intuitive password manager. Built in the cloud and encrypted using leading industry enterprise security standards, access to your company's applications are with you wherever your company takes you!{"\n"}{"\n"}<Text>Looking for more information or how to set up your common key? </Text></Text>
        <Icon
        raised
        name='arrow-right-circle'
        type='feather'
        color='#337ab7'
        reverse={true}
        reverseColor='#fff'
        size="30"
         />
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    RoutePage1: {
      screen: Page1,
    },
    RoutePage2: {
      screen: Page2,
    },
    RoutePage3: {
      screen: Page3,
    },
  },
  {
    initialRouteName: 'RoutePage1',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  state = {
    count: 0,
    active:"",
    isVisible : true,  
  };

  openCommonkeyWebView=()=>{
    this.setState({
      active:"WebView"
    })
  }
  openCommonkeyPage1=()=>{
    this.setState({
      active:"Page1"
    })
  }
  Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
    this.openCommonkeyPage1()
  }  
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 1000);  
   }  
  render() {
    return (
      <>
      <AppContainer />
      {(this.state.isVisible === true) ? <SplashScreen/> : null}  
      {this.state.active==="Page1"?<Page3/>:
      <>
      {this.state.active==="WebView"?
      <View style={{ flex: 1,marginTop:50 }}>
      <WebView
        cacheEnabled={true}
        source={{
          uri: "https://dashboard.commonkey.com/",
        }}
      />
    </View>:null
      }
    </>
    }     
    </>
    
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
  containerPage1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:50,
  },
  containerPage2: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:50,
  },
  containerPage3: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:50,
  },
  iconDiv:{
    flex: 1,
    flexDirection:"column",
  },
  text: {
    color: "#014f8a",
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

export default App;
