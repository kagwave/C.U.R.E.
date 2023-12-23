import './Logout.css';
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'


import ModalOverlay from "../../interface/ModalOverlay";
import Loader from '../../../media/loaders/*';

import auth from "../../../utils/auth/auth";
import { hostUrl } from '../../../utils/urls';

const Logout = () => {

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

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
      window.open(`${hostUrl}/login`, '_self');
    }
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