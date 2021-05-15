import React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
    render() {
        return <WebView source={{ uri: 'https://dashboard.commonkey.com/register' }} style={{ marginTop: 20 }} />;
    }
}



// import React from 'react';
// import { View, Text,StyleSheet,Image,ActivityIndicator, TextInput } from 'react-native';
// import {WebView} from "react-native-webview";
// import { createAppContainer } from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import { Icon,Button } from 'react-native-elements';
// import {api} from './api'
// // import { Ionicons } from '@expo/vector-icons';
// import Onboarding from 'react-native-onboarding-swiper';
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
// // import CryptoJS from "react-native-crypto-js";
// // import CryptoJS from 'crypto-js';

// import CryptoES from 'crypto-es';
// import Shapes from './Shapes';
// import QandA from './QandA';
// import RotateAnimation from "./RotateAnimation";
// // import { Crypt, RSA } from 'hybrid-crypto-js';

// // var rsa = new RSA();

// // // Generate RSA key pair, default key size is 4096 bit


// // // ... or:
// // rsa.generateKeyPairAsync().then(keyPair => {
// //     var publicKey = keyPair.publicKey;
// //     var privateKey = keyPair.privateKey;
// //     console.log("generateKeyPairAsyncPUB",publicKey)
// //     console.log("generateKeyPairAsyncpvt",privateKey)
// // });

// // // Generate 1024 bit RSA key pair
// // rsa.generateKeyPair(function(keyPair) {
// //     // Callback function receives new 1024 bit key pair as a first argument
// //     var publicKey = keyPair.publicKey;
// //     var privateKey = keyPair.privateKey;
// //     console.log("generateKeyPairPUB",publicKey)
// //     console.log("generateKeyPairpvt",privateKey)
// // }, 1024); // Key size

// // // RSA can be also initialized with options
// // var rsa = new RSA({
// //     keySize: 4096,
// // });

// import crypto from 'isomorphic-webcrypto';
// // (async () => {

// //    await crypto.ensureSecure();
// //   const array = new Uint8Array(1);
// //   crypto.getRandomValues(array);
// //   const safeValue = array[0];
// //   console.log(safeValue,">>>>>>>>>>>>>>>")
// // })()

// // async function getKeys() {
// //   let keyss = null;
// //   keyss = await crypto.subtle.generateKey(
// //       {
// //         name: "RSASSA-PKCS1-v1_5",
// //         // Consider using a 4096-bit key for systems that require long-term security
// //         modulusLength: 2048,
// //         publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
// //         hash: "SHA-256",
// //       },
// //       true,
// //       ["sign", "verify"]
// //     );
// //     console.log(keyss,"KEYSS")
// //     crypto.subtle.exportKey(
// //       "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
// //       keyss.publicKey //can be a publicKey or privateKey, as long as extractable was true
// //   )
// //   .then(function(keydata){
// //       //returns the exported key data
// //       console.log(keydata);
// //   })
// //   .catch(function(err){
// //       console.error(err);
// //   });
// //       return keyss;
// //   }

// //   getKeys();



// var derivedKey = CryptoES.SHA256(
//   CryptoES.PBKDF2("password", 'd3af252f4997e240cef4848bf15731324b26315a87dcb09c25f8b669647cbd9d', {
//     keySize: 256 / 32,
//     iterations: 1000,
//   }).toString(),
// ).toString();
// console.log(derivedKey,"DERIVEDKEY")
// class SplashScreen extends React.Component {
//   render(){
//     return (
//       <View style={styles.container}> 
//       <View>  
//           <Image style={styles.logo} source={require('./assets/splash.png')}/>  
//       </View> 
//       <Text style={styles.title}>Team Password Management</Text>
//       <Text style={styles.paragraph}>CommonKey saves your passwords and lets you and your team securely login without having to remember the password.</Text>  
//       <ActivityIndicator size="large" />
//       </View>
//     );
//   }
// }

// class WelcomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//       csrfToken:'',
//       salt1:'',
//       salt2:'',
//       symKey:'',
//       encryptedPassKey:'',
//       passwordEnc:'',
//       decryptedPassKey:''
//     };
//   }

