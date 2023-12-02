import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import illustration1 from './images/illustration-1.svg';
import bgCurvedShape from './images/bg-curve-desktop.svg';
import illustration2 from './images/illustration-2.svg';
import arrowIcon from './images/icon-arrow.svg';
import quotes from './images/icon-quotes.svg';
import avatar from './images/avatar-testimonial.jpg';
import Header from './header';
import Footer from './footer';

const Main = ()=> {
    const navigate = useNavigate()

    //First email validation
    const [email1, setEmail1] = useState('');
    const [isValid1, setIsValid1] = useState(false);
    const [isSubmitted1, setIsSubmitted1] = useState(false);

    useEffect(() => {
    if (isSubmitted1 && isValid1) {
      console.log(isSubmitted1, isValid1);
      navigate('/thankyou');
    }
  }, [isSubmitted1, isValid1, navigate]);


    

    const handleInputChange1 = (e) => {
        setEmail1(e.target.value);
        //setIsSubmitted1(false); // Reset the form submission state
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();

        const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid1(regex1.test(email1));
        setIsSubmitted1(true); // Set the form submission state
    };
    //------------------------------------------------------------------------------
    //Second email validation
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
    if (isSubmitted && isValid) {
      console.log(isSubmitted, isValid);
      navigate('/thankyou');
    }
    }, [isSubmitted, isValid, navigate]);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
        //setIsSubmitted(false); // Reset the form submission state
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(email));
        setIsSubmitted(true); // Set the form submission state
    };

    const handleValidation =  () => {
      if((isSubmitted1 && isValid1) || (isSubmitted && isValid)){
        console.log(isSubmitted , isValid)
        navigate('/thankyou');
      }
    }
    

    return(
        <>
           <Header />
        <main className='main-content'>

            <section className='section1'>
                <div>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>
                        Fylo stores your most important files in one secure location. 
                        Access them wherever you need, share and collaborate with friends, 
                        family, and co-workers.
                    </p>
                    <form onSubmit={handleSubmit1}>
                            <label htmlFor="email1"></label>
                            <input
                                id="email1"
                                type="text"
                                value={email1}
                                onChange={handleInputChange1}
                                placeholder="Enter your email address..."
                            />
                            <label htmlFor="submit-btn1"></label>
                            <input
                                type="submit"
                                id="submit-btn1"
                                value="Get Started"
                                onClick={handleValidation}
                            />
                        
                            {isSubmitted1 && !isValid1 && <p className='msg1' style={{ color: 'red' }}>Please check your email</p>}

                    </form>
                </div>
                <div>
                    <img src={illustration1} alt='illustration1'/>
                </div>
            </section>

            <section className='section2'>
                <img className='bgCurved' src={bgCurvedShape} alt='background-curved-shape'/>
                <div className='section2-sub2'>
                    <div>
                        <h1>Stay productive, wherever you are</h1>
                        <p className='para'>
                            Never let location be an issue when accessing your files. Fylo has you 
                            covered for all of your file storage needs.
                            <br/><br/>
                            Securely share files and folders with friends, family and colleagues for 
                            live collaboration. No email attachments required!
                        </p>
                        <a className='fylo-link' href='#'>
                            <p className='open-link'>
                                See how Fylo works <img className="arrow-image" src={arrowIcon} alt='arrow-icon'/>
                            </p>
                        </a>
                        <div className='quote-box'>
                            <img className='quote' src={quotes} alt='quotes-icon'/>
                            <p className='quote-text'>
                                Fylo has improved our team productivity by an order of magnitude. Since 
                                making the switch our team has become a well-oiled collaboration machine.
                            </p>
                            <div className='profile'>
                                <img className='avatar' src={avatar} alt='awatar'/>
                                <div className='ownerAndRole'>
                                    <p className='owner'>Kyle Burton</p>
                                    <p className='role'>Founder & CEO, Huddle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='Illust2' src={illustration2} alt='illustration2'/>
                    </div>
                </div>
            </section>

            <section className='section3'>
                <div className='section3-sub'>
                    <div>
                    <h1>Get early access today</h1>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
                            If you have any questions, our support team would be happy to help you.</p> 
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email2"></label>
                            <input
                                type="text"
                                value={email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                            />
                            
                            {/* {isSubmitted && isValid && <p className='msg' style={{ color: 'green' }}>Redirecting you to Getting Started page...</p>} */}
                            {isSubmitted && !isValid && <p className='msg' style={{ color: 'white' }}>Please check your email</p>}

                            <label htmlFor="submit-btn" type="submit"></label>
                            <input
                                type="submit"
                                id="submit-btn"
                                value="Get Started For Free"
                                onClick={handleValidation}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </main>
            <Footer />
        </>

    );

}

export default Main;