import CopyRight from "../Components/CopyRight";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import styles from "./OnsiteCourses.module.css";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import {Link} from "react-router-dom"
import { useEffect } from "react";

function OnsiteCourses({courses, status, categoryData, instructorData, levelData, filterResult, filters}){
    useEffect(()=>{
    window.scrollTo(0,0);
 },[])
   return(
    <>
      <Header />
      <NavBar />
      <OnsiteCourseHeader />
      <OnsiteCoursesData courses={courses} status= {status} categoryData={categoryData} instructorData={instructorData} levelData={levelData} filterResult={filterResult} filters={filters}/>
      <Footer courses={courses}/>
      <CopyRight />
      </>
   );
}
export default OnsiteCourses


function OnsiteCourseHeader(){
return (
      <div className={styles.onsiteCourses}>
        <h1>Onsite Courses</h1>
        <h3>Onsite Courses for IT and Freelancing</h3>
        <p>Ezitech Learning Institute is helping you guys to find the best onsite courses for IT and Freelancing to fit your needs. Our organization will help you to enhance you career as a professional through these courses. You have alot of options to choose as a beginner or newcomer in IT field. Some of  most recommended onsite courses from our organziation are The Complete Wordpress Website course with SEO, Mongo DB, Express, React, and NodeJS are covered in MERN stack course, Virtual Assistante Training, a Complete Guide: Work From Home Online Arbitrage  Mastermind 2.0 [Resell Products from Home] and many more.</p>
      </div>
);

}

function OnsiteCoursesData({courses, status, categoryData, instructorData, levelData, filterResult, filters}){
  return(
      <div className={styles.OnsiteCoursesData}>
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
                    course.Type === "Paid"
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
                      <div className={styles.courseType}>{course.Price}</div>
                   </div>
               ))}
             </div>
  );}
