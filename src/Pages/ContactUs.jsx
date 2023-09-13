import { useEffect } from "react";
import {Link} from "react-router-dom"
import CopyRight from "../Components/CopyRight";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SocialSharing from "../Components/SocialSharing";
import ContactButton from "../Components/ContactButton";
import styles from "./Contactus.module.css";

function ContactUs({courses}){
     useEffect(()=>{
    window.scrollTo(0,0);
 },[])
    return(
        <>
        <Header />
        <NavBar />
        <ContactDetails />
        <ContactButton />
        <SocialSharing />
        <Footer courses={courses}/>
        <CopyRight />
        </>
    )
}
export default ContactUs

function ContactDetails(){
return(
<div className={styles.contact}>
    <div className={styles.contactDetails}>
        <h1>Say Hello 👋</h1>
        <div className={styles.contactContent}>
        <p>If you guys are scrolling down our site and if you  are having few quries in your mind about our servives, courses and website. Please feel free to contact ezitech institute anytime. We are willing  happy to help you about any doubt you have in your mind. Ezitech Learning Institute are greate platform for a newcomers, so its is our responsibility to clear all the doubts you guys are having about anything and we are hoping that our website will help you to ehnace your career in a better way and gives you great opportunity to learn more about your skills Thank You.</p>
        </div>
        <div className={styles.contactColumns}>
            <div className={styles.contactCol1}>
            <div>
                <h4>Toll Free</h4>
                <Link to="">+923455555396</Link>
            </div>
            <div>
                <h4>Address</h4>
                <p>Office #304-B Amna Plaza, near Radio
                    Pakistan, Rawalpindi, Punjab 46000</p>
            </div>
            <div>
                <h4>Email</h4>
                <Link to="">ibrahim@eziline.com</Link>
            </div>
        </div>
        <div className={styles.contactCol2}>
            <div>
                <h4>Working Hours</h4>
                <p>Open Monday to Friday</p>
                <p>From 09:00 AM to 18:00 PM</p>
            </div>
              <div>
                <h4>Fax</h4>
                <Link to="">(051) 5491184</Link>
            </div>
        </div>
    </div>
    </div>
    <div className={styles.contactMap}>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.066455926727!2d73.02386367462502!3d33.60358014128957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df946f24e9fa83%3A0x5c0a503ad0bd55b4!2sEziline%20Software%20House%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1693208516986!5m2!1sen!2s" 
            width="600"
             height="350" 
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             title="Google Map of Eziline Software House"></iframe>
        </div>
        <div>
            <p>As you guys are here for IT and Freelancing courses and if you are interested in onsite courses. We are providing you our office address on ezitech institute’s website with exact location please come and visit our office for better  enviornment and work for enhancing your skills.Before you come please contact ezitech institute and confirm your appointment Thank You.</p>
        </div>
    </div>
</div>
);
}

