import { Navbar } from '../../components/Navbar/Navbar';
import './HomePage.scss';
import bg from '../../assets/backgrounds/Home.png';
import arrow from '../../assets/WhiteScrollArrow.svg';

export function HomePage() {
    return (
        <>
            <Navbar curr="Reflection Fitness"/>
            <div className="home container">
                <img src={bg} alt="background" className="bg"/>
                <div className="hero">
                    <p>Building the temple of God inside and out.</p>
                    <img src={arrow} alt="arrow"/>
                    {/* <img src=></img> */}
                </div>
            </div>
        </>
    );
}