import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../../components/navBar/NavbarElements";
import xletter_logo from '../../assets/image/xletter_logo.svg';
import '../../components/navBar/NavbarElements.css';
import React from 'react';
import '../../grid/Grid.css';
import axios from "../../axios/Axios";
import { Routes, Route } from "react-router-dom";
import useSearchApi from "./search";

<Routes>
  <Route path="searchpage">
    <Route path="searchpage/:webnovelId" element={<axios />} />
  </Route>
</Routes>;



  
  





const SearchPage= () => {
  return (
        
          <div>
             <useSearchApi/>
            

          </div>

      
        
    
    

  );
};

export default SearchPage
