import React, { useEffect } from "react"
import auth from "../../../utils/auth/auth"

const Logout = () => {

  useEffect(() => {
    auth.logout();
  }, []);

  return (
    <div id="page-content">

    </div>
  );
}

export default Logout;