import './ServicesPage.scss';

import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { ActionButton } from '../../components/ActionButton/ActionButton';

import bg from '../../assets/backgrounds/Services.png';
import fitnessPackages from '../../assets/graphics/FitnessPackages.svg';
import fitnessBootcamps from '../../assets/graphics/FitnessBootcamps.svg';
import nutritionPlanning from '../../assets/graphics/NutritionPlanning.svg';

function Offer({ leftTxt, rightTxt }) {
    return (
        <div className="offer">
            <p>{leftTxt}</p>
            <div className="vl" />
            <p>{rightTxt}</p>
            <ActionButton txt="Schedule" link="/contact" />
        </div>
    );
}

export function ServicesPage() {
    return (
        <>
            <Navbar curr="Services" />
            <div className="services container">
                <img src={bg} alt="background" className="bg" />
                <div className="hero">
                    <h1>What Do We Offer?</h1>
                    <p>
                        Here at Reflection Fitness, we provide personalized fitness
                        and nutrition services taught by well-qualified instructors
                        to push your physical and spritual body to the next level.
                    </p>
                </div>
                <div className="services">
                    <div className="service fitness-packages">
                        <img src={fitnessPackages} alt="fitnessPackages" className="badge" />
                        <p className="description">
                            Our fitness packages provide one-on-one 30-min
                            personal training sessions to build
                            balance, strength, and endurance.
                        </p>
                        <Offer leftTxt="1x per wk." rightTxt="$160/mo." />
                        <Offer leftTxt="2x per wk." rightTxt="$280/mo." />
                        <Offer leftTxt="3x per wk." rightTxt="$400/mo." />
                    </div>

                    <div className="service nutrition-planning">
                        <img src={nutritionPlanning} alt="nutritionPlanning" className="badge" />
                        <p className="description">
                            Nutrition is just as important as exercise.
                            Our experts work with you so that you can achieve your goals.
                        </p>
                        <ActionButton txt="Schedule" link="/contact" />
                    </div>

                    <div className="service fitness-bootcamps">
                        <img src={fitnessBootcamps} alt="fitnessBootcamps" className="badge" />
                        <p className="description">
                            Looking for group-style training with generous prices?
                            Then, these 45-min sessions are for you!
                        </p>
                        <Offer leftTxt="Drop-in bootcamp" rightTxt="$30" />
                        <Offer leftTxt="1x per wk." rightTxt="$160/mo." />
                        <Offer leftTxt="2x per wk." rightTxt="$320/mo." />
                        <Offer leftTxt="3x per wk." rightTxt="$480/mo." />
                        <p className="note"><span>*</span> prices for fitness bootcamps vary based on group size</p>
                    </div>
                </div>
            </div>
            <Footer curr="Services" />
        </>

    );
}