import logo from './logo.svg';
import './App.scss';
import Home from './components/inc/pages/home';
import AboutMe from './components/inc/pages/AboutMe';
import Social from './components/inc/pages/Social';
import AboutMeforreal from './components/inc/pages/AboutMeforreal';
import Projekte from './components/inc/pages/Projekte';

function App() {
  return (
    <div>
        <Home></Home>
        <AboutMeforreal></AboutMeforreal>
        <AboutMe></AboutMe>
        <Projekte></Projekte>
        <Social></Social>
    </div>
  ); 
}

export default App;
