import { useSelector } from 'react-redux';
import './Account.css'
import React from 'react';
import { RootState } from '../../../redux/store';

import { capitalize } from '../../../tools/capitalize';

import UserIcon from '../../misc/UserIcon';

const Account = () => {

  const { user } = useSelector((state: RootState) => state.auth);

  return (

    <div id='page-content'>
      {user ?
        <div className='account-pg'>
          <div className='account-pg-sidebar'>
            <div>
              General
            </div>
            <div>
              Notifications
            </div>
            <div>
              Add a Course
            </div>
          </div>
          <div className='account-pg-main'>
            <div className='account-pg-header'>
              <h1>{user.display_name} <h3>{user.unity_id ? user.unity_id : user.collaborator_id}</h3></h1>
              <h2>
                <UserIcon type={user.account_type}/>
                {capitalize(user.account_type)}</h2>
            </div>
            <div className='account-items'>
              <div className='account-item'>
                <h1>Courses</h1>
                <h2>{!user.courses && "Not Currently Enrolled"}</h2>
              </div>
              <div className='account-item'>
                <h1> Contact</h1>
                <h2 style={{color: "#CC0000"}}> {user.email} </h2>
              </div>
            </div>
          </div>
        </div>
      :
        <div id="basic-loader"/>
      }
    </div>
  )
}

export default Account;