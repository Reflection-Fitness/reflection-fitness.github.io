import './Footer.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Socials } from '../Socials/Socials';

function NavLink({ curr, name, link }) {
    return (
        <Link to={link} className={"link " + (curr === name ? "active" : "")}>
            {name}
        </Link>
    );
}

export function Footer({ curr }) {
    return (
        <div className="footer container">
            <div className="main">
                <div className="logo-head">
                    <img src={logo} alt="logo" />
                    <h1>Reflection Fitness</h1>
                    <p>Building the temple of God inside and out.</p>
                </div>
                <ul className="nav">
                    <p>Menu</p>
                    <NavLink curr={curr} name="Home" link="/"/>
                    <NavLink curr={curr} name="About" link="/about"/>
                    <NavLink curr={curr} name="Services" link="/services"/>
                    <NavLink curr={curr} name="Contact" link="/contact"/>
                </ul>

                <Socials/>
            </div>
            <hr />
            <div className="dev-creds">
                <p>
                    COPYRIGHT (C) 2020 REFLECTION FITNESS LLC. <br />
                    ALL RIGHTS RESERVED.
                </p>
                <p>22541 Lost Creek Ter Ashburn VA 20147</p>
                <p>PRIVACY POLICY</p>
                <p>TERMS OF USE</p>
            </div>
        </div>
    );
}