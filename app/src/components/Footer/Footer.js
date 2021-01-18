import './Footer.scss';
import { Link } from 'react-router-dom';
import constants from '../../constants';
import logo from '../../assets/logo.svg';
import { Socials } from '../Socials/Socials';

import email from '../../assets/dev_socials/email.svg';
import github from '../../assets/dev_socials/github.svg';
import globe from '../../assets/dev_socials/globe.svg';
import linkedin from '../../assets/dev_socials/linkedin.svg';

function NavLink({ curr, name, link }) {
    return (
        <Link to={link} className={"link " + (curr === name ? "active" : "")}>
            {name}
        </Link>
    );
}

function DevContact() {
    let contactLinks = constants["devContactLinks"];
    return (
        <div className="dev-creds">
            <p>
                Developed by{" "}
                <span className="name">Alvan Caleb Arulandu</span>
            </p>
            <div className="socials">
                <a href={"mailto: " + contactLinks["email"]} target="_blank" rel="noreferrer">
                    <img src={email} alt="email" />
                </a>
                <a href={contactLinks["github"]} target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a href={contactLinks["linkedin"]} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href={contactLinks["website"]} target="_blank" rel="noreferrer">
                    <img src={globe} alt="website" />
                </a>
            </div>
        </div>
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
                    <NavLink curr={curr} name="Home" link="/" />
                    <NavLink curr={curr} name="About" link="/about" />
                    <NavLink curr={curr} name="Services" link="/services" />
                    <NavLink curr={curr} name="Contact" link="/contact" />
                </ul>

                <Socials />
            </div>
            <hr />
            <div className="misc">
                <p>
                    COPYRIGHT (C) 2020 REFLECTION FITNESS LLC. <br />
                    ALL RIGHTS RESERVED.
                </p>
                <p>22541 Lost Creek Ter Ashburn VA 20147</p>
                {/* <p>PRIVACY POLICY</p>
                <p>TERMS OF USE</p> */}
            </div>
            <DevContact />
        </div>
    );
}