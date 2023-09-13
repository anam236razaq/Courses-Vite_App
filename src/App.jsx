import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs';
import Certification from './Pages/Certification';
import Internships from './Pages/Internships';
import ContactUs from "./Pages/ContactUs";
import SimplePage from "./Pages/SimplePage";
import InternPortal from "./Pages/InternPortal";
import ForgotPassword from "./Pages/ForgotPassword"
import Registration from "./Pages/Registration";
import FreeCourses from "./Pages/FreeCourses";
import OnsiteCourses from "./Pages/OnsiteCourses";
import SingleFreeCourse from "./Pages/SingleFreeCourse";
import Search from "./Components/Search";
import { useEffect, useReducer } from "react";

const initialState={
  courses: [],
  status: "loading",
  filters:{
    category: "all",
    instructor: "all",
    level: "all",
  }
}


function reducer(state, action){
 
  switch(action.type){
    case "DataReceived":
      return{
        ...state,
        courses: action.payload,
        status: "ready",
      };
    case "DataFailed":
      return{
        ...state,
        status: "error",
      }
    case "UpDateFilters":
      return {
        ...state,
        filters: action.payload
      };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ courses, status, filters }, dispatch]=useReducer(reducer, initialState);

 //For fetching all Courses
  useEffect(function(){
    async function FetchingCourses(){
      try{const res=await fetch("http://localhost:9000/courses");
      const data=await res.json();
      dispatch({type: "DataReceived", payload: data})
    }catch(err){
      dispatch({type: "DataFailed"})
    }
  }
    FetchingCourses();
  },[])

  //For Fetching Unique Data like Categories, Instructors
  const getUniqueData=(data, property)=>{
    const uniqueData= [...new Set(data.map((course)=>course[property]))]
    return[ ...uniqueData];
  }
  const categoryData= getUniqueData(courses, "category");
  const instructorData= getUniqueData(courses, "instructor");
  const levelData= getUniqueData(courses, "level");

   // Filter the data based on the selected category
const filterResult = (filterType, value) => {
  const newFilters={...filters}
  switch (filterType) {
    case "category":
      newFilters.category=value;
      break;
    case "instructor":
      newFilters.instructor=value
      break;
    case "level":
      newFilters.level=value
      break;
    default:
      break;
  }
  dispatch({ type: "UpDateFilters", payload: newFilters });
};
  
  return (
    <Router>
      <Routes>
        <Route exact index element={<Home courses={courses} filters={filters}/>} />
        <Route exact path="/user-account" element={<Login courses={courses}/>} />
        <Route exact path="/course-portal" element={<Login courses={courses}/>} />
        <Route exact path="/intern-portal" element={<InternPortal courses={courses}/>} />
        <Route exact path="/forgot-password" element={<ForgotPassword courses={courses}/>} />
        <Route exact path="/registration" element={<Registration courses={courses}/>} />
        <Route exact path="/about-us" element={<AboutUs courses={courses}/>} />
         <Route exact path="/search" element={<Search courses={courses}/>} />
        <Route exact path="/certification" element={<Certification courses={courses}/>} />
        <Route exact path="/free-courses" element={<FreeCourses courses={courses} status={status} categoryData={categoryData} instructorData={instructorData} levelData={levelData} filterResult={filterResult} filters={filters}/>} />
        <Route exact path="/courses/:courseId" element={<SingleFreeCourse courses={courses} status={status}/>} />
        <Route exact path="/onsite-courses" element={<OnsiteCourses courses={courses} status={status} categoryData={categoryData} instructorData={instructorData} levelData={levelData} filterResult={filterResult} filters={filters}/>} />
        <Route exact path="/internships" element={<Internships courses={courses}/>} />
        <Route exact path="/ezi-updates" element={<SimplePage courses={courses}/>} />
        <Route exact path="/contact-us" element={<ContactUs courses={courses}/>} />
        <Route exact path="/seminars" element={<SimplePage courses={courses}/>} />
        <Route exact path="/news" element={<SimplePage courses={courses}/>} />
        <Route exact path="/app-development-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/digital-marketing-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/electronic-commerce-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/graphic-designing-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/machine-learning-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/web-designing-internship" element={<SimplePage courses={courses}/>} />
        <Route exact path="/web-development-internship" element={<SimplePage courses={courses}/>} />
      </Routes>
    </Router>
  )
  
}

export default App
