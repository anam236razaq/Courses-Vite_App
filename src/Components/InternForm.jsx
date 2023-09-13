import React from "react";
import styles from "./InternForm.module.css";
import { useReducer } from "react";

const initialState={
inputName: "",
inputEmail: "",
inputNumber: "",
inputAddress: "",
inputQualification: "",
inputInternship: "",
inputWeakness: "",
inputProjects: "",
inputAbilities: "",
inputExpectations: "",
selectOption1: "Punjab",
selectOption2: "Yes",
selectOption3: "HTML/CSS",
message: "",
}

function reducer(state, action){
    switch(action.type){
    case 'InputName':
        return{
            ...state,
            inputName: action.payload,
        }
    case 'InputEmail':
        return{
            ...state,
            inputEmail: action.payload,
        }
    case 'InputNumber':
        return{
            ...state,
            inputNumber: action.payload,
        }
    case 'InputAddress':
        return{
            ...state,
            inputAddress: action.payload,
        }
    case 'InputQualification':
        return{
            ...state,
            inputQualification: action.payload,
        }
    case 'InputInternship':
        return{
            ...state,
            inputInternship: action.payload,
        }
    case 'InputWeakness':
        return{
            ...state,
            inputWeakness: action.payload,
        }
    case 'InputProjects':
        return{
            ...state,
            inputProjects: action.payload,
        }
    case 'InputAbilities':
        return{
            ...state,
            inputAbilities: action.payload,
        }
    case 'InputExpectations':
        return{
            ...state,
            inputExpectations: action.payload,
        }
    case 'SelectedOption1':
        return{
            ...state,
            selectOption1: action.payload,
        }
    case 'SelectedOption2':
        return{
            ...state,
            selectOption2: action.payload,
        }
    case 'SelectedOption3':
        return{
            ...state,
            selectOption3: action.payload,
        }
    case 'Message':
        return{
            ...state,
            message: action.payload,
        }
    case 'ResetInternForm':
                return{
            ...initialState,
            message: state.message
        }
        default: 
            return state;
    }
}

function InternForm(props, ref){
    const[{inputName, inputEmail, inputAddress, inputAbilities, inputExpectations, inputInternship, inputNumber, inputProjects, inputQualification,inputWeakness, selectOption1, selectOption2, selectOption3, message}, dispatch]=useReducer(reducer, initialState);

    const showMessage = (message) => {
    dispatch({ type: "Message", payload: message });
     dispatch({ type: "ResetInternForm" });
    setTimeout(() => {
      dispatch({ type: "Message", payload: "" });
    }, 3000);
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
        showMessage("Thank you for submitting the form");
    };

    return(
        <div ref={ref} className={styles.internForm}>
            <h1>Internship Form</h1>
            <h6>Please Fill out all required fields</h6>
            <p>&quot;*&quot; indicates required fields</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.details}>
                <input type="text" placeholder="Full name" required value={inputName} onChange={(e)=> dispatch({type: "InputName", payload: e.target.value})} />
                <input type="text" placeholder="Your Email" required value={inputEmail} onChange={(e)=> dispatch({type: "InputEmail", payload: e.target.value})}/>
                <input type="text" placeholder="Phone number" required value={inputNumber} onChange={(e)=> dispatch({type: "InputNumber", payload: e.target.value})} />
                </div>
                <div className={styles.selection}>
                <input type="text" placeholder="Complete Address" required  value={inputAddress} onChange={(e)=> dispatch({type: "InputAddress", payload: e.target.value})}/>
                <select value={selectOption1} onChange={(e)=>dispatch({type: 'SelectedOption1', payload: e.target.value})}>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>Balochistan</option>
                    <option>Khyber Pakhtunkhwa</option>
                </select>
                <input type="text" placeholder="Current Qualification"  value={inputQualification} onChange={(e)=> dispatch({type: "InputQualification", payload: e.target.value})}/>
                <label>Are your applying for Internship from University ?*</label>
                <select value={selectOption2} onChange={(e)=>dispatch({type: 'SelectedOption2', payload: e.target.value})}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <label>In Which Technology you want to do Internship?*</label>
                <select value={selectOption3} onChange={(e)=>dispatch({type: 'SelectedOption3', payload: e.target.value})}>
                    <option>HTML/CSS</option>
                    <option>Python</option>
                    <option>Machine Learning</option>
                    <option>Graphic Designing</option>
                    <option>Video Editing</option>
                    <option>Wordpress</option>
                    <option>Web Development</option>
                    <option>Others</option>
                </select>
                </div>
                <div className={styles.textarea1}>
                    <textarea placeholder="Why you are Applying for Internship?" value={inputInternship} onChange={(e)=> dispatch({type: "InputInternship", payload: e.target.value})}/>
                    <textarea placeholder="What is your Weakness?" value={inputWeakness} onChange={(e)=> dispatch({type: "InputWeakness", payload: e.target.value})}/>
                    <textarea placeholder="Did you done any Project Before, Elaborate its Features and Titles" value={inputProjects} onChange={(e)=> dispatch({type: "InputProjects", payload: e.target.value})} />
                </div>
                <div className={styles.textarea2}>
                     <textarea placeholder="Tell your Ability to Work Under Pressure" value={inputAbilities} onChange={(e)=> dispatch({type: "InputAbilities", payload: e.target.value})}/>
                    <textarea placeholder="What are your Expectations from Internships?" value={inputExpectations} onChange={(e)=> dispatch({type: "InputExpectations", payload: e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
            </form>
           <div><p>{message}</p></div>
        </div>
    )
}
const ForwardedInternForm=React.forwardRef(InternForm);
export default ForwardedInternForm;