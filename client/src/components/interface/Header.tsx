import './Header.css';
import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../../media/images/ncsu.png';
import auth from '../../utils/auth/auth';

const Header = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isLoggedIn, user, userType } = useSelector((state: RootState) => state.auth)

  return ( 
    <div id="header">
    
      <div className="banner-container" onClick={() => navigate("/")}>
        <img src={logo} height={"70%"} alt="NCSU"/>
        <div className="banner-text">
          <h1>
            C.U.R.E. 
          </h1>
          <h2>
            Course-based Undergraduate Research Experience
          </h2>
        </div>
      </div>

      <nav className="navbar">

        {<div className="menuoptions">
          
          {pathname !== "/" && <NavLink className="navlink" to="/"> Home </NavLink>}

          <div id="seperator" style={{height: '100%', width: '2px', margin: '0 10px', background: 'rgb(200,200,200)'}}></div>

          {!isLoggedIn ?
            <NavLink className="navlink" to="/login">Login</NavLink>
          :
            <div className="dropdown navlink">
              <NavLink to="/account" className="dropbtn">
                <img src={user.profile_photo} id="profile_icon" alt={user.display_name}/>
                {user.unity_id}
                <span className="freespace"></span>
                <FontAwesomeIcon className="caret" icon={faCaretDown} size="xs"/>
              </NavLink>
              <div className="dropdown-content-container" style={{marginTop: 5}}>
                <div className="menu-gap-fill"></div>
                <div className="dropdown-content fade-in-quick" >
                  <NavLink className="navlink" to="/account"> Account </NavLink>
                  <div className="navlink" onClick={auth.logout}> Logout </div >
                </div>
              </div>
            </div>
          }

        </div>}

      </nav>

    </div>
  );
}

export default Header;
