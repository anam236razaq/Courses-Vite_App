import {motion} from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import styles from "./Home.module.css";

const textValues=["Web Design", "Social Skills", "Marketing", "Programming"];
const initialState={
textIndex: 0,
text: textValues[0],
}

function reducer(state, action){
    switch(action.type){
    case 'TextTyping':
        return{
            textIndex: (state.textIndex+1)%textValues.length,
            text: textValues[(state.textIndex+1)%textValues.length]
        }
        default: 
            return state;
    }
}
function Home({courses ,filters}){
    const[{text, textIndex}, dispatch]=useReducer(reducer, initialState);
    useEffect(()=>{
    window.scrollTo(0,0);
 },[])
    return(
    <>
    <Header />
    <NavBar />
    <HeroSection text={text} textIndex={textIndex} dispatch={dispatch} />
    <ServiceAward />
    <WorkScenario/>
    <Trends />
    <RecommendedCourses courses={courses} filters={filters}/>
    <RecentCourses courses={courses} filters={filters}/>
    <HomeImgs />
    <Footer courses={courses}/>
    <CopyRight />
    </>
    );
}
export default Home

function HeroSection({text, dispatch}){
    useEffect(()=>{
        const interval=setInterval(()=>{
            dispatch({type: 'TextTyping'});
        }, 4000)
        return(()=>{
            clearInterval(interval);
        })
        }, [dispatch])
    return(
      <div className={styles.heroSection}>
        <div className={styles.hero}>
          <h1>Learn the fundamentals with our <br/> Experts in <motion.span initial={{translateX: 0}} animate={{translateX: 100}} transition={{duration: "0.1", delay: "0"}}>{text}</motion.span></h1>
          <h3>Utilize Effective Training to Reach Your Potential</h3>
          <div className={styles.search}>
            <input type="text" placeholder="Search courses..." />
            <i className="fi fi-rr-search"></i>
          </div>
        </div>
      </div>
    );
}

function ServiceAward(){
    return(
            <div className={styles.award}>
                <h1>Best IT Services Award 2023</h1>
                <div className={styles.awardContainer}>
                    <div className={styles.awardImg}>
                    <img src="/src/assets/HomeImgs/home-img1.png" alt="Ezitech Service Award" />
                    </div>
                    <div className={styles.awardContent}>
                        <p><span>Ezitech Is affiliated With</span> <Link to="https://www.eziline.com/">Eziline Software House</Link>. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.</p><br />
                        <p>This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. <span>It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction</span>. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.</p><br/>
                        <p><span>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</span>, received the Best Services Award in the IT sector from the <span>President of Pakistan, Dr. Arif Alvi</span>, in recognition of his remarkable contributions to the country’s technology industry.</p>
                        <Link to="https://ezitech.org/wp-content/uploads/2023/05/Eziline-Profile-2.0.pdf"><button>Eziline Profile</button></Link>
                    </div>
                </div>
            </div>
    );
}

function WorkScenario(){
    return(
        <div className={styles.workScenario}>
            <h6>How it works?</h6>
            <div className={styles.workContainer}>
                <div className={styles.workCol}>
                    <img src="/src/assets/HomeImgs/home-img2.png" alt="Work scenario"/>
                    <span>Sign up</span>
                    <p>Enter your name, email, and contact details to <br /> get started. It truly is that simple!</p>
                </div>
                 <div className={styles.workCol}>
                    <img src="/src/assets/HomeImgs/home-img3.png" alt="Work scenario"/>
                    <span>Select course</span>
                    <p>Browse our extensive and ever-expanding variety<br /> of courses for professional development.</p>
                </div>
                 <div className={styles.workCol}>
                    <img src="/src/assets/HomeImgs/home-img4.png" alt="Work scenario"/>
                    <span>Start Learning</span>
                    <p>Do the tasks, and your teacher will evaluate them<br /> before providing you with thorough</p>
                </div>
            </div>
        </div>
    );
}

