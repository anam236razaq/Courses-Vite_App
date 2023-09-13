import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar(){
   const location=useLocation();
   const isLinkActive=(path)=>{
    return location.pathname===path? `${styles.active}`: '';
   }
    return(
        <nav className={styles.navBar}> 
            <div className={styles.logo} >
                <Link to="/"><img src='/src/assets/HomeImgs/EZITECH-LOGO-1.png' alt='Ezitech' /></Link>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li><Link className={isLinkActive("/")} to ="/">Home</Link></li>
                    <li><Link className={isLinkActive("/about-us")} to ="/about-us" >About Us</Link></li>
                    <li><Link className={isLinkActive("/certification")} to ="/certification" >Certification</Link>
                        <div className={styles.subNav}>
                             <ul>
                                <li><Link to ="/free-courses">Free Courses</Link></li>
                                 <li><Link to ="/onsite-courses">Onsite Courses</Link></li>
                             </ul>
                        </div>
                        </li>
                     <li><Link className={isLinkActive("/internships")} to ="/internships" >Internships</Link>
                      <div className={styles.subNav}>
                             <ul>
                                <li><Link to ="/app-development-internship">App Development</Link></li>
                                 <li><Link to ="/digital-marketing-internship">Digital Marketing</Link></li>
                                 <li><Link to ="/electronic-commerce-internship">Electronic Commerce</Link></li>
                                 <li><Link to ="/graphic-designing-internship">Graphic Designing</Link></li>
                                 <li><Link to ="/machine-learning-internship">Machine Learning</Link></li>
                                 <li><Link to ="/web-designing-internship">Web Designing</Link></li>
                                 <li><Link to ="/web-development-internship">Web Development</Link></li>
                             </ul>
                        </div>
                        </li>
                     <li><Link className={isLinkActive("/ezi-updates")} to ="/ezi-updates" >Ezi Updates</Link>
                       <div className={styles.subNav}>
                             <ul>
                                <li><Link to ="/seminars">Seminars</Link></li>
                                 <li><Link to ="/news">News</Link></li>
                             </ul>
                        </div>
                        </li>
                     <li><Link className={isLinkActive("/user-account")} to ="/user-account" >Login</Link>
                       <div className={styles.subNav}>
                             <ul>
                                <li><Link to ="/intern-portal">Intern Portal</Link></li>
                                 <li><Link to ="/course-portal">Course Portal</Link></li>
                             </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <Link to="/search"><button className={styles.search}>
                <i className="fi fi-rr-search"></i>
            </button></Link>
        </nav>
    )
}
export default NavBar