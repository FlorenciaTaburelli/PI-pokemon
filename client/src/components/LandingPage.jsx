import React from "react"
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="LandingPage">
      <h1>Welcome</h1> 
      <Link to='/home/'>HOME</Link> 
    </div>
  );
}

export default LandingPage;