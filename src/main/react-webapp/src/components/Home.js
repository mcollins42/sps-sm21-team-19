import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import '../css/home.css'
import drugsImg from '../images/drugs.png'
import map from '../images/map.png'
import sideEffects from '../images/sideEffects.png'

const Home = () => {

    let history = useHistory();

    const handleChange = e => {
        //console.log(e.target.value, e.target.selectedOptions[0].label)
        const value = e.target.value
        const label = e.target.selectedOptions[0].label
        history.push(`/${label}?id=${value}`);
        //history.push(`/${value}`);
    }

    const [drugs, setDrugs] = React.useState([])

    React.useEffect(() => {
        const getData = async () =>{
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const allDrugs = await data.json()
            setDrugs(allDrugs)
            //console.log(allDrugs)
        }
        getData()
    }, [])

    

    return(
        <div id="content">
            {/* Drop down emergancy menu */}

            <div className="container">
                <h1 className="title">Drug Safety</h1>
                {/* Search a drug  */}
                <div className="search">
                    <p>Find information on a drug:</p>
                    <select name="drugs" className="form-control" aria-label="Select a drug" onChange={handleChange}>
                        <option defaultValue>Select a drug</option>
                        {
                            drugs.map( item => (
                               <option key={item.id} value={item.id} label={item.name}>
                                    {item.name}
                                </option> 
                                
                            ))
                        }
                        <option value="11" name="marijuana">marijuana</option>
                    </select>
                    {/* <div>
                        <select onChange={event => handleChange(event.target.value)}>
                            <option>Select Location</option>
                            <option key="1" value="east">East Building</option>
                            <option key="2" value="west">West Building</option>
                            <option key="3" value="south">South Building</option>
                            <option key="4" value="north">North Building</option>
                        </select>
                    </div> */}
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