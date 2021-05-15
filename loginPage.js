import React from 'react';
 import { View, Text,StyleSheet,TextInput } from 'react-native';
 import { Icon,Button, colors, ThemeConsumer } from 'react-native-elements';
 import {api} from './api'
 import CryptoES from 'crypto-es';
import { WebView } from 'react-native-webview';


export default class Login extends React.Component {
  
  constructor(props) {
        super(props);
        this.webref = React.createRef();
        this.state = {
          username: '',
          password: '',
          csrfToken:'',
          salt1:'',
          salt2:'',
          symKey:'',
          encryptedPassKey:'',
          passwordEnc:'',
          decryptedPassKey:'',
          isLoginWebview: false,
          isInviteUserWebview: false,
          webviewSource:{login:"http://192.168.0.9:3001/login",
                         inviteUser:"http://192.168.0.9:3001/dashboard/companies/3/teams/4/users/invite",
                        },
          webViewSourceName:"login",
          twofa:''  ,
          isTwoFA:false,
          setCookies:''       
        };
      }
    onLogin=() =>{
          const { username, password ,csrfToken , salt1 , salt2 ,symKey} = this.state;
          this.loginUser({email: username, password:password})
          console.log(`${username} +${password} + ${csrfToken} + ${salt1} + ${salt2}`);
        }
        loginUser = async data => {
              try {
                let emailId = encodeURIComponent(data.email);
                const result = await api(`/me/salts?email=${emailId}`);
                console.log("RESULTAPI",result)
                if (result.csrfToken && result.email && result.salt1 && result.salt2) {
                  console.log("RESULT",result)
                  // generate key from salt1, generate password hash from salt2
                  var derivedKey = CryptoES.SHA256(
                    CryptoES.PBKDF2(data.password, result.salt1, {
                      keySize: 256 / 32,
                      iterations: 1000,
                    }).toString(),
                  ).toString();
                  console.log(derivedKey,"DERIVEDKEY")
                  let user_data = {
                    email: result.email,
                    salt1: result.salt1,
                    salt2: result.salt2,
                    csrf: result.csrfToken,
                    symKey: derivedKey,
                    passwordHash: CryptoES.SHA256(result.salt2.concat(derivedKey)).toString(),
                  };
                  console.log(user_data,"USER_DATA")
                  this.setState ({
                    username: user_data.email,
                    salt1 : user_data.salt1,
                    salt2: user_data.salt2,
                    csrfToken : user_data.csrf,
                    symKey : user_data.symKey,
                    password : user_data.passwordHash,
                  })
                  // creating FormData type payload for API
                  const form_data = new FormData();
                  const final_payload = {
                    authenticity_token: user_data.csrf,
                    email: user_data.email,
                    password: user_data.passwordHash,
                  };
                  console.log(user_data.passwordHash,"user_data.passwordHash")
                  for (let key in final_payload) {
                    form_data.append(key, final_payload[key]);
                  }
          
                  let tokenApi = await api(`/tokens.json`, 'POST', null, form_data);
                  console.log(tokenApi,"tokenAPI>>>>>>>>>>>>>>>>>>>")
                  if (tokenApi.email && tokenApi.token) {
                    
                    // login success, add more key data
                    user_data.firstname = tokenApi.firstname != null ? tokenApi.firstname : null;
                    user_data.lastname = tokenApi.lastname != null ? tokenApi.lastname : null;
                    user_data.token = tokenApi.token;
                    user_data.email = tokenApi.email;
          
                    // storing session
                    // window.sessionStorage.setItem('symKey', user_data.symKey);
          
                    // // local storage
                    // localStorage.setItem('symKey', user_data.symKey);
          
                    // deleting passwordHash before storing
                    delete user_data.passwordHash;
          
                    var meStr = JSON.stringify(user_data);
          
                    // storing session
                    // window.sessionStorage.setItem('me', meStr);
          
                    // // local storage
                    // localStorage.setItem('me', meStr);
                    // yield putResolve(loginActions.setUserTokenInfo(user_data));
                     let user_me_data = await this.getLatestUserData();
                    // console.log(user_me_data,"ERROR_TYPE")
                    // if (user_me_data.error_type) {
                    //     this.setState({isTwoFA:true})
                    // }
                    let cookiesCK = this.get_set_cookies(user_me_data.headers);
                    console.log(cookiesCK[0],"COOKIES-CK")
                    this.setState({setCookies:cookiesCK[0]})
                    alert("LOGIN SUCCESSFULLY")
                    return { csrfToken: result.csrfToken, user_data };
          
                  } else {
                    return tokenApi;
                  }
                } else if (result.error) {
                  // update badge
                  browser.runtime.sendMessage({
                    action: 'update-badge-icon',
                    message: 'logged-out',
                  });
          
                  browser.storage.local.set({
                    ck_secrets: null,
                  });
          
                  browser.storage.local.set({ ck_user: null });
                  return result;
                }
              } catch (error) {
                console.log(error,"ERRRROOOOOOORRRRRRRRRRRRRR")
              }
            };
             
