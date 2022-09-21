import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-web';
// import animationData from './waveLottie.json'
import animationData from './startButton.json'
import { useNavigate } from "react-router-dom";

export const LastButton = () => {

    const container = document.querySelector("#container2")
    // const container = document.getElementById('container')
    const [test, setTest] = useState(false);

    useEffect(() => {
        Lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,

        })
        setTest(true)
    }, [test])


    const navigate = useNavigate();


    return (
        <div onClick={() => { navigate("/fishinginfo") }} style={{ position: 'relative', width: '40vw', margin: "auto", zIndex: 5 }}>
            <div id="container2" style={{ width: '100%' }}></div>
        </div>
    )
}
