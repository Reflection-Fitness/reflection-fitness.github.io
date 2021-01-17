import './Socials.scss';
import constants from '../../constants';
import facebook from '../../assets/socials/facebook.svg';
import email from '../../assets/socials/mail.svg';
import phone from '../../assets/socials/phone.svg';

export function Socials() {
    let contactLinks = constants["contactLinks"]
    return (
        <div className="socials">
            <a href={contactLinks["facebook"]} target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" />
            </a>

            <a href={"mailto: " + contactLinks["email"]} target="_blank" rel="noreferrer">
                <img src={email} alt="email" />
            </a>

            <a href={"tel: " + contactLinks["phone"]} target="_blank" rel="noreferrer">
                <img src={phone} alt="phone" />
            </a>
        </div>
    );
}