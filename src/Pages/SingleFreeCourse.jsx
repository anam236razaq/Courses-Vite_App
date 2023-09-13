import { useParams, Link } from "react-router-dom";
import styles from "./SingleFreeCourse.module.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

function SingleFreeCourse({courses, status}){
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
return(
     <>
     <Header />
     <NavBar />
     <SingleCourse courses={courses} status={status}/>
     <Footer courses={courses}/>
     <CopyRight />
     </>
);
}
export default SingleFreeCourse

function SingleCourse({courses, status}){
    const {courseId}=useParams();
    const course=courses.find(course=>course.id===courseId);

    if(!course){
        return (
        <div>{status==="loading" && <Loader />}</div>
        )
    }

    return(
       <>
        <div className={styles.singleCourse}>
            <div className={styles.description}>
            <div className={styles.descriptionName}>{course.name}</div>
            <div className={styles.descriptionText}>{course.description}</div>
            <div className={styles.descriptionRows}>
                <div className={styles.courseImg}>
                    <img src="/src/assets/CourseImgs/course-img20.jpeg" />
                    {course.instructor}
                </div>
                 <div className={styles.courseEnroll}>
                   <i className="fi fi-sr-circle-user"></i>
                    {course.enrolledStudents}
                </div>
                 <div className={styles.courseLectures}>
                   <i className="fi fi-sr-list"></i>
                    {course.Lectures}
                </div>
                 <div className={styles.courseTime}>
                   <i className="fi fi-rr-clock-three"></i>
                    {course.Time}
                </div>
            </div>
            </div>
        </div>
        <div className={styles.detailedDescription}>
            <div className={styles.descriptionTabsContainer}>
              <DescriptionTabs course={course} />
           </div>
            <div className={styles.descriptionBarContainer}>
              <DescriptionBar course={course} courses={courses} />
           </div>
        </div>
       </>
    );
}

function DescriptionTabs({course}){
    const [activeTab, setActiveTab]=useState(0);
    return(
         <div className={styles.descriptionTab}>
            <Tab num={0} activeTab={activeTab} onClick={setActiveTab} tabName="Description" />
            <Tab num={1} activeTab={activeTab} onClick={setActiveTab} tabName="Curriculum"/>
            <Tab num={2} activeTab={activeTab} onClick={setActiveTab} tabName="Reviews"/>
              {activeTab === 0 && <DescriptionTab course={course} />}
              {activeTab === 1 && <CurriculumTab course={course} />}
              {activeTab === 2 && <ReviewsTab />}
            </div>
    );
}

function Tab({num, activeTab, onClick, tabName}){
  return(
    <button className={`${styles.tabBtn} ${activeTab===num ? styles.active : ""}`} 
    onClick={()=>onClick(num)}>{tabName}</button>
  )
}

function DescriptionTab({course}){
    return(
            <div className={styles.tabs}>
                <div className={styles.desc}>
                      <h2>Description:</h2>
                      <p>{course.detailedDescription}</p>
                  </div>
                  <div className={styles.desc}>
                     <h2>{course.eligibiltyName}</h2>
                     <ul className={styles.eligibilityDescription}>
                     <li>{course.eligibilityDescription1}</li>
                      <li>{course.eligibilityDescription2}</li>
                      <li>{course.eligibilityDescription3}</li>
                      <li>{course.eligibilityDescription4}</li>
                      <li>{course.eligibilityDescription5}</li>
                      <li>{course.eligibilityDescription6}</li>
                      <li>{course.eligibilityDescription7}</li>
                     </ul>
                  </div>  
            </div>
    );
}

function CurriculumTab({course}){
    return(
     <div className={styles.tabs}>
        <div className={styles.desc}> 
            <h2>What the Course will teach you</h2>
            <p>{course.courseLearning}</p>
        </div>
          <div className={styles.desc}> 
            <h2>Course Topics:</h2>
            <ul className={styles.eligibilityDescription}>
                <li>{course.courseTopic1}</li>
                <li>{course.courseTopic2}</li>
                <li>{course.courseTopic3}</li>
                <li>{course.courseTopic4}</li>
                <li>{course.courseTopic5}</li>
                <li>{course.courseTopic6}</li>
                <li>{course.courseTopic7}</li>
                <li>{course.courseTopic8}</li>
                <li>{course.courseTopic9}</li>
                <li>{course.courseTopic10}</li>
            </ul>
        </div>
     </div>
    );
}

function ReviewsTab(){
    return(
     <div className={`${styles.reviews} ${styles.tabs}`}>
        <p>Be the first to add a review.</p>
        <p>Please, <Link to="/user-account">login</Link> to leave a review</p>
     </div>
    );
}

function DescriptionBar({course, courses}){
    return(
        <div className={styles.descriptionBar}>
                <div className={styles.descriptionImg}>
                    <img src={course.Img} alt={course.name} />
                </div>
                <Link to="/user-account"><button className={styles.descriptionBtn}>Enroll Course</button></Link>
                <div className={styles.descriptionDetails}>
                    <div>
                        <i className="fi fi-rr-exclamation"></i>
                        <p>30-Day Money-Back Guarantee</p>
                    </div>
                    <h1>Includes</h1>
                    <div>
                      <i className="fi fi-rr-clock-five"></i>
                      <p>Full lifetime access</p>
                    </div>
                    <div>
                        <i className="fi fi-rr-laptop-mobile"></i>
                        <p>Access on mobile and TV</p>
                    </div>
                </div>
                <div className={styles.descriptionCourses} >
                    {courses
                     .filter((course) => course.category === "Amazon").map((course) => (
                       <div className={styles.courses} key={course.id}>
                        <Link className={styles.courseData} to={`/courses/${course.id}`}>
                            <div className={styles.barImg}>
                                <img src={course.Img} alt={course.name} />
                           </div>
                            <div className={styles.courseName}>
                                <span>{course.name}</span>
                                <p className={styles.coursePrice}>{course.Price}</p>
                                <p>By {course.instructor}</p>
                            </div>
                        </Link>
                    </div>
                   ))}
               </div>
               <div className={styles.workingHours}>
                  <h1>Working hours</h1>
                  <div className={styles.hours}>
                    <p>Monday</p>
                    <p>9:30 am - 6.00 pm</p>
                  </div>
                   <div className={styles.hours}>
                    <p>Tuesday</p>
                    <p>9:30 am - 6.00 pm</p>
                  </div>
                   <div className={styles.hours}>
                    <p>Wednesday</p>
                    <p>9:30 am - 6.00 pm</p>
                  </div>
                   <div className={styles.hours}>
                    <p>Thursday</p>
                    <p>9:30 am - 6.00 pm</p>
                  </div>
                   <div className={styles.hours}>
                    <p>Friday</p>
                    <p>9:30 am - 6.00 pm</p>
                  </div>
                   <div className={styles.hours}>
                    <p>Saturday</p>
                    <p className={styles.close}>Closed</p>
                  </div>
                    <div className={styles.hours}>
                    <p>Sunday</p>
                    <p  className={styles.close}>Closed</p>
                  </div>
               </div>
            </div>
    );
}
