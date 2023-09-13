import { useEffect, useReducer } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import SocialSharing from "../Components/SocialSharing";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const initialState={
loginName: "",
loginPassword: "",
loginCheckbox: false,
signUpName: "",
signUpEmail: "",
signUpPassword: "",
signUpConfirmPassword:"",
signUpCheckbox: false,
loginmessage: "",
signUpMessage: "",
}

function reducer(state, action){
    switch(action.type){
    case 'LoginName':
        return{
            ...state,
            loginName: action.payload,
        }
    case 'LoginPassword':
        return{
            ...state,
            loginPassword: action.payload,
        }
     case 'LoginCheckbox':
        return{
            ...state,
        }
    case 'SignUpName':
        return{
            ...state,
            signUpName: action.payload,
        }
    case 'SignUpEmail':
        return{
            ...state,
            signUpEmail: action.payload,
        }
    case 'SignUpPassword':
        return{
            ...state,
            signUpPassword: action.payload,
        }
    case 'SignUpConfirmPassword':
        return{
            ...state,
            signUpConfirmPassword: action.payload,
        }
     case 'SignUpCheckbox':
        return{
            ...state,
        }
    case 'LoginMessage':
        return{
            ...state,
            loginmessage: action.payload,
        }
   case 'SignUpMessage':
        return{
            ...state,
            signUpMessage: action.payload,
        }
    case 'ResetForm':
                return{
            ...initialState,
            loginmessage: state.loginmessage,
            signUpMessage: state.signUpMessage
        }
        default: 
            return state;
    }
}

function Login({courses}){
     useEffect(()=>{
    window.scrollTo(0,0);
 },[])
    return(
        <>
       <Header/>
       <NavBar />
       <LoginForms />
       <SocialSharing />
       <Footer courses={courses}/>
       <CopyRight />
       </>
    );
}
export default Login

function LoginForms(){
   const navigate=useNavigate();
    const[{loginName, loginPassword, loginCheckbox, signUpEmail, signUpCheckbox, signUpConfirmPassword, signUpName, signUpPassword, loginmessage, signUpMessage}, dispatch]=useReducer(reducer, initialState);

    const showMessage = (messageType,message) => {
    dispatch({ type: messageType, payload: message });
     dispatch({ type: "ResetForm" });
    setTimeout(() => {
      dispatch({ type: messageType, payload: "" });
      navigate("/")
    }, 3000);
  };

    const handleLoginSubmit=(e)=>{
        e.preventDefault();
       showMessage("LoginMessage", "Thank you for logging in");
    };
     const handleSignUpSubmit=(e)=>{
        e.preventDefault();
       showMessage("SignUpMessage", "Thank you for signing up");
    };
    

   return(
       <div className={styles.loginForm}>
         <div className={styles.login}>
            <h2>Login</h2>
            <form className={styles.form} onSubmit={handleLoginSubmit}>
               <div className={styles.formDetails}>
                  <label>Username</label>
                  <input type="text" placeholder="Enter username" required value={loginName} onChange={(e)=> dispatch({type: "LoginName", payload: e.target.value})}/>
                  <label>Password</label>
                  <input type="text" placeholder="Enter password" required value={loginPassword} onChange={(e)=> dispatch({type: "LoginPassword", payload: e.target.value})}/>
               </div>
               <div className={styles.forgotPassword}>
                  <label><input type="checkbox"  value={loginCheckbox} onChange={()=> dispatch({type: "LoginCheckbox"})}/>Remember me</label>
                  <button type="submit">Login</button>
               </div>
               <div className={styles.loginMessage}><p>{loginmessage}</p></div>
            </form>
         </div>
         <div className={styles.signUp}>
             <h2>Sign Up</h2>
             <div className={styles.signupForm}>
               <form onSubmit={handleSignUpSubmit}>
               <div className={styles.signupRows}>
                  <div className={styles.signUpDetails}>
                     <label>Username</label><br />
                     <input type="text" placeholder="Enter username" required value={signUpName} onChange={(e)=> dispatch({type: "SignUpName", payload: e.target.value})}/>
                  </div>
                  <div>
                     <label>E-mail </label><br />
                     <input type="email" placeholder="Enter Email" required value={signUpEmail} onChange={(e)=> dispatch({type: "SignUpEmail", payload: e.target.value})}/>
                 </div>
               </div>
                <div className={styles.signupRows}>
                  <div className={styles.signUpDetails}>
                     <label>Password</label><br />
                     <input type="text" placeholder="Enter password" required value={signUpPassword} onChange={(e)=> dispatch({type: "SignUpPassword", payload: e.target.value})}/>
                  </div>
                  <div>
                     <label>Password again</label><br />
                     <input type="text" placeholder="Confirm password" required value={signUpConfirmPassword} onChange={(e)=> dispatch({type: "SignUpConfirmPassword", payload: e.target.value})} />
                 </div>
               </div>
               <div className={styles.register}> 
                  <label><input type="checkbox" value={signUpCheckbox} onChange={()=> dispatch({type: "SignUpCheckbox"})} />Register as Instructor </label>
                  <button>Register</button>
               </div>
                <div className={styles.signUpMessage}><p>{signUpMessage}</p></div>
               </form>
             </div>
         </div>
       </div>
   );
}