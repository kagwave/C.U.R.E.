import './ErrorAlert.css'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setErrorAlert } from '../../redux/slices/general';

import sleep from '../../tools/sleep';

const ErrorAlert = () => {

  const { error } = useSelector((state: any) => state.general);
  const dispatch = useDispatch();

  const closeAlert = () => {
    let alert = document.querySelector('.error-alert');
    alert!.classList.remove('draw-up-alert');
    alert!.classList.add('draw-down-alert');
    sleep(1000).then(() => {
      dispatch(setErrorAlert(null));
    })
  }

  if (error) return (
    <div className="error-alert draw-up-alert" style={{marginBottom: window.innerWidth < 900 ? '7vh' : 'auto'}}>
      <button className="close-modal" onClick={closeAlert} style={{fontSize: '27px', position: 'absolute', right: '0', top: '2px'}}>
        &times;
      </button>
      <h1>{error.status}</h1>
    </div>
  )
}

export default ErrorAlert;