import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignUpComponent from './Body/LogIn/SignUpComponent';
import SignInComponent from './Body/LogIn/SignInComponent';
import { FishingInfoPage } from "./Body/FishingInfoPage/FishingInfoPage";
import { NavBar } from './Header/NavBar';
import { IntroducingPage } from './Body/MainPage/IntroducingPage';
import { Footer } from './Footer/Footer';
import { MyPage } from './Body/MyPage/MyPage';
import FeedAll from "./Body/FeedPage/FeedAll";
import Prac from './Prac';
import { FeedWrite } from './Body/FeedPage/FeedWrite';
import {FishingLottie} from './LottieFiles/FishingLottie';


export const RouterPage = () => {
  return (

    <div style={{ position: 'relative' }}>
        <BrowserRouter>
        
            <NavBar />
            <div style={{ position: 'relative', zIndex: '0' }}>
                <Routes>
                    <Route path='/' element={<IntroducingPage />} />
                    <Route path='/signin' element={<SignInComponent />} />
                    <Route path='/signup' element={<SignUpComponent />} />
                    <Route path='/mypage' element={<MyPage />} />

                    {/* <Route path='/accountupdate' element={<AccountUpdateComponent />} /> */}
                    <Route path='/feedAll' element={<FeedAll />} />
                    <Route path='/fishinginfo' element={<FishingInfoPage />} />
                    <Route path='/prac' element={<Prac />} />
                    <Route path='/feedwrite' element={<FeedWrite />} />
                    <Route path="*" element = {<FishingLottie/>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>


    </div>
)

}
