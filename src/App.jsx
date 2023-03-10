import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUtils from './utils/loginUtils';
import { ErrorPage, NotFoundPage, LandingPage, LoginPage } from './pages';
import { ERROR_ROUTE, CONTENT_TYPE_ROUTE, LANDING_ROUTE } from './constants/routes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={LANDING_ROUTE} element={<LoginPage />} />
                <Route path={LANDING_ROUTE} element={<LoginUtils />} />
                <Route path={CONTENT_TYPE_ROUTE} element={<LandingPage />} />
            </Routes>
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </BrowserRouter>
    </div>
  );
}

export default App;
