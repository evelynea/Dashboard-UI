import React from "react";
import Header from "./header";
import AllCourses from "./courses";
import "./style.css"

export default function RightNav() {
    return (
        <>
            <div className="right-nav">
                <Header />
                <AllCourses />
            </div>
        </>
    )
}