//   onLogin=() =>{
//     const { username, password ,csrfToken , salt1 , salt2 ,symKey} = this.state;
//     this.loginUser({email: username, password:password})
//     console.log(`${username} +${password} + ${csrfToken} + ${salt1} + ${salt2}`);
//   }
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerShown: false
//     }
//  }
//   state = {
//     isVisible : true,  
//     isUserLoggedIn: false
//   };
//   Hide_Splash_Screen=()=>{  
//     this.setState({   
//       isVisible : false   
//     });  
//   }  
//   userLoggedIn = ()=>{
//     this.setState({
//       isUserLoggedIn : true
//     })
//   }

//   componentDidMount(){  
//     var that = this;  
//     setTimeout(function(){  
//       that.Hide_Splash_Screen();  
//     }, 1000); 
//    }  
//    loginUser = async data => {
//     try {
//       let emailId = encodeURIComponent(data.email);
//       const result = await api(`/me/salts?email=${emailId}`);
//       console.log("RESULTAPI",result)
//       if (result.csrfToken && result.email && result.salt1 && result.salt2) {
//         console.log("RESULT",result)
//         // generate key from salt1, generate password hash from salt2
//         var derivedKey = CryptoES.SHA256(
//           CryptoES.PBKDF2(data.password, result.salt1, {
//             keySize: 256 / 32,
//             iterations: 1000,
//           }).toString(),
//         ).toString();
//         console.log(derivedKey,"DERIVEDKEY")
//         let user_data = {
//           email: result.email,
//           salt1: result.salt1,
//           salt2: result.salt2,
//           csrf: result.csrfToken,
//           symKey: derivedKey,
//           passwordHash: CryptoES.SHA256(result.salt2.concat(derivedKey)).toString(),
//         };
//         console.log(user_data,"USER_DATA")
//         this.setState ({
//           username: user_data.email,
//           salt1 : user_data.salt1,
//           salt2: user_data.salt2,
//           csrfToken : user_data.csrf,
//           symKey : user_data.symKey,
//           password : user_data.passwordHash,
//         })
//         // creating FormData type payload for API
//         const form_data = new FormData();
//         const final_payload = {
//           authenticity_token: user_data.csrf,
//           email: user_data.email,
//           password: user_data.passwordHash,
//         };
//         console.log(user_data.passwordHash,"user_data.passwordHash")
//         for (let key in final_payload) {
//           form_data.append(key, final_payload[key]);
//         }

//         const tokenApi = await api(`/tokens.json`, 'POST', null, form_data);
//         console.log(tokenApi,"tokenAPI")
//         if (tokenApi.email && tokenApi.token) {

//           // login success, add more key data
//           user_data.firstname = tokenApi.firstname != null ? tokenApi.firstname : null;
//           user_data.lastname = tokenApi.lastname != null ? tokenApi.lastname : null;
//           user_data.token = tokenApi.token;
//           user_data.email = tokenApi.email;

//           // storing session
//           window.sessionStorage.setItem('symKey', user_data.symKey);

//           // local storage
//           localStorage.setItem('symKey', user_data.symKey);

//           // deleting passwordHash before storing
//           delete user_data.passwordHash;

//           var meStr = JSON.stringify(user_data);

//           // storing session
//           window.sessionStorage.setItem('me', meStr);

//           // local storage
//           localStorage.setItem('me', meStr);
//           // yield putResolve(loginActions.setUserTokenInfo(user_data));
//           alert("LOGIN SUCCESSFULLY")
//           return { csrfToken: result.csrfToken, user_data };

//         } else {
//           return tokenApi;
//         }
//       } else if (result.error) {
//         // update badge
//         browser.runtime.sendMessage({
//           action: 'update-badge-icon',
//           message: 'logged-out',
//         });

//         browser.storage.local.set({
//           ck_secrets: null,
//         });

