import React from "react";
import "../css/header.css"
// import "../js/header.js"

function Header() {
    return (
        <header>
            <div className="jumbotron">
                <h1 className="display-4">Emily Daniel</h1>
                <h3 className="lead" id="demo">Web Developer.</h3>
                <div className="my-4"> </div>
            
            </div>
        </header>
    )
}

export default Header;