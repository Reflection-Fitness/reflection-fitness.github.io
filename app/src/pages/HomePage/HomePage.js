import './HomePage.scss';
import bg from '../../assets/backgrounds/Home.png';

// scroll arrow icon
import arrow from '../../assets/WhiteScrollArrow.svg';

// mission icons
import helpIcon from '../../assets/mission/heart-care.svg';
import strengthIcon from '../../assets/mission/arm-muscles.svg';
import plusIcon from '../../assets/mission/math-plus.svg';
import healthyIcon from '../../assets/mission/fitness.svg';
import checkIcon from '../../assets/mission/checkmark.svg';
import cancelIcon from '../../assets/mission/abort.svg';
import slowIcon from '../../assets/mission/slow.svg';

// components
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

function Card({ txt, icon, width=75 }) {
    return (
        <div className="card">
            <img src={icon} alt="" style={{width: width+"px"}}/>
            <p>{txt}</p>
        </div>
    );
}

export function HomePage() {
    return (
        <>
            <Navbar curr="Reflection Fitness" />
            <div className="home container">
                <img src={bg} alt="background" className="bg" />
                <div className="hero">
                    <p>Building the temple of God inside and out.</p>
                    <img src={arrow} alt="arrow" />
                </div>
                <div className="mission">
                    <p className="lead-in">Our mission is to...</p>
                    <div className="card-row">
                        <Card txt="help people" icon={helpIcon} />
                        <Card txt="build strength" icon={strengthIcon} />
                        <Card txt="and" icon={plusIcon} width={25}/>
                        <Card txt="get healthy" icon={healthyIcon} />
                        <Card txt="the right way" icon={checkIcon} />
                        <Card txt="without" icon={cancelIcon} />
                        <Card txt="yo-yo dieting" icon={slowIcon} />
                        {/* <Card txt="." icson={arrow} /> */}
                    </div>
                    <div className="hook">
                        <p className="txt">
                            Our bodies are the temple of God.
                            <br/>
                            We need to strengthen it physically and spiritually.
                        </p>
                        <ActionButton txt="Show me how" link="/services"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}