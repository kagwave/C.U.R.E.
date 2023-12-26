import React, { useEffect } from "react"
import Loader from "../../media/loaders/*";
import MountDisplay from "../interface/tools/MountDisplay";

const PreLoading = () => {

  useEffect(() => {
    MountDisplay(undefined, 'Loading...');
  }, []);

  return (
    <div id="page-content" style={{background: 'whitesmoke'}}>
      <Loader type="basic" color="whitesmoke" backgroundColor="gray"/>
    </div>
  )
}

export default PreLoading;