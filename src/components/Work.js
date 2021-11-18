import React from "react";
import "../css/work.css"
import firstImage from "../images/image1.jpg"
import secondImage from "../images/image2.jpg"
import thirdImage from "../images/image3.jpg"
import fourthImage from "../images/image4.jpg"
import fifthImage from "../images/image5.jpg"
import sixthImage from "../images/image6.jpg"
import seventhImage from "../images/image7.jpg"
import eigthImage from "../images/image8.jpg"

function Work() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://kembo001.github.io/mealPlan/" target="_blank" rel="noreferrer">
                            <img src={firstImage} alt="peach quartz color" width="400" height="400"></img>
                            <p>Recipe Search App</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/annsabie/bookreviews" target="_blank" rel="noreferrer">
                            <img src={secondImage} alt="provence blue color" width="400" height="400"></img>
                            <p>allBooks App</p>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://emilyelizabethdaniel.github.io/dayPlanner/" target="_blank" rel="noreferrer">
                            <img src={thirdImage} alt="baby blue color" width="400" height="400"></img>
                            <p>Day Planner</p>
                        </a>
                    </div>
                    <div class="col">
                        <img src={fourthImage} alt="classic blue color" width="400" height="400"></img>
                    </div>
                    <div class="col">
                        <img src={fifthImage} alt="classic blue color" width="400" height="400"></img>
                    </div>
                    <div class="col">
                        <img src={sixthImage} alt="classic blue color" width="400" height="400"></img>
                    </div>
                    <div class="col">
                        <img src={seventhImage} alt="classic blue color" width="400" height="400"></img>
                    </div>
                    <div class="col">
                        <img src={eigthImage} alt="classic blue color" width="400" height="400"></img>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Work;