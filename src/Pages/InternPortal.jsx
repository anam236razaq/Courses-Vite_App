import styles from "./InternPortal.module.css";
import { useReducer} from "react";
import {Link, useNavigate } from "react-router-dom";

const initialState={
internEmail: "",
internPassword: "",
internCheckbox: false,
loginmessage: "",
}

function reducer(state, action){
    switch(action.type){
    case 'InternEmail':
        return{
            ...state,
            internEmail: action.payload,
        }
    case 'InternPassword':
        return{
            ...state,
            internPassword: action.payload,
        }
     case 'InternCheckbox':
        return{
            ...state,
        }
    case 'LoginMessage':
        return{
            ...state,
            loginmessage: action.payload,
        }
    case 'ResetForm':
                return{
            ...initialState,
            loginmessage: state.loginmessage,
        }
        default: 
            return state;
    }
}

function InternPortal(){
 const navigate=useNavigate();
    const[{internEmail, internPassword, internCheckbox, loginmessage}, dispatch]=useReducer(reducer, initialState);

    const showMessage = (messageType,message) => {
    dispatch({ type: messageType, payload: message });
     dispatch({ type: "ResetForm" });
    setTimeout(() => {
      dispatch({ type: messageType, payload: "" });
      navigate("/")
    }, 3000);
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
       showMessage("LoginMessage", "You have been Successfully loged in");
    };


   return(
   <div className={styles.internPortal}>
    <div className={styles.internImg}>
        <img src="/src/assets/LoginImgs/login-img.png" alt="intern Img" />
    </div>
    <div className={styles.internRows}>
        <div className={styles.internForm} >
            <h4>Welcome to Internship Portal! 👋</h4>
            <p>Please sign-in to your account and start the adventure</p>
            <form onSubmit={handleSubmit}>
                <label>E-mail </label><br />
                <input className={styles.input} type="email" placeholder="abc@example.com" required value={internEmail} onChange={(e)=> dispatch({type: "InternEmail", payload: e.target.value})}/><br />
                <label>Password </label>
                <Link to="/forgot-password">Forgot Password?</Link><br />
                <input className={styles.input} type="password" placeholder="********" required value={internPassword} onChange={(e)=> dispatch({type: "InternPassword", payload: e.target.value})} /><br />
                <label><input type="checkbox"  value={internCheckbox} onChange={()=> dispatch({type: "InternCheckbox"})}/>Remember me</label><br />
                <button className={styles.btn} type="submit">Sign in</button><br />
            </form>
               <button className={styles.btn} type="submit"onClick={()=>navigate("/registration")}>Register</button><br />
            <div className={styles.loginMessage}><p>{loginmessage}</p></div>
            <hr />
        </div>
        <div className={styles.socialIcons}>
              <Link className={styles.facebook} to="https://web.facebook.com/ezitech?_rdc=1&_rdr"><i className="fi fi-brands-facebook"></i></Link>
              <Link className={styles.instagram} to="https://www.instagram.com/ezitechpk/"><i className="fi fi-brands-instagram"></i></Link>
              <Link className={styles.behance} to="https://www.behance.net/ezitech"><i className="fi fi-brands-behance"></i></Link>
              <Link className={styles.linkedIn} to="https://www.linkedin.com/company/eziline-technologies/"><i className="fi fi-brands-linkedin"></i></Link>
         </div>
    </div>
   </div>
   );
}
export default InternPortal