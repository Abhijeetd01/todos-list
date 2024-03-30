import React, { useState } from 'react';
import Col1Accordion from '../Accordions/Col1Accordion';
import NavTabs from '../Tabs/NavTabs';
import Datatabld from '../DataTable/Datatabld';

export default function Content() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        alert(`Email submitted: ${email}`);
        // Add your submit logic here
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);

    };

    let formStyle = {
        width: "27%",
        padding: "4%",
        margin: "0 auto"
    };

    let bodyStyle = {
        background: "#fff"
    };

    return (
        <>
            <body style={bodyStyle}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Col1Accordion />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleChangeEmail} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleChangeMessage}></textarea>
                                    <div className="row" style={formStyle}>
                                        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Datatabld />
                    </div>
                </div>
            </body>
        </>
    );
}
