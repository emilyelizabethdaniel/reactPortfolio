import React from "react";
import profile from "../images/profile.jpg"
import "../css/aboutMe.css"

function AboutMe() {
    return (
        <div>
            <div>
                <h3>
                    About Me 
                </h3>
                <img src={profile}alt="profile photo" width="400" height="500" className="center"></img>
                <p> Web developer. Learning about and engaging with new technologies and languages to further my understanding of web development, particulary in front end design.
                </p>
                
                <ul>
                <p>Tech Stack:</p>
                    <li>HTML </li><br></br>
                    <li> CSS </li><br></br>
                    <li>JavaScript </li><br></br>
                    <li>JQuery </li><br></br>
                    <li>Bootstrap</li><br></br>
                    <li>Express</li><br></br>
                    <li>Node</li><br></br>
                    <li>MySql</li><br></br>
                    <li>Sequelize</li><br></br>
                    <li>MongoDB</li><br></br>
                    <li>Mongoose</li><br></br>
                    <li>HandleBars</li><br></br>
                    <li>React</li><br></br>
                    <li>Redux</li><br></br>
                    <li>MaterialUI</li><br></br>
                </ul>
            </div>
        </div>
    )
}
export default AboutMe;