import './Logout.css';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'

import ModalOverlay from "../../interface/ModalOverlay";
import Loader from '../../../media/loaders/*';

import auth from "../../../utils/auth/auth";

const Logout = () => {

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      (async function(){
        try {
          await auth.logout();
        } catch (err) {
          return null;
        }
      })()
    } else {
      navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    
    <div id="page-content" style={{background: 'red'}}>
      <ModalOverlay opacity={0.4}/>
      <div className="logout-pg">
        <Loader type="basic" color="#c67b7b" backgroundColor='white'/>
        <h1>Signing out...</h1>
      </div>

    </div>
  );
}

export default Logout;