import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MountDisplay from '../interface/tools/MountDisplay';

const PageNotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    MountDisplay(undefined, undefined);
    navigate('/404');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (  
    <div id="page-content">
      <div className="not-found">
        <h1>
          This page doesn't exist.
        </h1>
        <h2>
          404 Error: The requested /url destination cannot be found.
        </h2>
        <button className="ease-in-quick" style={{color: 'white', margin: '8px'}}
          onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
}
 
export default PageNotFound;