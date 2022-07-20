import React from "react";
import "./styles.css"
import courses from "../../ressources/courses.svg"
import bookmarkLogo from "../../ressources/bookmarkLogo.svg"
import lightning from "../../ressources/lightning.svg"
import help from "../../ressources/help.svg"
import trophy from "../../ressources/trophy.svg"

function Menu() {
    return (

        <div className="menu-list">
            <ul>
                <li >
                    <img src={courses} alt="" />
                    My Courses</li>
                <li>
                    <img src={bookmarkLogo} alt="" />
                    Bookmarks</li>
                <li>
                    <img src={lightning} alt="" />
                    Trending Courses</li>
                <li>
                    <img src={help} alt="" />
                    Help Articles</li>
                <li> <img src={trophy} alt="" /> Completed Courses</li>
            </ul>
        </div>

    )
}
export default Menu