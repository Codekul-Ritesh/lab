import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './OPD/PATIENT/Registration';
import Home from './Home';
import AppointmentScheduling from './OPD/PATIENT/AppointmentScheduling';

function App() {
  return (
    
     <div>

      <BrowserRouter>
        <div>
        <Dashboard/>
        </div>
       
       <div>
        <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/appointmentScheduling" element={<AppointmentScheduling/>} />
          </Routes>
          </div>
    
      </BrowserRouter>
      </div>
  );
}

export default App;
