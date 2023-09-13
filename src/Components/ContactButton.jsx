import {motion} from 'framer-motion'
import styles from "./ContactButton.module.css";
import {Link} from "react-router-dom";

function ContactButton(){
   return(
    <div className={styles.contactButton}>
        <div className={styles.contactBtn}>
            <p>READY TO GET STARTED?</p>
            <h1>Are you ready</h1>
            <h2>Let’s Make Something Amazing Together</h2>
            <motion.button
             whileHover={{translateY:-8}}
             whileTap={{translateY: -5}}
            className={styles.button}><Link to="https://api.whatsapp.com/send?phone=923455555396">Get Started</Link></motion.button>
        </div>
        <div className={styles.contactImg}>
            <img src="/src/assets/ContactImgs/contact-img.png" alt="ContactUs" />
        </div>
    </div>
   )
}
export default ContactButton