import './Navbar.scss';
import logo from '../../assets/logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLink({ name, link }) {
    return (
        <Link to={link} className="link">{name}</Link>
    );
}

export function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className={"container " + (open ? "open" : "closed")}>
            <div className="logoHead">
                <img src={logo} alt="Logo" />
                <p>Reflection Fitness</p>
            </div>

            <ul className="hamburger" onClick={() => setOpen(!open)}>
                <li />
                <li />
                <li />
            </ul>

            <ul className="links">
                <NavLink name="About" link="/about" />
                <NavLink name="Services" link="/services" />
                <NavLink name="Contact" link="/contact" />
            </ul>
        </div>
    );
}