import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    const centerDiv = {
        position: "absolute",
        width: "100%",
        top: "50%",
        textAlign: "center",
    }
    const text = {
        fontSize: "xx-large",
    }


    return(
        <div style={centerDiv}>
            <Link to="/example" children="Click to redirect to /example" style={text}/>
        </div>
    )
}

export default Home;