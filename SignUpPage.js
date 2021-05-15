import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class SignUpPage extends React.Component{
    
    webviewEventListner = (event)=>{
                console.log("hello")
                const { data } = event.nativeEvent;
                        if (data === "user-register-successfully") {
                            console.log("redirect to complete registration")
                            this.props.navigation.navigate('CompleteRegistration')       
                        }
                        console.log(data);
            }
        injected = `
        window.addEventListener('load', (event) => {
            ReactNativeWebView.postMessage("event.data");
          });`;
  render() {
    console.log("SIGNUP REMDER CALLED ")
  return (
            <WebView 
            source={{ uri: 'http://192.168.0.9:3001/register' }}
            style={{ marginTop: 20 }}
            onMessage={this.webviewEventListner}
            injectedJavaScript={this.injected}
             />
  )
  }
}
