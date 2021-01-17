import { Navbar } from '../../components/Navbar/Navbar';
import {Footer} from '../../components/Footer/Footer';
import './PageNotFound.scss';

export function PageNotFound() {
    return (
        <>
            <Navbar curr="PageNotFound"/>
            <Footer curr="PageNotFound"/>
        </>
        
    );
    
}