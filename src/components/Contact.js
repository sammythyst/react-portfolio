import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!message) {
            setErrorMessage('Please enter a message.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div className='m-5 d-md-flex'>
            <div className='w-100 d-md-block'>
                <p className="px-2">Maecenas non nulla nec turpis sodales dictum non eu augue. Nullam eu porttitor arcu. Nulla ut erat erat. Etiam et dignissim arcu. Nulla aliquet molestie purus. Nam sit amet lorem id velit suscipit porta et a nunc.</p>
            </div>
            <div className='w-100 d-md-block'>
                <form className='d-flex flex-column'>
                    <input className='mb-3 mx-1 px-2'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"/>
                    <input className='mb-3 mx-1 px-2'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"/>
                    <textarea className='mb-3 mx-1 px-2'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="message"
                        placeholder="Message"
                        rows="5"/>
                    <button className='mb-2 px-4' type="button" onClick={handleFormSubmit}>Submit</button>

                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                </form>
            </div>
        </div>
    );
}

export default Contact;