//         browser.storage.local.set({ ck_user: null });
//         return result;
//       }
//     } catch (error) {
//       console.log(error,"ERRRROOOOOOORRRRRRRRRRRRRR")
//     }
//   };
//     //U2FsdGVkX18f9NW3VD0x4ceJzv6jLQZ5Jt4X5A2MvIQ=:string
//     //7cfd2fa59381b912bb276e9e75faa2b3737222ab9f60e15259cb852c17f11b83
//     render(){
//       // Encrypt
//       // let ciphertext = CryptoES.AES.encrypt('prasannapied@pipers.com', '7cfd2fa59381b912bb276e9e75faa2b3737222ab9f60e15259cb852c17f11b83').toString();
//       // console.log(ciphertext,"ciphertext")
//       // // Decrypt
//       // let bytes  = CryptoES.AES.decrypt('U2FsdGVkX18f9NW3VD0x4ceJzv6jLQZ5Jt4X5A2MvIQ=:string', '7cfd2fa59381b912bb276e9e75faa2b3737222ab9f60e15259cb852c17f11b83');
//       // let originalText = bytes.toString(CryptoES.enc.Utf8);
//       // console.log(originalText,"originalText"); // 'my message'
//       const { username, password ,csrfToken , salt1 , salt2 ,symKey,encryptedPassKey,passwordEnc,isUserLoggedIn} = this.state;
//       console.log(this.state,"state");
//     return (

//       <>
//       {/* {!this.state.isUserLoggedIn === true ?  */}
//             <View style={styles.containerWelcomePage}>
//             <TextInput
//               value={username}
//               onChangeText={(username) => this.setState({ username })}
//               placeholder={'Username'}
//               style={styles.input}
//             />
//             <TextInput
//               value={password}
//               onChangeText={(password) => this.setState({ password })}
//               placeholder={'Password'}
//               secureTextEntry={true}
//               style={styles.input}
//             />

//             <Button
//               title={'Login'}
//               onPress={this.onLogin}
//             />
//           </View> 
//       {/* :
//             <View style={styles.container}>
//               <Text style={{marginBottom:20}}>Password phrase is : "prasannapied@pipers.com"</Text>
//               <Text style={{margin:50 }}>Encrypted Password Value :{ciphertext}</Text>
//               <Text>Decrypted Password Value :{originalText}</Text>
//             </View>
//       } */}

//     </>

//     );
//   }
// }
// class FeaturedPage extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerShown: false
//     }
//  }
//   render(){
//     return (
//       <View style={styles.containerFeaturedPage}>
//           <View style={{alignItems:"center"}}>  
//               <Image style={styles.logo} source={require('./assets/splash.png')}/>  
//             <Text style={styles.title}>CommonKey Provides you features</Text>
//           </View> 
//          <View style={styles.iconDiv}>
//           <View style={{alignItems: "center",margin:10}}>
//             <Icon
//             raised
//             name='briefcase'
//             type='feather'
//             color='#337ab7'
//             size={36} />
//             <Text>Save your passwords</Text>
//           </View>
//           <View style={{alignItems: "center",margin:10}}>
//             <Icon
//             raised
//             name='users'
//             type='feather'
//             color='#337ab7'
//             size={36} />
//             <Text>Share with your team</Text>
//           </View>
//           <View style={{alignItems: "center",margin:10}}>
//             <Icon
//             raised
//             name='edit-2'
//             type='feather'
//             color='#337ab7'
//             size={36} />
//             <Text>Auto-login, everywhere</Text>
//           </View>  
//           <View style={{alignItems: "center",margin:10}}>
//             <Icon
//             raised
//             name='lock'
//             type='feather'
//             color='#337ab7'
//             size={36} />
//             <Text>Everything secure</Text>
//           </View>
//         </View>
//         <View style={{alignItems: "center",marginTop:20}}>
//           <Icon
//           name='arrow-right-circle'
//           type='feather'
//           color='#337ab7'
//           size={50}
//           onPress={() => this.props.navigation.navigate('LetsStarted')}
//           />
//         </View>
//       </View>
//     );
//   }
// }
// class LetsStarted extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerShown: false
//     }
//  }
//   state = {
//     active:"LetsStarted",
//   };

