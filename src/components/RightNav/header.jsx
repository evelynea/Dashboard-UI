import React from "react";
import "./style.css"
import avatar1 from "../../images/avatar1.png"
import search from "../../ressources/search.svg"
import chat from "../../ressources/chat.svg"
import notification from "../../ressources/notification.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="greetings">
                <h2>Courses Dashboard</h2>
                <p> Hello AR Shakir, Welcome back!</p>
            </div>
            <input placeholder="search Dashboard" />
            {/* <img src={search} alt="" className="search-icon"/> */}

            <div className="profile-right-nav">

                <img src={chat} className="profile" />
                <img src={notification} className="profile" />
                <img src={avatar1} className="profile" />
            </div>
        </div>
    )

}