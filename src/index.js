import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';
import Deposit from "./Routes/DepositPage"
import HomePage from "./Routes/Services/HomePage";
import ApartmentPage from "./Routes/Services/ApartmentPage";
import AirBnbPage from "./Routes/Services/AirBnbPage";
import OfficePage from "./Routes/Services/OfficePage";
import ConstructionPages from "./Routes/Services/ConstructionPage";
import ContactPage from "./Routes/ContactPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
           <Route path="/" element={<App />}/>
           <Route path="/Book" element={<Deposit />}/>
           <Route path="/Home" element={<HomePage />}/>
           <Route path="/Contact" element={<ContactPage />}/>
           <Route path="/Apartment" element={<ApartmentPage />}/>
           <Route path="/Airbnb" element={<AirBnbPage />}/>
           <Route path="/Office" element={<OfficePage />}/>
           <Route path="/Post-construction" element={<ConstructionPages />}/>
       </Routes>
    </BrowserRouter>
)