import './Login.css'

import { useEffect } from 'react';

import { serverUrl } from '../../../utils/urls';

import ModalOverlay from '../../interface/ModalOverlay';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: any) => {
      if (e.target.id === 'modal-overlay') {navigate('/');}
    }
    document.addEventListener("click", handler, true);
    
    return () => {
      document.removeEventListener("click", handler, true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = () => {
    window.open(`${serverUrl}/auth/google`, '_blank');
  }

  return (
    <div id="page-content" style={{background: 'red'}}>

      <ModalOverlay opacity={0}/>

      <div id="login-modal">
        <div className="login-header">
          <div className="login-header-text">
            <FontAwesomeIcon icon={faBuildingColumns} style={{marginTop: '-5px'}}/> 
            <h1>Login</h1>
          </div>
        </div>

        <div className="login-body">

          <div className='login-options'>

            <div className='login-option' onClick={login}>
              <i className="fa-light fa-graduation-cap"></i>
              <h1>Student</h1>
            </div>

            <div className='login-option'>
              <i className="fa-light fa-user-tie-hair"></i>
              <h1>Collaborator</h1>
            </div>

            <div className='login-option'>
              <i className="fa-light fa-chalkboard-teacher"></i>
              <h1>Instructor</h1>
            </div>
          </div>

        </div>

        <div className="login-footer">
          <div className="modal-footer-text"></div>
        </div>

      </div>

    </div>
  )

}

export default Login;