import { axiosClient } from "../axios/axiosClient";
import { serverUrl, hostUrl } from "../urls";

import { store } from "../../redux/store";
import { login, logout } from "../../redux/slices/auth";
import { setErrorAlert } from "../../redux/slices/general";

const auth = {

  getUser: async () => {
    try {
      let response = await axiosClient.get('/auth/user', {withCredentials: true});
      if (Object.keys(response.data).length > 0){
        let user = response.data;
        let userType = user.account_type;
        store.dispatch(login({user: user, userType: userType}));
      } else {
        store.dispatch(logout());
      }
      return;
    } catch (err) {
      store.dispatch(setErrorAlert('There was an error fetching the user.'));
    }
  },

  login: () => {
    window.open(`${serverUrl}/auth/google?userType=${store.getState().auth.userType}`, '_self');
  },

  logout: async () => {
    try {
      const response = await axiosClient.post('/auth/logout');
      if (response.status === 200) {
        store.dispatch(logout());
        window.open(`${hostUrl}/login`, '_self');
      } else {
        store.dispatch(setErrorAlert('There was an error logging you out.'));
      }   
    } catch (err) {
      store.dispatch(setErrorAlert('There was an error logging you out.'));
    }

  }

}

export default auth;