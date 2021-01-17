import './AboutPage.scss';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import bg from '../../assets/backgrounds/About.png';
import headshot from '../../assets/graphics/Headshot.svg';

import mountW from '../../assets/graphics/MountainsW.svg';
import mountT from '../../assets/graphics/MountainsT.svg';

export function AboutPage(){
    return (
        <>
            <Navbar curr="About"/>
            <div className="about container">
                <img src={bg} alt="background" className="bg" />
                <div className="hero">
                    <img src={headshot} alt="headshot"/>
                    <div className="detail">
                        <h1>Victoria Samuel</h1>
                        <p>Our proud ownder with 6 years of experience in the fitness industry</p>
                    </div>
                </div>

                <img src={mountW} alt="mountain" className="mount w"/>
                <img src={mountT} alt="mountain" className="mount t"/>
            </div>
            <Footer curr="About"/>
        </>
    );
}