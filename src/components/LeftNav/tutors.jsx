import React from "react";
import "./styles.css"
import avatar2 from "../../images/avatar2.jpg"
import avatar5 from "../../images/avatar5.jpg"
import avatar3 from "../../images/avatar3.png"
import chat from "../../ressources/chat.svg"
export default function Tutors() {
    return (

        <>
            <h3>My Tutors</h3>
            <div className="one-tutor">
                <img src={avatar5} alt="logo" className="profile"/>
                <div className="tutors-info">
                    <p>Kathryn Murphy</p>
                    <p>PHP developer</p>
                </div>
                <img src={chat} alt="chat box" className="chat-box"/>
                {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
            </div>
            <div className="one-tutor">
                <img src={avatar2} alt="logo" className="profile"/>
                <div className="tutors-info">
                    <p>Annette Black</p>
                    <p>Python Developer</p>
                </div>
                <img src={chat} alt="chat box" className="chat-box"/>
                {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
            </div>
            <div className="one-tutor">
                <img src={avatar3} alt="logo" className="profile"/>
                <div className="tutors-info">
                    <p>Eleanor Pena</p>
                    <p>UI Designer</p>
                </div>
                <img src={chat} alt="chat box" className="chat-box"/>
                {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
            </div>
            
    
        </>
    )
}
