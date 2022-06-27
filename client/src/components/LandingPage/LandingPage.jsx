import {React} from "react"
import { Link } from 'react-router-dom'
import './LandingPage.css'
import imgLanding from '../../imag/14071.gif'

function LandingPage() {



  return (
    <div className="LandingPage">
      <div className="container-welcome">
        <h1 className='welcome'>Welcome</h1>
        <Link to='/home/' className='landing-home'> {'> '} HOME {' < '}</Link> 
      </div>
      <div className="imgLanding">
       <img src={imgLanding} alt='landing image'  />
      </div>
      
      
    </div>
  );
}

export default LandingPage;