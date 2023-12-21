import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/404');
  }, []);

  return (  
    <div id="page-content">
      <div className="not-found">
        <h1 style={{margin: '20px', fontFamily: "Univers", color: 'white'}}>
          This page doesn't exist.
        </h1>
        <h2 style={{margin: '5px', fontFamily: "Roboto", fontSize: '15px', color: 'black', fontWeight: 'lighter'}}>
          404 Error: The requested /url destination cannot be found.
        </h2>
        <button style={{color: 'white', margin: '8px'}}
          onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
}
 
export default PageNotFound;