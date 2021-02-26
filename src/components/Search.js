import React, { useState } from 'react'
import MediaCard from './MediaCard'

const axios = require('axios')

export default (function Search() {

    const [searchVal, setSearchVal] = useState('')
    const [dataToRender, setDataToRender] = useState([])


    const getData = async ()=>{
        if(searchVal !== ''){
            const res = await  axios.get(`https://images-api.nasa.gov/search?q=${searchVal}&media_type=image`)
            const fetched = res.data.collection.items
            setDataToRender(fetched)
        }else alert('Please enter search Value')
    }

    return (
        <div>
                <input type="text" placeholder='Search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                <button onClick={getData}>Search a Planet</button>
                {dataToRender.map((d, i) => <MediaCard key={i} data={d} />)}
            </div>
        )
    })
