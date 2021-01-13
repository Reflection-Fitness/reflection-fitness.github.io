import './Navbar.scss';
import logo from '../../assets/logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DevWarning } from '../DevWarning/DevWarning';

function NavLink({ curr, name, link }) {
    return (
        <Link to={link} className={"link " + (curr===name? "curr" : "")}>
            {name}
        </Link>
    );
}

export function Navbar({curr}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="nav container">
            <DevWarning/>
            <div className={"navbar " + (open ? "open" : "closed")}>
                <div className="logoHead">
                    <img src={logo} alt="Logo" />
                    <NavLink curr={curr} name="Reflection Fitness" link="/" />
                </div>

                <ul className="hamburger" onClick={() => setOpen(!open)}>
                    <li />
                    <li />
                    <li />
                </ul>

                <ul className="links">
                    <NavLink curr={curr} name="About" link="/about" />
                    <NavLink curr={curr} name="Services" link="/services" />
                    <NavLink curr={curr} name="Contact" link="/contact" />
                </ul>
            </div>
        </div>
    );
}