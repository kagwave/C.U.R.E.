import AOS from 'aos'; 
import 'aos/dist/aos.css';

//React Hooks
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

//UI
import Header from './components/interface/Header';
import HeaderMobile from './components/interface/Header.mobile';
import Footer from './components/interface/Footer';

//Pages
import Home from './components/pages/Landing/Landing';
import Login from './components/pages/User/Login';
import Logout from './components/pages/User/Logout';
import Account from './components/pages/User/Account';
import PageNotFound from './components/pages/PageNotFound';

import ErrorAlert from './components/interface/ErrorAlert';
import Loader from './media/loaders/*';

import auth from './utils/auth/auth';

const routes = [
  { path: '/*', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/logout', element: <Logout />},
  { path: '/account', element: <Account />},
  { path: '/404', element: <PageNotFound />}
];

function App() {
  
  const { error } = useSelector((state: RootState) => state.general);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const breakpoint = 900;

  const AppRouter = useRoutes(routes);

  const [userIsFetched, setUserIsFetched] = useState(false);

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    (async () => {
      await auth.getUser();
      setUserIsFetched(true);
    })();
  }, []);
  
  const updateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({width: width, height: height});
  }

  return ( 
    <div className="App">

      {userIsFetched ? <>

        {error && <ErrorAlert/>}

        {dimensions.width > breakpoint ? 
          <Header/>
        : 
          <HeaderMobile/>
        }

        {AppRouter}

        <Footer />
      
      </>
      :

        <Loader type='basic'/>

      }

    </div>
  );
}

export default App;
