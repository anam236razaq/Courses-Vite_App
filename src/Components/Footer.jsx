import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
function Footer({courses}){
    return (
       <div className={styles.footer}>
        <div className={styles.column1}>
            <h2>About</h2>
            <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
        </div>
        <div className={styles.column2}>
            <h2>Popular Courses</h2>
             <div>
                    {courses.filter((course) => course.instructor === "Ayesha Shah").map((course) => (
                       <div className={styles.courses} key={course.id}>
                        <Link className={styles.courseData} to={`/courses/${course.id}`}>
                            <div className={styles.barImg}>
                                <img src={course.Img} alt={course.name} />
                           </div>
                            <div className={styles.courseName}>
                                <span>{course.name}</span>
                                <p>By {course.instructor}</p>
                            </div>
                        </Link>
                    </div>
                   ))}
               </div>
        </div>
        <div className={styles.column3}>
            <h2>Pages</h2>
            <ul>
                <li><Link to="/contact-us">Contact us</Link></li>
                <li>Shop</li>
                <li>Internship</li>
                <li>CodeLab</li>
            </ul>
        </div>
        <div className={styles.column4}>
            <h2>Contact</h2>
           <div className={styles.contactCol}>
             <i className="fi fi-sr-marker"></i>
             <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
           </div>
             <div className={styles.contactCol}>
            <i className="fi fi-sr-phone-call"></i>
             <p>+923455555396</p>
           </div>
             <div className={styles.contactCol}>
           <i className="fi fi-sr-envelope"></i>
             <p>ibrahim@eziline.com</p>
           </div>
        </div>

       </div>
    );
}

export default Footer