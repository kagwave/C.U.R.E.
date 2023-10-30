import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './fonts.css'
import './media/loaders/macOS.css'
import './media/loaders/basic.css';

import { axiosClient } from './utils/axios/axiosClient';
import { login, logout } from './redux/slices/auth';

//React Hooks
import React, { useEffect, useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';


//UI
import Header from './components/interface/Header';
import HeaderMobile from './components/interface/Header.mobile';
import Footer from './components/interface/Footer';

//Pages
import Home from './components/pages/Home/Home';
import Login from './components/pages/User/Login';
import Account from './components/pages/User/Account';
import PageNotFound from './components/pages/PageNotFound';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';


const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <PageNotFound /> },
  { path: '/account', element: <Account />}
];

function App() {
  
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const breakpoint = 900;

  const element = useRoutes(routes);

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    (async () => {
      try {
        let response = await axiosClient.get('/auth/user', {withCredentials: true});
        console.log(response.data);
        if (Object.keys(response.data).length > 0){
          dispatch(login({user: response.data, userType: 'student'}));
          console.log(isLoggedIn, user)
        } else {
          dispatch(logout());
        }
        return;
      } catch (err) {
        //error alert
      }
    })();
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({width: width, height: height});
  }

  return ( 
    <div className="App">

      {dimensions.width > breakpoint ? 
        <Header/>
      : 
        <HeaderMobile/>
      }

      {element}
      
      <Footer />

    </div>
  );
}

export default App;
