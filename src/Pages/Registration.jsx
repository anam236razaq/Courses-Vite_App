import { useNavigate } from "react-router-dom"
import styles from "./Registration.module.css"
import { useReducer } from "react"

const initialState={
inputName: "",
inputEmail: "",
inputNumber: "",
inputCNIC: "",
inputDate: "",
inputDegree: "",
inputBirthDate: "",
selectOption1: "Air University",
selectOption2: "HTML/CSS",
selectOption3: "1 Months",
selectOption4: "Male",
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
    case 'InputDate':
        return{
            ...state,
            inputDate: action.payload,
        }
    case 'InputDegree':
        return{
            ...state,
            inputDegree: action.payload,
        }
    case 'InputBirthDate':
        return{
            ...state,
            inputBirthDate: action.payload,
        }
    case 'InputCNIC':
        return{
            ...state,
            inputCNIC: action.payload,
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
    case 'SelectedOption4':
        return{
            ...state,
            selectOption4: action.payload,
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
function Registration(){
    const navigate=useNavigate();
      const[{inputName, inputEmail, inputDate, inputDegree, inputBirthDate, inputCNIC, inputNumber, selectOption1, selectOption2, selectOption3, selectOption4, message}, dispatch]=useReducer(reducer, initialState);

    const showMessage = (message) => {
    dispatch({ type: "Message", payload: message });
     dispatch({ type: "ResetInternForm" });
    setTimeout(() => {
        dispatch({ type: "Message", payload: "" });
        navigate("/");
    }, 3000);
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
        showMessage("Congratulations! You have been Successfully Registered");
    };
    return(
<div className={styles.registration}>
        <img src='/src/assets/HomeImgs/EZITECH-LOGO-1.png' alt='Ezitech' />
         <h4>Welcome to Ezitech Institute Registration Page 🚀</h4>
         <div className={styles.registrationForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.regCol}>
                    <div className={styles.regCol1}>
                        <label>Name</label>
                        <input type="text" placeholder="Name" required value={inputName} onChange={(e)=> dispatch({type: "InputName", payload: e.target.value})}/>
                    </div>
                    <div className={styles.regCol2}>
                        <label>Email</label>
                        <input type="email" placeholder="abc@example.com" required value={inputEmail} onChange={(e)=> dispatch({type: "InputEmail", payload: e.target.value})}/>
                    </div>
                </div>
                 <div className={styles.regCol}>
                     <div className={styles.regCol1}>
                        <label>Cell</label>
                        <input type="text" placeholder="03*********" required value={inputNumber} onChange={(e)=> dispatch({type: "InputNumber", payload: e.target.value})}/>
                    </div>
                     <div className={styles.regCol2}>
                        <label>Join Date</label>
                        <input type="date" placeholder="mm/dd/yyyy" required value={inputDate} onChange={(e)=> dispatch({type: "InputDate", payload: e.target.value})}/>
                    </div>
                </div>
                 <div className={styles.regCol}>
                    <div className={styles.regCol1}>
                        <label>CNIC</label>
                        <input type="text" required value={inputCNIC} onChange={(e)=> dispatch({type: "InputCNIC", payload: e.target.value})}/>
                    </div>
                    <div className={styles.regCol2}>
                        <label>Birth Date</label>
                        <input type="date" placeholder="mm/dd/yyyy" required value={inputBirthDate} onChange={(e)=> dispatch({type: "InputBirthDate", payload: e.target.value})}/>
                    </div>
                </div>
                 <div className={styles.regCol}>
                      <div className={styles.regCol1}>
                        <label>University</label>
                        <select value={selectOption1} onChange={(e)=>dispatch({type: 'SelectedOption1', payload: e.target.value})}>
                            <option>Air University</option>
                            <option>Bahria University</option>
                            <option>University of Sargodha</option>
                            <option>Punjab University</option>
                            <option>Quiad-e-Azam University</option>
                            <option>Ripha University</option>
                            <option>NUMS</option>
                            <option>NUML</option>
                            <option>LUMS</option>
                            <option>PIEAS</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className={styles.regCol2}>
                        <label>Latest Degree</label>
                        <input type="text" required value={inputDegree} onChange={(e)=> dispatch({type: "InputDegree", payload: e.target.value})}/>
                    </div>
                </div>
                <div className={styles.regCol}>
                     <div className={styles.regCol1}>
                        <label>Technology</label>
                        <select value={selectOption2} onChange={(e)=>dispatch({type: 'SelectedOption2', payload: e.target.value})}>
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
                    <div className={styles.regCol2}>
                        <label>Duration</label>
                        <select value={selectOption3} onChange={(e)=>dispatch({type: 'SelectedOption3', payload: e.target.value})}>
                            <option>1 Months</option>
                            <option>2 Months</option>
                            <option>3 Months</option>
                        </select>
                    </div>
                </div>
                 <div className={styles.regCol}>
                     <div className={styles.regCol1}>
                            <label>Gender</label>
                            <select value={selectOption4} onChange={(e)=>dispatch({type: 'SelectedOption4', payload: e.target.value})}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                    </div>
                </div>
                <hr />
                <button className={styles.btn} >Sign Up</button>
            </form>
            <div className={styles.registrationMessage}><p>{message}</p></div>
         </div>
      </div>
    );
}
export default Registration