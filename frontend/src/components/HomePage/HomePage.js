import React from "react";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import Typical_Teacher from "../Typical_Teacher/Typical_Teacher";
import ProductHomePage from "./ProductHomePage/ProductHomePage";
import CoursesDataService from "../../services/CoursesDataService"
const HomePage=()=>{
    
    const img=
        ['https://bizweb.dktcdn.net/thumb/2048x2048/100/453/393/themes/894913/assets/slider_1.png?1676281841878','https://bizweb.dktcdn.net/thumb/2048x2048/100/453/393/themes/894913/assets/slider_1.png?1676281841878']
    
    useEffect(()=>{window.scrollTo(0, 0);},[])
    return <div>
        <Banner imgs={img}/>
        <ProductHomePage/>
        <Typical_Teacher/>
    </div>;
}
export default HomePage;