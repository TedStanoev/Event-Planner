import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Router.css'

import App from '../../App'
import Home from '../home/Home';
import Info from '../information/Info';
import Register from "../auth/register/Register";
import PageNotFound from "../pageNotFound/PageNotFound";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="/register" element={<Register />}>

        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;