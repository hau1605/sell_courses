import React from "react";
import Banner from "../Banner/Banner";
import Typical_Teacher from "../Typical_Teacher/Typical_Teacher";
import ProductHomePage from "./ProductHomePage/ProductHomePage";
const HomePage=()=>{

    return <div>
        <Banner/>
        <ProductHomePage/>
        <Typical_Teacher/>
    </div>;
}
export default HomePage;