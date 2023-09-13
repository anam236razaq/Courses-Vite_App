import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import {motion} from "framer-motion";
import { useEffect, useRef, useReducer, useState} from "react";
import styles from "./Internships.module.css"
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import ContactButton from "../Components/ContactButton";
import SocialSharing from "../Components/SocialSharing";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import ForwardedInternForm from "../Components/InternForm";
import faqs from "../../data/faqs.json";

const textValues=["Best", "Optimal", "Topnotch"];
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

function Internships({courses}){
    const[{text, textIndex}, dispatch]=useReducer(reducer, initialState);
    //For scrolling from start
    useEffect(()=>{
    window.scrollTo(0,0);
     },[])

    //For Smooth scrolling from one component to other component
    const ref=useRef(null);
    const handleClick=()=>{
       ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
        <Header />
        <NavBar />
        <InternHero text={text} dispatch={dispatch} textIndex={textIndex} handleClick={handleClick}/>
        <InternCount />
        <InternFAQ/>
        <UniInternship />
        <ForwardedInternForm ref={ref}/>
        <ContactButton />
        <SocialSharing />
        <Footer courses={courses}/>
        <CopyRight />
        </>
    );
}
export default Internships

function InternHero({text, dispatch, handleClick}){
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            dispatch({type: 'TextTyping'});
        }, 4000);
         return ()=>{
            clearInterval(interval);
         };
    }, [dispatch]);
    
    return(
        <div className={styles.internHero}>
            <div className={styles.heroContent}>
                <h1>Welcome To Our</h1>
                <motion.span initial={{translateX: 0}} animate={{translateX: 100}} transition={{duration: "0.1", delay: "0"}}>{text}</motion.span>
                 <h1> Internship Program</h1>
                <h4>Affiliated with Eziline Software House</h4>
                <button onClick={handleClick}>Apply Now</button>
            </div>
            <motion.div whileHover={{translateY: -0.88, translateX: -4}} whileTap={{translateY: -4, translateX: -0.88}} className={styles.heroImgs}>
                <motion.img whileHover={{translateY: 3, translateX: -13}} whileTap={{translateY: -5, translateX: -8}} className ={styles.img4} src="/src/assets/InternImgs/intern-img-4.png" alt="Internship" />
                <motion.img whileHover={{translateY: 3, translateX: -13}} whileTap={{translateY: -5, translateX: -8}} className ={styles.img3}  src="/src/assets/InternImgs/intern-img-3.png" alt="Internship" />
                <motion.img whileHover={{translateY: 3, translateX: -13}} whileTap={{translateY: -5, translateX: -8}} className ={styles.img1}  src="/src/assets/InternImgs/intern-img-1.png" alt="Internship" />
            </motion.div>
        </div>
    );
}

function InternCount(){
    return(
        <div className={styles.counter}>
            <h1>We are proud to show numbers</h1>
            <div className={styles.countContainer}>
                <div className={`${styles.countCol} ${styles.col1Color}`}>
                    <span className={styles.count}>
                        <CountUp start={0} end={168} duration={3}></CountUp>
                    </span>
                    <p>Current Interns</p>
                </div>
                <div className={`${styles.countCol} ${styles.col2Color}`}>
                    <span className={styles.count}>
                         <CountUp start={0} end={4247} duration={3} separator=""></CountUp>
                    </span>
                    <p>Completions</p>
                </div>
                <div className={`${styles.countCol} ${styles.col3Color}`}>
                    <span className={styles.count}>
                         <CountUp start={0} end={13506} duration={3} separator=""></CountUp>
                    </span>
                    <p>Interviewed</p>
                </div>
                <div className={`${styles.countCol} ${styles.col4Color}`}>
                    <span className={styles.count}>
                         <CountUp start={0} end={5467} duration={3} separator=""></CountUp>
                    </span>
                    <p>Total Interns</p>
                </div>
            </div>
        </div>
    );
}

function InternFAQ(){
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle=(index)=>{
        if (openIndex === index) {
        setOpenIndex(null);
        } else {
             setOpenIndex(index); 
        }
    };
    return(
        <div className={styles.faq}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faqItems}>
                {faqs.faqs.map((faq, i)=>(
                <div className={styles.faqQuery} key={i}>
                <div className={styles.faqTitle} onClick={()=>handleToggle(i)}>
                    <p className={styles.number}>{i < 9? `0${i+1 }`: i+1}</p>
                    <p className={styles.title}>{faq.title}</p>
                    <p className={styles.icon}>{openIndex===i? "-": "+"}</p>
                </div>
                    {openIndex===i && <div className={styles.faqText}>{faq.text}</div>}
                </div>
                ))}
            </div>
        </div>
    )
}

function UniInternship(){
      const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
    };
    return(
        <div className={styles.uniIntern}>
            <h1>Internship MoU with Universities</h1>
             <Slider {...settings}>
                <div className={styles.uniImgs}>
                    <img src="/src/assets/InternImgs/intern-logo-1.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-2.png" alt="Logo Imgs" />        
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-3.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                      <img src="/src/assets/InternImgs/intern-logo-4.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                      <img src="/src/assets/InternImgs/intern-logo-5.png" alt="Logo Imgs" />
                 </div>
                       <div className={styles.uniImgs}>
                    <img src="/src/assets/InternImgs/intern-logo-6.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-7.png" alt="Logo Imgs" />        
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-8.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                      <img src="/src/assets/InternImgs/intern-logo-9.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                      <img src="/src/assets/InternImgs/intern-logo-10.png" alt="Logo Imgs" />
                 </div>
                       <div className={styles.uniImgs}>
                    <img src="/src/assets/InternImgs/intern-logo-11.png" alt="Logo Imgs" />
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-12.png" alt="Logo Imgs" />        
                 </div>
                <div className={styles.uniImgs}>
                     <img src="/src/assets/InternImgs/intern-logo-13.png" alt="Logo Imgs" />
                 </div>
             </Slider>  
        </div>
    );
}


