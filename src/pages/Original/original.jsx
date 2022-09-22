import React from 'react';
import './original.css';
import Row from '../../Row/Row';
import requests from '../../requests/requests';
import { Nav, NavLink, NavMenu} from "../../components/Navbar/NavbarElements";

function Original(){
  return(
    <div className="original">
      <Nav>  
        <NavMenu>
          <NavLink to="/original" >
            ALL
          </NavLink>
          <NavLink to="/xloriginalbl" >
            BL
          </NavLink>
          <NavLink to="/xloriginalgl" >
            GL
          </NavLink>
          <NavLink to="/xloriginalhl" >
            HL
          </NavLink>    
        </NavMenu>  
      </Nav>

      <Row
        title="New XL Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
      <Row title="XL Originals-Korea" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
      <Row title="XL Originals 인기작품" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
      <Row title="XL Originals-BL" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
      <Row title="XL Originals-GL" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
      <Row title="XL Originals-HL" fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>

    </div>
  );
}

export default Original;