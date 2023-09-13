import styles from "./CopyRight.module.css";
import { Link } from "react-router-dom";
function CopyRight(){
    return(
    <div className={styles.copyRight} >
      <p >
        Copyright  &copy; {new Date().getFullYear()} Eziline technologies | Design & Develop by <Link to="https://eziline.com/.well-known/captcha/?r=%2F" target="_blank">Eziline Software House</Link>
      </p>
      <div className={styles.socialIcons}>
         <Link to="https://web.facebook.com/ezitech?_rdc=1&_rdr"><i className="fi fi-brands-facebook"></i></Link>
         <Link to="https://www.behance.net/ezitech"><i className="fi fi-brands-behance"></i></Link>
         <Link to="https://www.linkedin.com/company/eziline-technologies/"><i className="fi fi-brands-linkedin"></i></Link>
      </div>
    </div>
    );
}
export default CopyRight