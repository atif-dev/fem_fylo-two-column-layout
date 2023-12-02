import './App.css';
import Main from './main';
import { Route, Routes  } from 'react-router-dom';
import ThankYou from './thankyou';

function App() {
  return (
    <>
      <Routes>
       <Route path='/' element={<Main />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
      </Routes>
    </>
  );
}

export default App;
