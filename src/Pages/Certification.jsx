import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import SocialSharing from "../Components/SocialSharing";
import styles from "./Certification.module.css";

function Certification({courses}){
     useEffect(()=>{
    window.scrollTo(0,0);
 },[])
return(
    <>
       <Header />
       <NavBar />
       <CertificationDetails />
       <SocialSharing />
       <Footer courses={courses}/>
       <CopyRight />
    </>
);
}
export default Certification


function CertificationDetails(){
   return(
      <>
      <div className={styles.freeCertification}>
         <h2>Free Certification Program:</h2>
         <p>At Ezitech, we believe in democratizing education and making it accessible to everyone. As part of our commitment to empowering individuals with valuable skills, we offer a selection of free certification programs in the field of Information Technology. These programs are designed to equip learners with fundamental knowledge and practical experience, paving the way for a successful career in IT.</p>
         <span>Why Choose Our Free Certification Program?</span>
         <ol type="number">
            <li>
               <span>No Cost, High Value:</span> Our free certification courses provide the same quality of education as our paid programs, without any financial burden. Gain valuable skills without worrying about tuition fees.
            </li>
            <li>
               <span>Career Boost:</span> Acquire in-demand IT skills that can enhance your resume, making you stand out to potential employers and increasing your employability.
            </li>
            <li>
               <span>Flexible Learning:</span> Our free certification courses are available online, allowing you to learn at your own pace and from the comfort of your home.
            </li>
            <li>
               <span>Opportunity for Upskilling:</span> Whether you’re a student, a working professional, or a career changer, our free certification programs offer an excellent opportunity to upskill and explore new career paths.
            </li>
             <li>
               <span>Supportive Community:</span> Join a vibrant community of learners, where you can collaborate, share knowledge, and engage in discussions with peers and instructors.
            </li>
         </ol>
         <span>Available Free Certification Programs:</span>
         <ol>
            <li>Introduction to Python Programming</li>
            <li>Basics of Web Design and Development</li>
            <li>Cybersecurity Fundamentals</li>
            <li>Data Analytics with Excel</li>
            <li>Cloud Essentials for Beginners</li>
            <li>Flutter Development</li>
      </ol>
      </div>
        <div className={styles.paidCertification}>
         <h2>Paid Certification Program:</h2>
         <p>Our paid certification programs at Ezitech Institute are carefully curated to meet the demands of the ever-evolving IT industry. These comprehensive courses provide an in-depth understanding of advanced concepts and hands-on experience, ensuring that you gain practical skills and expertise required to excel in the IT sector.</p>
         <span>Why Choose Our Paid Certification Program?</span>
         <ol type="1">
            <li>
               <span>Specialized Learning:</span> Dive deep into specialized IT domains, with industry-specific certifications that cater to your specific career goals..
            </li>
            <li>
               <span>Experienced Faculty:</span> Learn from seasoned professionals and experts in their respective fields, who bring practical insights and real-world experience to the classroom.
            </li>
            <li>
               <span>Project-based Approach:</span> Our paid certification programs include practical projects and assignments, allowing you to apply your knowledge to real-world scenarios.
            </li>
            <li>
               <span>Career Support:</span> Benefit from our career counseling and placement assistance, connecting you with potential employers and job opportunities..
            </li>
             <li>
               <span>Certification Validation:</span> Upon successful completion, receive industry-recognized certificates that validate your expertise and enhance your professional credibility.
            </li>
         </ol>
         <span>Available Paid Certification Programs:</span>
         <ol>
            <li>Full Stack Web Development</li>
            <li>Graphics Designing</li>
            <li>CMS (WordPress)</li>
            <li>App Development </li>
            <li>Digital Marketing </li>
            <li>Data Science and Machine Learning</li>
            <li>Ethical Hacking and Cybersecurity</li>
            <li>Advanced Cloud Solutions Architect</li>
            <li>Software Engineering Masterclass </li>
      </ol>
      <span>Invest in Your Future:</span>
      <p>Choosing a paid certification program at Ezitech is an investment in your future. With our rigorous and industry-relevant curriculum, you will be equipped to take on the challenges of the IT world and unlock exciting opportunities for personal and professional growth.</p>
      <span>Get Started:</span>
      <p>Whether you opt for our free certification program or invest in our paid courses, Ezitech is dedicated to empowering you with the knowledge and skills needed to thrive in the dynamic landscape of Information Technology. Enroll today and embark on a transformative journey towards a successful IT career.</p>
      </div>
      </>
   )
}