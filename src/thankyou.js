import './App.css';
import agreementgif from './images/agreement.gif'
import close from './images/close.png';
import {useNavigate} from 'react-router-dom';

const ThankYou = () => {
	const navigate = useNavigate()
	const MoveToHomePage = ()=> {
		navigate('/');
	}

  return (
    <main>
    <div className="close"><img onClick={MoveToHomePage} src={close} alt='cross-image' title="close"/></div>
    <div className="thank-you-main">
			<img src={agreementgif} alt="Thank-You-gif"/>
			<h1>Thanks for Subscribing.</h1>
			<p>Soon, you will receive an email with details to activate your account.</p>
		</div>
	</main>
  );
};

export default ThankYou;