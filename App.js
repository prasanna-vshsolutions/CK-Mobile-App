import React from 'react';
 import { View, Text,StyleSheet,TextInput } from 'react-native';
 import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './loginPage';
import SignUpPage from './SignUpPage';
import CompleteRegistration from './CompleteRegistration';
import Deep from './Deep';
import InviteUser from './InviteUser'

const RootStack = createStackNavigator(

  {
    Login:Login,
    SignUpPage:SignUpPage,
    CompleteRegistration:CompleteRegistration,
    Deep:Deep,
    InviteUser:InviteUser
  },
  {
    initialRouteName: 'Login',
 },

);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        
        return  <>
            <View style={styles.containerWelcomePage}>
            <AppContainer/>
          </View> 
            
        </>
    }
}

const styles = StyleSheet.create({
 
  containerWelcomePage: {
    flex: 1,
  }
});


// // import React in our code
// import React, {useState} from 'react';
// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// // import AsyncStorage
// import AsyncStorage from '@react-native-community/async-storage';

// const App = () => {
//   const [textInputValue, setTextInputValue] = useState('');
//   const [getValue, setGetValue] = useState('');
//   const saveValueFunction = () => {
//     if (textInputValue) {
//       AsyncStorage.setItem('any_key_here', textInputValue);
//       setTextInputValue('');
//       alert('Data Saved');
//     } else {
//       alert('Please fill data');
//     }
//   };
//   const getValueFunction = () => {
//     // Function to get the value from AsyncStorage
//     AsyncStorage.getItem('any_key_here').then(
//       (value) =>
//         // AsyncStorage returns a promise
//         // Adding a callback to get the value
//         setGetValue(value),
//       // Setting the value in Text
//     );
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Store Data in Session
//         </Text>
//         <TextInput
//           placeholder="Enter Some Text here"
//           value={textInputValue}
//           onChangeText={(data) => setTextInputValue(data)}
//           underlineColorAndroid="transparent"
//           style={styles.textInputStyle}
//         />
//         <TouchableOpacity
//           onPress={saveValueFunction}
//           style={styles.buttonStyle}>
//           <Text style={styles.buttonTextStyle}>
//             SAVE VALUE
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={getValueFunction}
//           style={styles.buttonStyle}>
//           <Text style={styles.buttonTextStyle}>
//             GET VALUE
//           </Text>
//         </TouchableOpacity>
//         <Text style={styles.textStyle}>
//           {getValue}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     padding: 10,
//     textAlign: 'center',
//     fontSize:22,
//     fontWeight:'700'
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: '#077898',
//     padding: 5,
//     marginTop: 32,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//     fontWeight:'700'
//   },
//   textInputStyle: {
//     textAlign: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#077898',
//     padding:20
    
//   },
// });
// export default App;