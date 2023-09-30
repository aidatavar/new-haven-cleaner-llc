import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';
import Deposit from "./Routes/DepositPage"
import Quote from "./Routes/QuotePage"
import HomePage from "./Routes/Services/HomePage";
import ApartmentPage from "./Routes/Services/ApartmentPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <BrowserRouter>
       <Routes>
           <Route path="/" element={<App />}/>
           <Route path="/Quote" element={<Quote />}/>
           <Route path="/Deposit" element={<Deposit />}/>
           <Route path="/Home" element={<HomePage />}/>
           <Route path="/Apartment" element={<ApartmentPage />}/>
       </Routes>
    </BrowserRouter>
)