            check2FAOtp = async () => {
              console.log("2FA CALLED")
              const form_data = new FormData();
              form_data.append('code', this.state.twofa);
              form_data.append('authenticity_token', this.state.csrfToken);
              let result = await api(`/me/authenticating2fa`, 'POST', null, form_data);
              console.log(result,"2fa result");
            };
    webviewEventListner = (event)=>{
      console.log("hello")
      const { data } = event.nativeEvent;
              if (data === "user-register-successfully") {
                  console.log("redirect to complete registration")
                  this.props.navigation.navigate('InviteUser')       
              }
              console.log(data,"DATATATATATAT");
    }
     injected = `window.addEventListener('load', (event) => {
      window.postMessage(JSON.stringify({
        action: "login-into-commonkey",
        email: "prasanna@ck.com",
        password: "prasanna@ck.com"
    }));
    });`;
    onButtonClick=(btnName)=>{
      if(btnName === "login") {
        this.setState({webViewSourceName:"login"})
      }
      else if( btnName === "inviteUser"){
        this.setState({webViewSourceName:"inviteUser"})
      }
      this.setState({isWebview: true})
    }
      getLatestUserData = async () => {
        return await api('/me/me_v2.json');
      };
      componentDidMount(){
        this.getLatestUserData();
      }
       get_set_cookies = (headers)=> {
        const set_cookies = []
        for (const [name, value] of headers) {
            if (name === "set-cookie") {
                set_cookies.push(value)
            }
        }
        return set_cookies
    }
    render() {
      const { username, password,isWebview,webviewSource,setCookies,isTwoFA,webViewSourceName,twofa ,isInviteUserWebview,csrfToken , salt1 , salt2 ,symKey,encryptedPassKey,passwordEnc,isUserLoggedIn} = this.state;
       console.log(this.state,"state");
        return  <>
            
          {isWebview === true ?
             <WebView 
              source={{ uri: webviewSource[webViewSourceName],
                headers: {
                  Cookie: setCookies,
                }, }}
              style={{ marginTop: 20 }}
              onMessage={this.webviewEventListner}
              injectedJavaScript={this.injected}
              javaScriptEnabled={true}   
              cacheEnabled={true}
              cacheMode={true}  
              sharedCookiesEnabled={true}
              thirdPartyCookiesEnabled={true}
              />
        //  :
        //  isTwoFA === true ?
        //  <>
        //   <TextInput
        //    value={twofa}
        //    onChangeText={(twofa) => this.setState({ twofa })}
        //    placeholder={'twofa'}
        //    secureTextEntry={true}
        //    style={styles.input}
        //  />
        //  <Button
        //    title={'Confirm two FA'}
        //    onPress={this.check2FAOtp}
        //  />
        //  </>
        :
         <View style={styles.containerWelcomePage}>
         <TextInput
           value={username}
           onChangeText={(username) => this.setState({ username })}
           placeholder={'Username'}
           style={styles.input}
         />
         <TextInput
           value={password}
           onChangeText={(password) => this.setState({ password })}
           placeholder={'Password'}
           secureTextEntry={true}
           style={styles.input}
         />
         <Button
           title={'Login'}
           onPress={this.onLogin}
         />
         <Button
           title={'LOGIN FORM WEBVIEW'}
           style={{marginTop:20}}
           onPress={() => this.onButtonClick("login")}
          // onPress={() => this.props.navigation.navigate('SignUpPage')}

         />
         <Button
           title={'Get Deep Link'}
           style={{marginTop:20}}
           onPress={() => this.props.navigation.navigate('Deep')}
         />
         <Button
           title={'Invite User'}
           style={{marginTop:20}}
          //  onPress={() => this.setState({isInviteUserWebview: true})}
          onPress={() => this.onButtonClick("inviteUser")}
         />
       </View>
         } 
     
        </>
    }
}

const styles = StyleSheet.create({
 
  containerWelcomePage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
  },
  input: {
        width: 250,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      }
  
});
