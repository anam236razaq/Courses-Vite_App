import {Link} from 'react-router-dom';
import styles from './Header.module.css'

function Header(){
return(
  <div className={styles.header}>
    <div className={styles.address}>
      <div>
        <i className="fi fi-sr-phone-flip"></i>
        <p>+923455555396</p>
      </div>
       <div>
       <i className="fi fi-sr-marker"></i>
        <p>Office #304-B Amna Plaza, Rawalpindi, Pakistan</p>
      </div>
       <div>
       <i className="fi fi-rr-clock-five"></i>
        <p>Mon - Fri 8.00 - 20.00</p>
      </div>
    </div>
    <div className={styles.socialLinks}>
         <Link to="https://web.facebook.com/ezitech?_rdc=1&_rdr"><i className="fi fi-brands-facebook"></i></Link>
         <Link to="https://www.instagram.com/ezitechpk/"><i className="fi fi-brands-instagram"></i></Link>
         <Link to="https://www.behance.net/ezitech"><i className="fi fi-brands-behance"></i></Link>
         <Link to="https://www.linkedin.com/company/eziline-technologies/"><i className="fi fi-brands-linkedin"></i></Link>
         <Link to="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg"><i className="fi fi-brands-youtube"></i></Link>

    </div>
    <div className={styles.login}>
        <Link  className={styles.loginAccount} to="/user-account">
             <i className="fi fi-sr-user"></i>
             <p>Login</p>
        </Link>
         <Link to="/user-account">
             <p>Register</p>
        </Link>
    </div>
  </div>
)
}
export default Header