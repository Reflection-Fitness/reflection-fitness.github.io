import './ContactPage.scss';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { Socials } from '../../components/Socials/Socials';
import bg from '../../assets/backgrounds/Contact.png';

function OpenHour({ day, time }) {
    return (
        <div className="hour">
            <p>{day}</p>
            <p>{time}</p>
        </div>
    );
}

function useFormFields(initialValues) {
    const [formFields, setFormFields] = useState(initialValues);
    const createChangeHandler = (key) => (
        e
    ) => {
        const value = e.target.value;
        setFormFields((prev) => ({ ...prev, [key]: value }));
    };
    return { formFields, createChangeHandler, setFormFields };
}

function FormField({ name, dispTxt, inputProps, fieldProps }) {
    return (
        <div className="field" {...fieldProps}>
            <input
                id={name}
                type="text"
                autoComplete="off"
                required
                className="input"
                {...inputProps}
            />
            <label htmlFor={name}>
                <span className="content-name">{dispTxt}</span>
            </label>
        </div>
    );
}

export function ContactPage() {
    const formEl = useRef(null);

    const { formFields, createChangeHandler, setFormFields } = useFormFields({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [status, setStatus] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        let emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phoneRe = /^[0-9\b]+$/;
        if (formFields.name.length <= 0) {
            setStatus("Invalid Full Name");
        } else if (!emailRe.test(formFields.email)) {
            setStatus("Invalid Email Address");
        } else if (!phoneRe.test(formFields.phone)) {
            setStatus("Invalid Phone Number");
        } else if (formFields.message.length <= 0) {
            setStatus("Invalid Message");
        } else {
            // send emails
            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    full_name: formFields.name,
                    email: formFields.email,
                    phone: formFields.phone,
                    message: formFields.message
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then((result) => {
                console.log("Success")
            }, (error) => {
                console.log("Error")
            })

            // update UI / reset data
            setFormFields({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus("Submitted!");
        }
    }

    return (
        <>
            <Navbar curr="Contact" />
            <div className="contact container">
                <img src={bg} alt="background" className="bg" />
                <div className="hero">
                    <h1>Get In Touch</h1>
                    <p>
                        Want to schedule a service, ask a question, or get a
                        free quote? We’d love to meet you. Here’s how you can
                        reach us...
                    </p>
                    <Socials />
                </div>

                <div className="card">
                    <div className="send-msg">
                        <h1>Send us a Message</h1>
                        <form ref={formEl}>
                            <div className="section">
                                <FormField
                                    name="name"
                                    dispTxt="Full Name"
                                    inputProps={{
                                        value: formFields.name,
                                        onChange: createChangeHandler("name")
                                    }}
                                />
                                <FormField
                                    name="email"
                                    dispTxt="Email"
                                    inputProps={{
                                        value: formFields.email,
                                        onChange: createChangeHandler("email")
                                    }}
                                />
                                <FormField
                                    name="phone"
                                    dispTxt="Phone"
                                    inputProps={{
                                        value: formFields.phone,
                                        onChange: createChangeHandler("phone")
                                    }}
                                />
                            </div>
                            <div className="spacer" />
                            <div className="section">
                                <div className="field multi">
                                    <textarea
                                        rows="7"
                                        cols="33"
                                        autoComplete="off"
                                        required
                                        className="input"
                                        value={formFields.message}
                                        onChange={createChangeHandler("message")}
                                    />
                                    <label>
                                        <span className="content-name">Message</span>
                                    </label>
                                </div>
                            </div>
                            <ActionButton
                                txt="Send"
                                link=""
                                onClick={onSubmit}
                                props={{
                                    type: "submit",
                                    className: "action-btn submit"
                                }}
                            />
                        </form>
                        <p className="status">{status}</p>
                    </div>

                    <div className="hours">
                        <h1>Hours</h1>
                        <OpenHour day="Monday" time="7 AM - 6 PM" />
                        <OpenHour day="Tuesday" time="7 AM - 6 PM" />
                        <OpenHour day="Wednesday" time="7 AM - 6 PM" />
                        <OpenHour day="Thursday" time="7 AM - 6 PM" />
                        <OpenHour day="Friday" time="7 AM - 6 PM" />
                        <OpenHour day="Saturday" time="8 AM - 1 PM" />
                    </div>
                </div>
            </div>
            <Footer curr="Contact" />
        </>

    );
}