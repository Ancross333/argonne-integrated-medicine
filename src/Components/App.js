import { useState } from 'react';
import '../CSS/App.css';
import MainContent from './Dynamic Sections/Main Content/MainContent';
import Footer from './Static Sections/Footer/Footer';
import Navbar from './Static Sections/Navbar/Navbar';
import Line from './Static Sections/Prefabs/Line';

function App() {

  const [activeScreen, setActiveScreen] = useState("Home");

  return (
    <div className="App">
      <Navbar setActiveScreen={setActiveScreen}/>
      <Line color='rgb(182,227,212)' className='dmargin' />
      <MainContent activeScreen={activeScreen} />
      <Footer />
    </div>
  );
}

export default App;
