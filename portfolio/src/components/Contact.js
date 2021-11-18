import React from "react";
import "../css/contact.css"

function Contact() {
    return (
        <div>
            <div className="card-columns">

                <div className="card" id="linkedIn">
                    <div class="card-body">
                        <h3 className="card-title">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/emily-daniel127/" target="_blank" rel="noreferrer">
                            <h6>Click Here!</h6>
                        </a>
                    </div>
                </div>
                <div className="card" id="gitHub">
                    <div className="card-body">
                        <h3 className="card-title">GitHub</h3>
                        <p className="card-text">Username: emilyelizabethdaniel</p>
                        <a href="https://www.github.com/emilyelizabethdaniel" target="_blank" rel="noreferrer">
                            <h6>Click Here!</h6>
                            </a>
                    </div>
                </div>
                <div className="card" id="form">
                    <div className="card-body">
                        <h3 className="card-title">Interested? Enter your info below:</h3>
                        <form>
                            <label for="fname">First name:</label><br></br>
                            <input type="text" id="fname" name="fname"></input><br></br>
                            <label for="lname">Last name:</label><br></br>
                            <input type="text" id="lname" name="lname"></input><br></br>
                            <label for="email">Enter your email:</label><br></br>
                            <input type="email" id="email" name="email"></input><br></br>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;