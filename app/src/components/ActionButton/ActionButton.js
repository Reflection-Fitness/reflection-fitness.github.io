import './ActionButton.scss';
import arrow from '../../assets/graphics/GreenArrow.svg';
import { Link } from 'react-router-dom';

export function ActionButton({txt="action-btn", link="", onClick=null, props}){
    return (
        <Link to={link} className="action-btn" onClick={onClick} {...props}>
            <p>{txt}</p>
            <img src={arrow} alt="arrow"/>
        </Link>
    );
}