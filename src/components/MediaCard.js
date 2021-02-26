import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Media from './Media'
const axios = require('axios')


export default function MediaCard(props) {

    const data = props.data

    const favorites = props.favorites

    const [savedItem, setSavedItem] = useState([])

    const saveLiked = async () => {
        const dataToSave = {
            title: data.data[0].title,
            imgUrl: data.links[0].href,
            description: data.data[0].description
        }
        const savedData = await axios.post('http://localhost:3200/image', dataToSave)
        await setSavedItem(savedItem.push(savedData.data))/// not sure if this way is the correct way to SetState of an array value.
        console.log(savedItem)
    }

    const deleteFromDB = () => props.deleteFromDB(favorites._id)

    const popDescription = id => props.popDescription(id)


    return (
        <div>

            {data&&
            <Media display='description' data={data} saveLiked={saveLiked} popDescription={popDescription} />}

            {favorites
            &&<Media display='favorites' data={favorites} deleteFromDB={deleteFromDB}  />}

        </div>
    )
}
