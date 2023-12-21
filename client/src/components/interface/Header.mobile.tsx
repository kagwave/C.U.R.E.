import './Header.mobile.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import logo from '../../media/images/ncsu.png';

import MountDisplay from './tools/MountDisplay';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import auth from '../../utils/auth/auth';


const HeaderMobile = () => {

  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    MountDisplay(undefined, undefined);

    return () => {
      closeMenu();
    }
  }, []);

  const openMenu = () => {
    let body = document.getElementById("page-content"); 
    let navmenu = document.getElementById("nav-menu-mobile");
    let navbtn = document.querySelector(".nav-dropbtn-mobile");
    let header = document.querySelector(".header-bar-mobile");
    let footer = document.getElementById("footer-container");
    if (navbtn) {
      navbtn!.classList.remove('menu-closed');
      navbtn!.classList.add('menu-open');
    }
    if (header) {
      header!.classList.remove('nonactive-header');
      header!.classList.add('active-header');
    }
    if (navmenu) {
      navmenu!.classList.remove("slide-out-menu");
      navmenu!.classList.add("slide-in-menu");
      navmenu!.classList.remove('hide-element');
      navmenu!.classList.add('show-blockelement');
    }
    if (body) {
      body!.classList.add("blur-effect");
      body!.style.pointerEvents = "none";
    }
    if (footer) {
      footer!.classList.add("blur-effect");
    }
    document.body.style.overflow = "hidden";
    setIsMenuOpen(true);
    return;
  }

  const closeMenu = async () => {
    let body = document.getElementById("page-content"); 
    let navmenu = document.getElementById("nav-menu-mobile");
    let navbtn = document.querySelector(".nav-dropbtn-mobile");
    let header = document.querySelector(".header-bar-mobile");
    let footer = document.getElementById("footer-container");

    if (navbtn) {
      navbtn!.classList.remove('menu-open');
      navbtn!.classList.add('menu-closed');
    }
    if (header) {
      header!.classList.remove('active-header');
      header!.classList.add('nonactive-header');
    }
    if (navmenu) {
      navmenu!.classList.remove("slide-in-menu");
      navmenu!.classList.add("slide-out-menu");
      navmenu!.classList.remove('show-blockelement');
      navmenu!.classList.add("hide-element");
    }
    if (body) {
      body!.classList.remove("blur-effect");
      body!.style.pointerEvents = "auto";
    }
    if (footer) {
      footer!.classList.remove("blur-effect");
    }
    document.body.style.overflow = "auto";
    setIsMenuOpen(false);
    return;
  }

  const showNavigation = () => {
    if (isMenuOpen === false){
      openMenu();
    } else {
      closeMenu();
    }
  }

  return (

    <div className="header-bar-mobile">

      <div className="logo-mobile" onClick={() => {navigate('/'); closeMenu()}}>
        <img src={logo} height={"70%"} alt="NCSU"/>
        <div className="banner-text">
          <h1>
            C.U.R.E. 
          </h1>
        </div>
      </div>

      <button className="nav-dropbtn-mobile menu-closed"
        onClick={showNavigation}
      >
        {!isLoggedIn ?
          <NavLink className="navlink" to="/login">Login</NavLink>
        :
          <div className="dropbtn">
            <div id="seperator" style={{height: '100%', width: '2px', margin: '0 10px', background: 'rgb(200,200,200)'}}></div>
            <img src={user.profile_photo} id="profile_icon" alt={user.display_name}/>
            <span className="freespace"></span>
            <FontAwesomeIcon className="caret" icon={faCaretDown} size="xs"/>
          </div>
        }
      </button>

      <div id="nav-menu-mobile" className="hide-element slide-in-menu">

        <div className="menu-options-mobile">
          <ul style={{listStyleType: "none", padding: "0 0 0 2vh", marginTop: '10px', textAlign: "center"}}>
            <li><NavLink className="navlink-mobile" onClick={closeMenu} to="/account" >Account</NavLink></li>
            <li><div className="navlink-mobile" onClick={() => {closeMenu(); auth.logout()}}> Logout</div></li>
          </ul>
        </div>

        <div className="bottom-panel-mobile">

        </div>

      </div>

    </div>
  );
}
 
export default HeaderMobile;