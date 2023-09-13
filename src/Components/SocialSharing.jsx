import styles from "./SocialSharing.module.css";
import {Link} from "react-router-dom"
function SocialSharing(){
    return(
       <div className={styles.socialSharing}>
        <div className={styles.share}>
        <Link className={`${styles.facebook} ${styles.social}`} to="https://www.facebook.com" target="_blank">
            <i className="fi fi-brands-facebook"></i>
            <p>Share</p>
         </Link>
        <Link className={`${styles.twitter} ${styles.social}`} to="https://www.twitter.com" target="_blank">
            <i className="fi fi-brands-twitter"></i>
            <p>Tweet</p>
        </Link>
        <Link className={`${styles.pinterest} ${styles.social}`} to="https://www.pinterest.com" target="_blank">
            <i className="fi fi-brands-pinterest"></i>
            <p>Share</p>
        </Link>
        <Link className={`${styles.linkedIn} ${styles.social}`} to="https://www.linkedin.com" target="_blank">
            <i className="fi fi-brands-linkedin"></i>
            <p>Share</p>
        </Link>
        <Link className={`${styles.digg} ${styles.social}`} to="https://www.digg.com"  target="_blank">
            <i className="fi fi-brands-digg"></i>
            <p>Share</p>
        </Link>
        </div>
      </div>
    );
}
export default SocialSharing