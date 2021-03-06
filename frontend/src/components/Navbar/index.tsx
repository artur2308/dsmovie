import {ReactComponent as GitHubIcon} from '../../assets/img/gitHub.svg';
import './styles.css';

function Navbar() {
    return(
       <header>
       <nav className='container'>
        <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <a href="https://github.com/artur2308">
        <div className="dsmovie-contat-conteiner">
            <GitHubIcon/>
            <p className='dsmovie-contact-link'>DevSuperior</p>
        </div>
        </a>
      </div>
    </nav>
  </header>
    );
}
export default Navbar;