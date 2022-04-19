import React from "react";
import './Header.css'

const Header = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <h1 className="brand navbar-brand">JAGRUK BHARAT</h1>
                    <h3 className=" caption navbar-brand">Get top headlines here</h3>
                </div>
            </nav>

            
        </React.Fragment>
    )
}

export default Header