function RecommendedCourses({courses, filters}){
    const[currentPage, setCurrentPage]=useState(1);
    const itemsPerPage=5;
    
    /********Filter Courses**********/
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
        
        /**************Pagination **********/
        const totalPages=Math.ceil(filteredCourses.length/itemsPerPage);
        const nextPage=()=>{
            if(currentPage<totalPages){
                setCurrentPage(currentPage+1);
            }
        }

        const prevPage=()=>{
            if(currentPage>1){
                setCurrentPage(currentPage-1);
            }
        }
         
    return(
      <div className={styles.recomCourses}>
        <h1>Recommended Courses</h1>
           <div  className={styles.courseCol}>
             {filteredCourses.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).map((course)=>(
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
             <div className={styles.pagination}>
                <button className={styles.paginationBtn} onClick={prevPage} disabled={currentPage===1}>Prev</button>
                <span>{currentPage} of {totalPages}</span>
                <button className={styles.paginationBtn} onClick={nextPage} disabled={currentPage===totalPages}>Next</button>
             </div>
      </div>
    );
}

function RecentCourses({courses, filters}){
    const [sortingOrder, setSortingOrder]=useState('oldest');
    const itemsPerLoad=5
    const [displayedCourses, setDisplayedCourses]=useState(itemsPerLoad);

    /******Filter Courses *********/
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

       /*******Sorting Courses*******/
        const sortedCourses=[...filteredCourses];
        if(sortingOrder==="oldest"){
            sortedCourses.sort((a,b)=>new Date(a.Date)-new Date(b.Date))
        }else   if(sortingOrder==="newest"){
            sortedCourses.sort((a,b)=>new Date(b.Date)-new Date(a.Date))
        }

        /*******Load More Button ******/
        const loadMoreCourses=()=>{
            const newDisplayedCourses=displayedCourses+itemsPerLoad;
            setDisplayedCourses(newDisplayedCourses)
        }
 return(
      <div className={styles.recentCourses}>
        <div className={styles.sortPortion}>
        <h1>Recent Courses</h1>
        <div className={styles.sorting}>
            <select onChange={(e)=>setSortingOrder(e.target.value)}>
                <option value="oldest">Release date(Oldest first)</option>
                <option value="newest">Release date(Newest first)</option>
            </select>
        </div>
        </div>
           <div  className={styles.courseCol}>
             {sortedCourses.slice(0, displayedCourses).map((course)=>(
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
             <div className={styles.loadBtn}>
                {displayedCourses<sortedCourses.length &&(
                    <button onClick={loadMoreCourses}>Load More</button>
                )}
             </div>
      </div>
 );
}

function Trends(){
    return(
      <div className={styles.trends} >
          <h1>What new trends and technology<br /> will you discover?</h1>
          <p>Today technology is developing quickly, and our new technological trends are enabling and advancing, speeding up the pace of development.</p>
          <div className={styles.trendsCategories}>
              <Link className={styles.trendsCol} to="/free-courses">
                <div>
                <img src="/src/assets/CourseImgs/course-trend1.png" alt="TrendImgs" />
                <h5>ML & AI</h5>
              </div>
              </Link>
               <Link className={styles.trendsCol}to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend2.png" alt="TrendImgs" />
                <h5>Block Chain</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/onsite-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend3.png" alt="TrendImgs" />
                <h5>Amazon</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend4.png" alt="TrendImgs" />
                <h5>Cybersecurity</h5>
              </div></Link>
               <Link  className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend5.png" alt="TrendImgs" />
                <h5>Development</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend6.png" alt="TrendImgs" />
                <h5>Designing</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend7.png" alt="TrendImgs" />
                <h5>Gaming</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend8.png" alt="TrendImgs" />
                <h5>Architecture</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/onsite-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend9.png" alt="TrendImgs" />
                <h5>IOS</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend10.png" alt="TrendImgs" />
                <h5>Marketing</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend11.png" alt="TrendImgs" />
                <h5>3D</h5>
              </div></Link>
               <Link className={styles.trendsCol} to="/free-courses">
               <div>
                <img src="/src/assets/CourseImgs/course-trend2.png" alt="TrendImgs" />
                <h5>Animation</h5>
              </div></Link>
          </div>
      </div>
    );
}

function HomeImgs(){
    return(
       <>
          <div className={styles.homeImg1}>
            <div className={styles.img1}>
              <img src="/src/assets/HomeImgs/home-img5.png" alt="Home Imgs" />
            </div>
            <div className={styles.homeContent}>
                <h1>Learning <span>anytime</span><br />from anywhere</h1>
                <p>Increase the mobility level with Eziline Technologies LMS App. Take Your courses in your pocket
                    and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS App.
                </p>
                <img src="/src/assets/HomeImgs/home-img7.png" alt="Home Imgs" />
                 <img src="/src/assets/HomeImgs/home-img8.png" alt="Home Imgs" />
            </div>
          </div>
          <div className={styles.homeImg2}>
             <h1>It’s time to <span>start</span> investing in <br />yourself</h1>
             <img src="/src/assets/HomeImgs/home-img6.png" alt="Home Imgs" />
          </div>
       </>
    );
}