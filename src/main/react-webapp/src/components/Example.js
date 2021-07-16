import {Link} from 'react-router-dom'
import React from "react";

const Example = () => {

    // Just an example component to show how routing to another component/page should work.

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
            <Link to="/" children="Click to redirect to the Home Page" style={text} />
        </div>
    )
}

export default Example;