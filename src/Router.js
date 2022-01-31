import React from 'react';
import {Route, Routes} from 'react-router-dom'
import InfoPage from './pages/InfoPage';
import OfferPage from './pages/OfferPage';
import VideoPage from './pages/VideoPage';

const Router = () => {
  return (
      <Routes>
          <Route path={'*'} element={<VideoPage/>}/>
          <Route path={'/video'} element={<VideoPage/>}/>
          <Route path={'/ofer'} element={<OfferPage/>}/>
          <Route path={'/info'} element={<InfoPage/>}/>
      </Routes>
  )
};

export default Router;
