import { useEffect } from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header"
import SocialSharing from "../Components/SocialSharing";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import styles from "./AboutUs.module.css";

function AboutUs({courses}){
     useEffect(()=>{
    window.scrollTo(0,0);
 },[])
    return(
    <>
     <Header />
     <NavBar />
     <Hero/>
     <Identity />
     <Registered/>
     <SocialSharing />
     <Footer courses={courses} />
     <CopyRight />
    </>
    );
}
export default AboutUs

function Hero(){
     const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    return(
   <div className={styles.aboutHero}>
     <Slider {...settings}>
         <div className={`${styles.heroSlider} ${styles.slide1}`} >
            <motion.h1 initial={{translateY: 100}} animate={{translateY: 0}} transition={{duration: "0.5", delay: "0"}}>
               Expert Faculty</motion.h1>
            <motion.p initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration: "0.5", delay: "0"}} >Our dedicated team of experienced instructors Comprises industry professionals and academic experts Ensuring that our students receive top-notch guidance and mentorship.</motion.p>
            <SocialIcons />
        </div>
        <div className={`${styles.heroSlider} ${styles.slide2}`}>
            <motion.h1 initial={{translateY: 100}} animate={{translateY: 0}} transition={{duration: "0.5", delay: "3.5"}}>Hands-on Learning</motion.h1>
            <motion.p initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration: "0.5", delay: "3.5"}}>We understand the importance of practical experience, and our curriculum is carefully crafted to include real-world projects, case studies, and industry-relevant simulations.</motion.p>
            <SocialIcons />
        </div>
        <div className={`${styles.heroSlider} ${styles.slide3}`}>
            <motion.h1 initial={{translateY: 100}} animate={{translateY: 0}} transition={{duration: "0.5", delay: "6.5"}}>Internship Opportunities</motion.h1>
            <motion.p initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration: "0.5", delay: "6.5"}}>We believe in the power of hands-on experience, which is why we offer internship opportunities with leading IT companies, giving our students a chance to apply their knowledge in a professional setting.</motion.p>
            <SocialIcons />
        </div>
        <div className={`${styles.heroSlider} ${styles.slide4}`}>
            <motion.h1 initial={{translateY: 100}} animate={{translateY: 0}} transition={{duration: "0.5", delay: "9.5"}}>Holistic Development</motion.h1>
            <motion.p initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration: "0.5", delay: "9.5"}}>Beyond technical skills, we focus on nurturing essential soft skills such as communication, teamwork, and problem-solving, ensuring our graduates are well-rounded professionals.</motion.p>
            <SocialIcons />
        </div>
     </Slider>
   </div>
    );
}

function SocialIcons(){
    return(
        <div className={styles.icons}>
             <Link to="https://web.facebook.com/ezitech?_rdc=1&_rdr"><i className="fi fi-brands-facebook"></i></Link>
             <Link to="https://www.instagram.com/ezitechpk/"><i className="fi fi-brands-instagram"></i></Link>
             <Link to="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg"><i className="fi fi-brands-youtube"></i></Link>
             <Link to="https://www.linkedin.com/company/eziline-technologies/"><i className="fi fi-brands-linkedin"></i></Link>
        </div>
    )
}

function Identity(){
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return(
    <div className={styles.identity}>
        <h2>Our Identity</h2>
        <div>
        <div className={styles.identitySlides}>
        <Slider {...settings}>
             <img src="/src/assets/AboutImgs/about-us-1.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-2.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-3.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-4.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-5.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-6.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-7.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-8.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-9.png" alt="AboutUs Imgs" />
             <img src="/src/assets/AboutImgs/about-us-10.png" alt="AboutUs Imgs" />
        </Slider>
       </div>
       <div className={styles.identityContent}>
            <p><span>Ezitech Is affiliated With</span> <Link to="https://www.eziline.com/">Eziline Software House</Link>. In the last 7 years, Ezitech has trained thousands of learners. All of our courses in web development, web design, machine learning, app development, content management systems, e-commerce, graphics design, and digital marketing lead to employment and provide industrial experience.</p>
            <p>We also offer <span>internships</span> to our <span>students</span> form <span>Eziline Software House</span> so they develop their abilities according to market demand. We train them in the most recent technologies & frameworks using a fully practical approach to programming.</p>
            <h3>Our Vision</h3>
            <p>Our mission is to enable every student in <span>practical to work while they are a student</span>. A student should be able to meet all of his financial demands for his higher education, regardless of <span>whether it is a home-based work or some other type of part-time job</span>.</p>
        </div>
      </div>
    </div>
    );
}

function Registered(){
     const settings = {
      infinite: true,
      speed: 500,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    };
    return(
        <div className={styles.registered}>
            <h1>Registered With</h1>
             <Slider {...settings}>
                <div className={styles.registeredImgs}>
                    <img src="/src/assets/AboutImgs/about-logo-1.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.registeredImgs}>
                    <img src="/src/assets/AboutImgs/about-logo-2.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.registeredImgs}>
                    <img src="/src/assets/AboutImgs/about-logo-3.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.registeredImgs}>
                    <img src="/src/assets/AboutImgs/about-logo-4.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.registeredImgs}>
                    <img src="/src/assets/AboutImgs/about-logo-5.png" alt="Logo Imgs" />
                 </div>
             </Slider>  
        </div>
    )
}