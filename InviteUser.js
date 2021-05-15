import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default class InviteUser extends React.Component{
    
  render() {
  return (
    <WebView 
    source={{ uri: 'http://192.168.0.9:3001/dashboard/companies' }}
    style={{ marginTop: 20 }}
     />
  )
  }
}
