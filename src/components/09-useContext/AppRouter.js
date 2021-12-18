import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          {/* <Navigate to="/" exact/> */}
        </Routes>
      </div>
    </Router>
  );

}
