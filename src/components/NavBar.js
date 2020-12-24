import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navDiv p-3">
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand"><h3 className="headText logo">AEsKay.React</h3></a>
                </div>
                <ul className="nav navbar-navs">
                    <li>
                        <Link to="/">
                            <button className="menuBtn">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <button className="menuBtn">Services</button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            <button className="menuBtn">About</button>
                        </Link>
                    </li>
                </ul>
            </nav>   
        </div>
    )
}
