import React from "react";
import "../css/work.css"
import firstColor from "../images/peachQuartz.jpg"
import secondColor from "../images/provence.jpg"
import thirdColor from "../images/babyBlue.jpg"
import fourthColor from "../images/classicBlue.jpg"

function Work() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://kembo001.github.io/mealPlan/" target="_blank" rel="noreferrer">
                            <img src={firstColor} alt="peach quartz color" width="400" height="400"></img>
                            <p>Recipe Search App</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/annsabie/bookreviews" target="_blank" rel="noreferrer">
                            <img src={secondColor} alt="provence blue color" width="400" height="400"></img>
                            <p>allBooks App</p>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://emilyelizabethdaniel.github.io/dayPlanner/" target="_blank" rel="noreferrer">
                            <img src={thirdColor} alt="baby blue color" width="400" height="400"></img>
                            <p>Day Planner</p>
                        </a>
                    </div>
                    <div class="col">
                        <img src={fourthColor} alt="classic blue color" width="400" height="400"></img>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Work;