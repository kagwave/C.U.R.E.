import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './fonts.css'
import './media/loaders/macOS.css'
import './media/loaders/basic.css';

//React Hooks
import React, { useEffect, useState } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

//UI
import Header from './components/interface/Header';
import HeaderMobile from './components/interface/Header.mobile';
import Footer from './components/interface/Footer';

//Pages
import Home from './components/pages/Landing/Landing';
import Login from './components/pages/User/Login';
import Account from './components/pages/User/Account';
import PageNotFound from './components/pages/PageNotFound';

import ErrorAlert from './components/interface/ErrorAlert';

import auth from './utils/auth/auth';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


const routes = [
  { path: '/*', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/account', element: <Account />},
  { path: '/404', element: <PageNotFound />}
];

function App() {
  
  const { error } = useSelector((state: RootState) => state.general);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const breakpoint = 900;

  const elements = useRoutes(routes);

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    (async () => {
      await auth.getUser();
    })();
  }, []);
  
  const updateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({width: width, height: height});
  }

  return ( 
    <div className="App">

      {error && <ErrorAlert/>}

      {dimensions.width > breakpoint ? 
        <Header/>
      : 
        <HeaderMobile/>
      }

      {elements}

      <Footer />

    </div>
  );
}

export default App;
