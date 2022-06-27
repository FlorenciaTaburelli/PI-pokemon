import './About.css'
import {Link} from 'react-router-dom'
import javascript from '../../imag/javascript.png'
import nodejs from '../../imag/nodejs.png'
import logoPoke from '../../imag/logoPoke.png'
import expressLogo from '../../imag/express.png' 
import sequelizeLogo from '../../imag/sequelize.png'
import postgresLogo from '../../imag/postgres.png'
import reactLogo from '../../imag/react.png'
import reduxLogo from '../../imag/redux.png'
import htmlLogo from '../../imag/html.png'
import cssLogo from '../../imag/css.png'
import linkedin from '../../imag/linkedin.png'
import githubLogo from '../../imag/github.png'


function About() {
 
      return (
          <div className="about">
            <div className="header-about">
              <img src={logoPoke} alt='pokemon Logo' className='logoPokemon'/>
              <div className='social'>
                <a className='social-lin' href='https://www.linkedin.com/in/florencia-taburelli/' target='_blank'><img src={linkedin} className='logos' alt='linkedin'/></a>
                <a className='social-git' href='https://github.com/FlorenciaTaburelli' target='_blank'><img src={githubLogo} className='logos' alt='Github'/></a>
              </div>
            </div>
            
            <div className='description'>
              <p>This project is about creating a SPA using what i've learn on <a href='https://twitter.com/soyhenry_ok?s=20&t=apgsMUtmxxKVPiwDgFXpKQ' target="_blank">@Henry</a>,  based on Pokemon. It is a catalog, that is, a browsable list of Pokemon that you can filter by type, origin or sort by name or attack. You can access to the details of each one or, the most fun part, <Link to='/createPokemon'>create your own!.</Link></p>

              <p> The aplication retrieves data from the Pokemon API, create a database where the created pokemons will be saved, create an intermediate table and generate the association. </p>

            </div>
            
            <p> - Back-End & Database</p>
            <div className='back-end'>
              <div className='tecnologies-js'>
                <img className='logos'  src={javascript} alt='Javascript'/>
                <p className="textTool">Javascript</p>
              </div>
              <hr/>
              <div className='tecnologies'>
                <img className='logos' src={nodejs} alt='NodeJs'/>
                <p className="textTool">Node Js</p>
              </div>
              
              
              <div className='tecnologies'>
                <img className='logos' src={expressLogo} alt='Express'/>
                <p className="textTool">Express</p>
              </div>
             
             
              <div className='tecnologies'>
                <img className='logos' src={sequelizeLogo} alt='Sequelize'/>
                <p className="textTool">Sequelize</p>
              </div>
              
            
              <div className='tecnologies'>
                <img className='logos' src={postgresLogo} alt='Postgres'/>
                <p className="textTool">Postgres</p>
              </div>
              
            </div>

            <p> - Front-End</p>
            <div className='front-end'>
             
              
              <div className='tecnologies'>
                <img className='logos' src={reactLogo} alt='React'/>
                <p className="textTool">React</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={reduxLogo} alt='Redux'/>
                <p className="textTool">Redux</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={htmlLogo} alt='HTML'/>
                <p className="textTool">html</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={cssLogo} alt='CSSmodules'/>
                <p className="textTool">css modules</p>
              </div>
              
             </div>

             
             
          </div>
        );
  
 

}
//https://github.com/FlorenciaTaburelli
export default  About