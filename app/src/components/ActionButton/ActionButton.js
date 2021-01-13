import './ActionButton.scss';
import arrow from '../../assets/GreenArrow.svg';
import { Link } from 'react-router-dom';

export function ActionButton({txt="action-btn", link="/contact"}){
    return (
        <Link to={link} className="action-btn">
            <p>{txt}</p>
            <img src={arrow} alt="arrow"/>
        </Link>
    );
}