import React from 'react';
import {Link} from 'react-router-dom';

function poster_id_Matching(){
    const posteridmatch = ({match,webnovel})=>{
    const poster_id=match.webnovel.webnovelId;



    const url=`/IndividualNovelPageOriginal/ ${poster_id}`;
    return(
        <Link to={{pathname:url}}>
        </Link>)
  
  };}
export default poster_id_Matching