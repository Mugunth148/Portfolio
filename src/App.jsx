import './App.scss'; 
import { useState } from 'react';
 import Loader from './container/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {

  const goFullScreen = () => {
    return document.fullscreenElement;
        // || document.webkitFullscreenElement;
        // || document.mozFullScreenElement;
        // || document.msFullscreenElement;     
  }

  document.addEventListener("dblclick", () => {
    if(!goFullScreen()){
      document.documentElement.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  });

  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoaderComplete(true);
  };


 return (
    <>
    {!isLoaderComplete && <Loader animationComplete={handleLoaderComplete} />}
    {/* <Loader /> */}
     <Navbar />
     {/* <Home /> */}
     {isLoaderComplete && <Home />}
    </>
  )
}

export default App
