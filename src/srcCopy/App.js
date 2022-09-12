import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";


import Page1 from "./components/Page1";
import Page2 from "./components/page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        height, width
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}




function App() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
        }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    let isPhone;
    console.log(windowDimensions)
    if (windowDimensions.height > windowDimensions.width &&
        windowDimensions.width <= (13/16 * windowDimensions.height)
        && windowDimensions.width <= 600){
        // console.log("Screen is phone.")
        isPhone = true;
    }
    else{
        // console.log("Screen is desktop.")
        isPhone = false;
    }
    return (
    <div className="App">
        <Page1
        windowDimensions = {windowDimensions}
        isPhone = {isPhone}/>
        <Page2
        parallaxProperty = {offsetY}
        height = {windowDimensions.height}
        isPhone = {isPhone}/>

        <Page3
            parallaxProperty = {offsetY}
            height = {windowDimensions.height}
            isPhone = {isPhone}/>
        <Page4
            isPhone = {isPhone}/>
    </div>
  );
}

export default App;
