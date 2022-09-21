import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-web';
import animationData from './fishingError.json'


export const FishingLottie = () => {

  const container = document.querySelector("#container")
  // const container = document.getElementById('container')
  const [test, setTest] = useState(false);



  useEffect(() => {
    console.log("로티 이펙트 실행")

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
    <div>
      <div id="container" ></div>
    </div>
  )
}
