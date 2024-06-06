import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';
import Estimate from "./Routes/estimatePage";
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

           <Route path="/deep-cleaning" element={<HomePage />}/>

           <Route path="/Estimate" element={<Estimate />}/>

           <Route path="/Contact" element={<ContactPage />}/>

           <Route path="/regular-cleaning" element={<ApartmentPage />}/>
           
           <Route path="/move-in" element={<AirBnbPage />}/>

           <Route path="/Office" element={<OfficePage />}/>

           <Route path="/Post-construction" element={<ConstructionPages />}/>
           
          
       </Routes>
    </BrowserRouter>
)