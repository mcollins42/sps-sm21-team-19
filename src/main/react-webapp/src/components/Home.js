import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/home.css'
import drugsImg from '../images/drugs.png'
import map from '../images/map.png'
import sideEffects from '../images/sideEffects.png'
import Searchbar from "./Searchbar";

const Home = () => {



    return(
        <div id="content">
            {/* Drop down emergancy menu */}
            
            <button id="button">
                <a href="/question0.html" className= "em-link">
				EMERGENCY</a>
            </button>
            
            <div className="container">
                <h1 className="title">Drug Safety</h1>
                {/* Search a drug  */}
                <Searchbar />
                <div className="row">
                    <NavLink className="col-sm indexMenu" to="#">
                        <img src={sideEffects} alt='sideEffects'/>
                        <div><p>Side Effects</p></div>
                    </NavLink>
                    <NavLink className="col-sm indexMenu" to="/all-drugs">
                        <img src={drugsImg} alt='drugs'/>
                        <div><p>All drugs</p></div>
                    </NavLink>
                    <NavLink className="col-sm indexMenu" to="#">
                        <img src={map} alt='map'/>
                        <div><p>Where to find them?</p></div>
                    </NavLink>
                </div> 
            </div>
        </div>

    )
}

export default Home;