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
                <img src={profile} alt="profile" width="400" height="500" className="center"></img>
                <p> Hello, World! My name is Emily Daniel, living in Minneapolis, Minnesota. I am in the early stages of learning web development, and I have a huge passion and drive to learn more. Currently my focus is learing typescript and improving my React skills. I am comfortable in full-stack development, but I have a passion for front end and UI/UX. I am in the midst of multiple projects, including a game app soon to be launched on the app store! I would love to work on any projects you might have in mind! Check out my contact page to reach me!
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