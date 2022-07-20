import React from "react";
import "./style.css"
import avatar1 from "../../images/avatar1.png"
import search from "../../ressources/search.svg"
import php from "../../images/php.png"
import progress from "../../images/progress.png"

export default function AllCourses() {
    return (
        <>
            <div className="center">
                <header>
                    <div className="right-title">
                        <div className="title">
                            <h2>Your Courses</h2>
                            <button>PREMIUM</button>
                        </div>
                        <div className="nber-of-courses">
                            <img src={avatar1} alt="" className="middle-section-profile" />
                            <p>26 Courses</p>
                        </div>
                    </div>
                    <img src={search} alt="" className="search-icon-center" />
                </header>


                <div className="course-card">
                    <div className="course-intro">
                    <img src={php} alt="" className="course-logo" />
                    <div className="course-name">
                        <p> BEGINNERS</p>
                        <h5>Fun with PHP</h5>
                    </div>
                    </div>
                    <div className="author">
                    <p>by</p>
                    <img src={avatar1} alt="" className="middle-section-profile" />
                    <h6>Darrell Steward</h6>
                    </div>
                    <div className="progress">
                        <p>68%</p>
                        <img src={progress} alt="" />
                        <p>19/26</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}