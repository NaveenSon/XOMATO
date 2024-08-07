<<<<<<< HEAD

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
 <BrowserRouter>
 
   <App />


</BrowserRouter>
 </StoreContextProvider>
 
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
 
<BrowserRouter>

<App/> 


</BrowserRouter>
  

 
)
>>>>>>> 89eb54fea312c348b5e26080165db9e67e099ad9
