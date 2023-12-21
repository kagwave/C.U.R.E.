import { useEffect } from "react"
import auth from "../../../utils/auth/auth"

const Logout = () => {

  useEffect(() => {
    auth.logout();
  }, []);

  return null;
}

export default Logout;