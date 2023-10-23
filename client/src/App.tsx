import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './fonts.css'
import './media/loaders/macOS.css'
import './media/loaders/basic.css'

//React Hooks
import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';

//UI
import Header from './components/interface/Header';
import HeaderMobile from './components/interface/Header.mobile';
import Footer from './components/interface/Footer';

//Pages
import Home from './components/pages/Home/Home';
import Login from './components/pages/User/Login';
import PageNotFound from './components/pages/PageNotFound';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <PageNotFound /> },
];

function App() {
  
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const breakpoint = 900;

  const element = useRoutes(routes);

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
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
