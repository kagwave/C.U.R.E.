import './Header.css';

import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../media/images/ncsu.png'
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return ( 
    <div id="header">
    
      <div className="banner-container" onClick={() => navigate("/")}>
        <img src={logo} height={"70%"} alt="NCSU"/>
        <div className="banner-text">
          <h1>
            CURE 
          </h1>
          <h2>
            Course-based Undergraduate Research Experience
          </h2>
        </div>
      </div>

      <nav className="navbar">

        {<div className="menuoptions">
          
          {pathname !== "/" && <NavLink className="navlink" to="/"> Home </NavLink>}
          <NavLink className="navlink" to="/login">Login</NavLink>

        </div>}

      </nav>

    </div>
  );
}

export default Header;
