import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from "./routes";
import App from '../../views/app/App';
import Home from '../../views/home/Home';
import Info from '../information/Info';
import Register from "../../views/register/Register";
import Login from "../../views/login/Login";
import RequireAuthentication from "../auth/require-authentication/RequireAuthentication";
import PageNotFound from "../../views/pageNotFound/PageNotFound";
import LandingPage from "../../views/landing/LandingPage";
import CreateHangout from "../../views/hangouts/CreateHangout";

import './Router.css'
import EditProfile from "../../views/profile/EditProfile";

const authenticate = (element) => 
  <RequireAuthentication>
    {element}
  </RequireAuthentication>;

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path={routes.home.path} element={authenticate(<Home />)} />
          <Route path="info" element={<Info />} />
          <Route path={routes.createHangout.path} element={authenticate(<CreateHangout />)} />
          <Route path={routes.editProfile.path} element={authenticate(<EditProfile />)} />
        </Route>
        <Route path={routes.register.path} element={<Register />} />
        <Route path={routes.login.path} element={<Login />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;