import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-web';
// import animationData from './waveLottie.json'
import animationData from './wave16_12.json'

export const MainWave = () => {

  const container = document.querySelector("#container")
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

  return (
    <div style={{ position: 'relative', bottom: 280, zIndex: -1, width: '100vw' }}>
      <div id="container" style={{ width: '100%' }}></div>
    </div>
  )
}
