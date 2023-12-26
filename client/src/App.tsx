import AOS from 'aos'; 
import 'aos/dist/aos.css';

//React Hooks
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import PreLoading from './components/pages/PreLoading';

import ErrorAlert from './components/interface/ErrorAlert';

import auth from './utils/auth/auth';
import { setUserIsFetched } from './redux/slices/general';

const routes = [
  { path: '/*', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/logout', element: <Logout />},
  { path: '/account', element: <Account />},
  { path: '/404', element: <PageNotFound />}
];

function App() {
  
  const { error, userIsFetched } = useSelector((state: RootState) => state.general);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const breakpoint = 900;

  const dispatch = useDispatch();

  const AppRouter = useRoutes(routes);

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    if (!userIsFetched) {
      (async () => {
        try {
          await auth.getUser();
          dispatch(setUserIsFetched(true));
        } catch (err) {
          //handle this
          return null;
        }
      })();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      {userIsFetched ? 
        AppRouter
      : 
        <PreLoading/>
      }

      <Footer />

    </div>
  );
}

export default App;
