import './Footer.scss';
import {default as constants} from '../../constants';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import facebook from '../../assets/socials/facebook.svg';
import instagram from '../../assets/socials/instagram.svg';
import email from '../../assets/socials/mail.svg';
import phone from '../../assets/socials/phone.svg';

function NavLink({ curr, name, link }) {
    return (
        <Link to={link} className={"link " + (curr === name ? "active" : "")}>
            {name}
        </Link>
    );
}

export function Footer({ curr }) {
    let contactLinks = constants["contactLinks"]

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

                <div className="socials">
                    <a href={contactLinks["facebook"]} target="_blank" rel="noreferrer">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    
                    <a href={"mailto: " + contactLinks["email"]} target="_blank" rel="noreferrer">
                        <img src={email} alt="email"/>
                    </a>

                    <a href={"tel: " + contactLinks["phone"]} target="_blank" rel="noreferrer">
                        <img src={phone} alt="phone"/>
                    </a>
                </div>
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