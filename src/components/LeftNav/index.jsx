import React from "react";
import "./styles.css"
import Menu from "./menu";
import Tutors from "./tutors";
 

function LeftNav() {
    return(
    <div className="leftNav">
        <div className="logo">logo</div>
       <div > <Menu/> </div>
       <div> <Tutors/> </div>
    </div>
)}
export default LeftNav