import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import './ContactPage.scss';
import { Socials } from '../../components/Socials/Socials';

export function ContactPage() {
    return (
        <>
            <Navbar curr="Contact" />
            <div className="contact container">
                <div className="hero">
                    <h1>Get In Touch</h1>
                    <p>
                        Want to schedule a service, ask a question, or get a
                        free quote? We’d love to meet you. Here’s how you can
                        reach us...
                    </p>
                    <Socials />
                </div>

                <div className="contact">
                    
                </div>
            </div>
            <Footer curr="Contact" />
        </>

    );
}