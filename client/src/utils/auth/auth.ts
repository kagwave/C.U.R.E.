import { axiosClient } from "../axios/axiosClient";
import { serverUrl, hostUrl } from "../urls";
import { store } from "../../redux/store";
import { logout } from "../../redux/slices/auth";

const auth = {

  login: () => {
    window.open(`${serverUrl}/auth/google?userType=${store.getState().auth.userType}`, '_self');
  },

  logout: async () => {
    const response = await axiosClient.post("/auth/logout");
    if (response.status === 200) {
      store.dispatch(logout())
      window.open(`${hostUrl}/login`, '_self');
    }    
  }

}

export default auth;