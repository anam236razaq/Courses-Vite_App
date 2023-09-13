import { useEffect } from "react";
import CopyRight from "../Components/CopyRight";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SocialSharing from "../Components/SocialSharing";
import styles from "./SimplePage.module.css";


function SimplePage({courses}){
     useEffect(()=>{
    window.scrollTo(0,0);
 },[])
    return(
      <>
      <Header />
      <NavBar />
      <Page />
      <Footer courses={courses}/>
      <CopyRight />
      </>
    );
}
export default SimplePage

function Page(){
    return(
        <div className={styles.simplePage}>
            <SocialSharing />
        </div>
    )
}