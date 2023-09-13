import CopyRight from "../Components/CopyRight";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import styles from "./FreeCourses.module.css";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import {Link} from "react-router-dom";
import { useEffect } from "react";

function FreeCourses({courses, status, categoryData, instructorData, levelData, filterResult, filters}){
    useEffect(()=>{
    window.scrollTo(0,0);
 },[])
   return(
    <>
      <Header />
      <NavBar />
      <FreeCoursesHeader />
      <FreeCoursesData courses={courses} status= {status} categoryData={categoryData} instructorData={instructorData} levelData={levelData} filterResult={filterResult} filters={filters}/>
      <Footer courses={courses}/>
      <CopyRight />
      </>
   );
}
export default FreeCourses


function FreeCoursesHeader(){
return (
      <div className={styles.freeCourses}>
        <h1>Free Courses</h1>
        <h3>Free IT and Freelancing Courses in Rawalpindi</h3>
        <p>Ezitech Learning Institue is now providing variety of courses for newcomers and freshly graduated students. These courses are free of cost for the students. Whom they arnt be  able to pay their courses fee. These courses are also enough for you to build your career as a professional in any information technology field. Our organization is one of the best for offering free IT and Freelancing courses in Rawalpindi, Pkaistan. These free IT and Freelancing  courses will help you to  polish your skill in a specific filed. These courses are highly career and job oriented.</p>
      </div>
);

}

function FreeCoursesData({courses, status, categoryData, instructorData, levelData, filterResult, filters}){
  return(
      <div className={styles.freeCoursesData}>
          {status==="loading" && <Loader />}
          {status==="error" && <Error />}
          {status==="ready" &&(
            <>
            <div className={styles.filterData}>
               <FilterData categoryData={categoryData} instructorData={instructorData} levelData={levelData} filterResult={filterResult} />
           </div>
            <div className={styles.courseData}>
                <CourseData  courses={courses} filters={filters}/>
            </div> 
            </>
          )}
      </div>
  );
}

function FilterData({ categoryData, instructorData, levelData, filterResult}){
  return(
    <div className={styles.filter}>
       <div className={styles.filterCategory}>
         <h3>Category</h3>
         <div>
          {categoryData.map((category, index)=>{
            return <button
            className={styles.filterBtn}
             key={index}
            type="button" 
            name="category"
            value={category} onClick={()=>filterResult("category", category)}>{category}</button>})}
         </div>
       </div>
       <div className={styles.filterInstructor}>
         <h3>Instructor</h3>
         <div>
          {instructorData.map((instructor, index)=>{
            return <button
             className={styles.filterBtn}
             key={index}
            type="button" 
            name="instructor"
            value={instructor} onClick={()=>filterResult("instructor", instructor)}>{instructor}</button>})}
         </div>
       </div>
       <div className={styles.filterLevel}>
         <h3>Level</h3>
         <div>
          {levelData.map((level, index)=>{
            return <button
             className={styles.filterBtn}
             key={index}
            type="button" 
            name="level"
            value={level} onClick={()=>filterResult("level", level)}>{level}</button>})}
         </div>
       </div>
    </div>
  )
}

function CourseData({courses, filters}){
  const filteredCourses= courses.filter((course) => {
            const { category, instructor, level } = course;
             const {
               category: selectedCategory,
                instructor: selectedInstructor,
                  level: selectedLevel} = filters;
             return (
                    (selectedCategory === "all" || category === selectedCategory ) &&
                    (selectedInstructor === "all" || instructor === selectedInstructor) &&
                    (selectedLevel === "all" || level === selectedLevel) &&
                    course.Type === "Free"
                    );
                  });
              if (filteredCourses.length === 0) {
                   return <div className={styles.result}>No results found.</div>;
                  }
        return(
          <div  className={styles.courseCol}>
             {filteredCourses.map((course)=>(
                    <div className={styles.courseDetails} key={course.id}>
                      <div className={styles.courseImgs}>
                        <Link to={`/courses/${course.id}`}><img src={course.Img} alt={course.name}/></Link>
                        </div>
                      <div className={styles.courseCategory}>{course.category}</div>
                      <div className={styles.courseName}>{course.name}</div>
                      <hr />
                      <div className={styles.courseType}>{course.Type}</div>
                   </div>
               ))}
             </div>
  );}

