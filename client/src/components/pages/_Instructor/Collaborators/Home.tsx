import React, { useEffect } from "react"
import MountDisplay from "../../../interface/tools/MountDisplay";

const CollaboratorsHome = () => {

  useEffect(() => {
    MountDisplay(undefined, "Collaborator");
  }, []);

  return (
    <div id="home-pg-main">

    </div>
  )
}

export default CollaboratorsHome;