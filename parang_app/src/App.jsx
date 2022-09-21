import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import WriteComponent from './BoardComponent/WriteComponent';
import NoticeComponent from './ShowMoreComponent//NoticeComponent';
import InquiryComponent from './ShowMoreComponent//InquiryComponent';
import ManualComponent from './ShowMoreComponent//ManualComponent';
import TideInfoComponent from './ShowMoreComponent//TideInfoComponent';
import ShowMoreComponent from './ShowMoreComponent/ShowMoreComponent';
import TabooInfoComponent from './ShowMoreComponent//TabooInfoComponent';
import MyLikeInfoUpdateComponent from './MyPageComponent/MyLikeInfoUpdateComponent';
import MyLikeInfoComponent from './MyPageComponent/MyLikeInfoComponent';
import InquiryHistoryComponent from './MyPageComponent/InquiryHistoryComponent';

import BoardComponent from './BoardComponent/BoardComponent';
import SignUpComponent from './Body/LogIn/SignUpComponent';
import SignInComponent from './Body/LogIn/SignInComponent';

import WriteDetailComponent from './BoardComponent/WriteDetailComponent';
import {FishingInfoPage} from "./Body/FishingInfoPage/FishingInfoPage";

import { NavBar } from './Header/NavBar';
import { IntroducingPage } from './Body/MainPage/IntroducingPage';
import { Footer } from './Footer/Footer';
import { MyPage } from './Body/MyPage/MyPage';
import FeedAll from "./Body/FeedPage/FeedAll";
import  Prac  from './Prac';
import {FeedWrite} from './Body/FeedPage/FeedWrite';

function App() {

    // let navi = useNavigate();
    return (

        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<IntroducingPage />} />
                    <Route path='/signin' element={<SignInComponent />} />
                    <Route path='/signup' element={<SignUpComponent />} />
                    <Route path='/board' element={<BoardComponent />} />
                    <Route path='/mypage' element={<MyPage />} />

                    {/* <Route path='/accountupdate' element={<AccountUpdateComponent />} /> */}
                    <Route path='/inquiryhistory' element={<InquiryHistoryComponent />} />
                    <Route path='/mylikeinfo' element={<MyLikeInfoComponent />} />
                    <Route path='/mylikeinfoupdate' element={<MyLikeInfoUpdateComponent />} />
                    <Route path='/tabooinfo' element={<TabooInfoComponent />} />
                    <Route path='/showmore' element={<ShowMoreComponent />} />
                    <Route path='/tideinfo' element={<TideInfoComponent />} />
                    <Route path='/manual' element={<ManualComponent />} />
                    <Route path='/inquiry' element={<InquiryComponent />} />
                    <Route path='/notice' element={<NoticeComponent />} />
                    <Route path='/feedAll' element={<FeedAll/>}/>
                    <Route path='/fishinginfo' element={<FishingInfoPage />} />
                    <Route path='/prac' element={<Prac />} />
                    <Route path='/feedwrite' element={<FeedWrite />} />



                </Routes>
                <Footer />
            </BrowserRouter>


        </div>
    )
}

export default App;
