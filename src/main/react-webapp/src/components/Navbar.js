import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' navbar navbar-dark bg-dark'>
            <Link className="navbar-brand" to="/">Drug safety</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/example">
                        Example
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
