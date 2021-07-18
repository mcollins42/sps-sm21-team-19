import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/home.css'
import drugs from '../images/drugs.png'
import map from '../images/map.png'
import sideEffects from '../images/sideEffects.png'

const Home = () => {
        <div id="content">
            {/* Drop down emergancy menu */}

            <div className="container">
                <h1 className="title">Drug Safety</h1>
                {/* Search a drug  */}
                <div className="search">
                    <p>Find information on a drug:</p>
                    <div className="input-group rounded">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                        <NavLink to="#" className="input-group-text border-0" id="search-addon" style={{backgroundColor: 'white'}}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </NavLink>
                    </div>
                    <div className="trendingSearches">
                        <p style={{display: "inline;"}}>Trending searches:</p>
                        <NavLink to="#">Cannabis</NavLink>
                        <NavLink to="#">Addiction</NavLink>
                        <NavLink to="#">Heroin</NavLink>
                        <NavLink to="#">Nicotine</NavLink>
                        <NavLink to="#">Cocaine</NavLink>
                    </div>
                </div>
            
                <div className="row">
                    <NavLink className="col-sm indexMenu" to="#">
                        <img src={sideEffects} alt='sideEffects'/>
                        <div><p>Side Effects</p></div>
                    </NavLink>
                    <NavLink className="col-sm indexMenu" to="/All-Drugs">
                        <img src={drugs} alt='drugs'/>
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