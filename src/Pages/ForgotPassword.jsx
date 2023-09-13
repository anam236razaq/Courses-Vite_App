import styles from "./ForgotPassword.module.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState={
inputEmail: "",
submitMessage: "",
}

function reducer(state, action){
    switch(action.type){
    case 'InputEmail':
        return{
            ...state,
            inputEmail: action.payload,
        }
    case 'SubmitMessage':
        return{
            ...state,
            submitMessage: action.payload,
        }
    case 'ResetForm':
                return{
            inputEmail: "",
            submitMessage: state.submitMessage,
        }
        default: 
            return state;
    }
}

function ForgotPassword(){
    const[{inputEmail, submitMessage}, dispatch]=useReducer(reducer, initialState);

    const showMessage = (message) => {
    dispatch({ type: "SubmitMessage", payload: message });
     dispatch({ type: "ResetForm" });
    setTimeout(() => {
      dispatch({ type: "SubmitMessage", payload: "" });
    }, 3000);
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
       showMessage("We have Sent you an Email. Kindly Check your Mailbox");
    };
    return(
        <div className={styles.forgotPassword}>
            <div className={styles.forgotImg}>
                <img src="/src/assets/LoginImgs/login-img2.png" alt="intern Img" /> 
            </div>
            <div className={styles.forgotForm}>
                <h4>Welcome to Internship Portal! 👋</h4>
                <p>Please sign-in to your account and start the adventure</p>
                <form onSubmit={handleSubmit}>
                    <label>E-mail </label><br />
                    <input className={styles.input} type="email" placeholder="abc@example.com" required value={inputEmail} onChange={(e)=> dispatch({type: "InputEmail", payload: e.target.value})}/><br />
                     <button className={styles.btn} type="submit">Submit</button><br />
                     <Link to="/intern-portal">&lt; Back to Login</Link>
               </form>
               <div className={styles.submitMessage}><p>{submitMessage}</p></div>
            </div>
        </div>
    )

}
export default ForgotPassword