//   openCommonkeyWebView=()=>{
//     this.setState({
//       active:"WebView"
//     })
//   }
//   completeOnboarding=()=>{
//     this.openCommonkeyWebView()
//   }
//   render(){
//     return (
//       <>
//       {this.state.active==="LetsStarted"?
//       // <View style={styles.containerLetsStarted}>
//       //   <View>  
//       //       <Image style={styles.logo} source={require('./assets/splash.png')}/>  
//       //   </View> 
//       //   <Text style={styles.title}>Let's get started</Text>
//       //   <View style={{alignItems: "center",marginTop:30}}>
//       //   <Icon
//       //   name='arrow-right-circle'
//       //   type='feather'
//       //   color='#337ab7'
//       //   size={50}
//       //   onPress={()=>{this.openCommonkeyWebView()}}
//       //    />
//       //    </View>
//       // </View>
//       <View style={styles.containerLetsStarted}>
//       <Onboarding
//       onDone={this.completeOnboarding}
//       onSkip={this.completeOnboarding}
//         pages={[
//           {
//             backgroundColor: '#f9f9f9',
//             image: <Icon
//             raised
//             name='edit-2'
//             type='feather'
//             color='#337ab7'
//             size={64} />,
//             title: 'Auto-login, everywhere',
//             subtitle: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
//           },
//           {
//             backgroundColor: '#f9f9f9',
//             image: <Icon
//             raised
//             name='briefcase'
//             type='feather'
//             color='#337ab7'
//             size={64} />,
//             title: 'Save Password',
//             subtitle: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
//           },
//           {
//             backgroundColor: '#f9f9f9',
//             image: <Icon
//             raised
//             name='lock'
//             type='feather'
//             color='#337ab7'
//             size={64} />,
//             title: 'Everything Secure',
//             subtitle: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
//           },
//         ]}/>
//         </View>
// //       <View style={{flex: 1,marginTop:50}}>
// //     <ProgressSteps>
// //         <ProgressStep label="First Step">
// //             <View style={{ alignItems: 'center' }}>
// //                 <Text>This is the content within step 1!</Text>
// //             </View>
// //         </ProgressStep>
// //         <ProgressStep label="Second Step">
// //             <View style={{ alignItems: 'center' }}>
// //                 <Text>This is the content within step 2!</Text>
// //             </View>
// //         </ProgressStep>
// //         <ProgressStep label="Third Step">
// //             <View style={{ alignItems: 'center' }}>
// //                 <Text>This is the content within step 3!</Text>
// //             </View>
// //         </ProgressStep>
// //         <ProgressStep label="Fourth Step">
// //             <View style={{ alignItems: 'center' }}>
// //                 <Text>This is the content within step 3!</Text>
// //             </View>
// //         </ProgressStep>
// //         <ProgressStep label="Fifth Step" onSubmit={this.openCommonkeyWebView}>
// //             <View style={{ alignItems: 'center' }}>
// //                 <Text>This is the content within step 3!</Text>
// //             </View>
// //         </ProgressStep>

// //     </ProgressSteps>
// // </View>
//       :<View style={{ flex: 1,marginTop:50 }}>
//       <WebView
//         cacheEnabled={true}
//         domStorageEnabled={true}
//         cacheMode={true}
//         source={{
//           uri: "https://dashboard.commonkey.com/",
//         }}
//       />
//       </View>}
//       </>
//     );
//   }
// }

// const RootStack = createStackNavigator(

//   {
//     WelcomePage:WelcomePage,
//     FeaturedPage:FeaturedPage,
//     LetsStarted:LetsStarted,
//   },
//   {
//     initialRouteName: 'WelcomePage',
//  },

// );


// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {

//   render() {
//     return (

//       <AppContainer/>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:50,
//   },
//   containerWelcomePage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:50,
//   },
//   containerFeaturedPage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:50,
//   },
//   containerLetsStarted: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:10,
//   },
//   iconDiv:{
//      flexDirection:"row",
//      flexWrap:'wrap',
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:10,
//   },
//   text: {
//     color: "#014f8a",
//   },
//   title:{
//     fontSize:22,
//     fontWeight:"bold",
//     textAlign:"center",
//     margin:20,
//     marginBottom:0
//   },
//   paragraph:{
//     fontSize:18,
//     fontWeight:"normal",
//     textAlign:"center",
//     padding:20
//   },
//   logo: {
//     width: 75,
//     height: 75,
//   },
//   containerOnboarding:{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     width: 250,
//     height: 50,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 10,
//   }
// });