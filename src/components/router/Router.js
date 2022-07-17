import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Router.css'

import App from '../../App'
import Home from '../home/Home';
import Info from '../information/Info';
import Register from "../auth/register/Register";
import Login from "../auth/login/Login";
import RequireAuthentication from "../auth/require-authentication/RequireAuthentication";
import PageNotFound from "../pageNotFound/PageNotFound";
import CreateEvent from "../events/CreateEvent";

const authenticate = (element) => 
  <RequireAuthentication>
    {element}
  </RequireAuthentication>;

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="create-event" element={authenticate(<CreateEvent />)}
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;