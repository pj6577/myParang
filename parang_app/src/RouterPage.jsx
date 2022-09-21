import React from 'react'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

export const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPageComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/board' element={<BoardComponent />} />
        <Route path='/mypage' element={<MyPageComponent />} />
        <Route path='/accountupdate' element={<AccountUpdateComponent />} />
        <Route path='/inquiryhistory' element={<InquiryHistoryComponent />} />
        <Route path='/mylikeinfo' element={<MyLikeInfoComponent />} />
        <Route path='/mylikeinfoupdate' element={<MyLikeInfoUpdateComponent />} />
        <Route path='/tabooinfo' element={<TabooInfoComponent />} />
        <Route path='/showmore' element={<ShowMoreComponent />} />
        <Route path='/tideinfo' element={<TideInfoComponent />} />
        <Route path='/manual' element={<ManualComponent />} />
        <Route path='/inquiry' element={<InquiryComponent />} />
        <Route path='/notice' element={<NoticeComponent />} />
        <Route path='/write' element={<WriteComponent />} />
        <Route path='/writedetail' element={<WriteDetailComponent />} />
        <Route path='/fishinginfo' element={<FishingInfoComponent />} />
        <Route path='/map' element={<MapComponent />} />
        <Route path='/map' element={<Map1_1Component />} />
        <Route path='/map' element={<Map2_1Component />} />



      </Routes>
    </BrowserRouter>
  )
}
