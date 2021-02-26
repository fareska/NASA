import React, { useState } from 'react'

import FavoriteCard from './FavoriteCard';
import SearchedCard from './SearchedCard';


export default function Media(props) {

    const data = props.data

    return(
        props.display === 'favorites' 
        ? <FavoriteCard props={props} /> 
        : props.display === 'description' 
        ? <SearchedCard props={props} /> 
        :null
        

    )

}
