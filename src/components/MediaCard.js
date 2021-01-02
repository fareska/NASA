import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        setSavedItem(savedItem.push(savedData.data))/// not sure if this way is the correct way to SetState of an array value.
    }

    const deleteFromDB = () => props.deleteFromDB(favorites._id)

    const popDescription = id => props.popDescription(id)



    return (
        <div>

            {data
                ? <div className='search'>
                    <h4>{data.data[0].title}</h4>
                    <img onClick={popDescription} src={data.links[0].href} alt='' />
                    <button onClick={saveLiked}>Like</button>
                </div>
                : null
            }

            

            {favorites
                ? <div className='favorites'>
                    <h4>{favorites.title}</h4>
                    <Link to={`/favorite/${favorites._id}`}>
                        <img src={favorites.imgUrl} alt='' />
                    </Link>
                    {props.idDescription?<p>{favorites.description}</p>:null}      
                    <button onClick={deleteFromDB}>delete</button>
                </div>
                : null
            }


        </div>
    )
}









// *** = {
//     center: "MSFC"
//     date_created: "1976-01-01T00:00:00Z"
//     description: "The LAGEOS I (Laser Geodynamics Satellite) was developed and launched by the Marshall Space Flight Center on May 4, 1976 from Vandenberg Air Force Base, California . The two-foot diameter satellite orbited the Earth from pole to pole and measured the movements of the Earth's surface."
//     keywords: (3)["Science", "Earth Studies", "LAGEOS I"]
//     media_type: "image"
//     nasa_id: "7667283"
//     title: "Earth Science"
// }


// data = {

//     0:
//         data: Array(1)
// 0:
//         center: "HQ"
// date_created: "2015-04-07T00:00:00Z"
// description: "Earth views from the International Space Station. City lights, auroras, sunsets, oceans, moon on the horizon an other beauty shots of our planet from space."
// keywords: (2)["Earth", "ISS"]
// media_type: "video"
// nasa_id: "Earth Views"
// title: "Earth Views"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// href: "https://images-assets.nasa.gov/video/Earth Views/collection.json"
// links: Array(2)
// 0:
// href: "https://images-assets.nasa.gov/video/Earth Views/Earth Views~thumb.jpg"
// rel: "preview"
// render: "image"
// __proto__: Object
// 1:
// href: "https://images-assets.nasa.gov/video/Earth Views/Earth Views.srt"
// rel: "captions"
// __proto__: Object
// length: 2
// __proto__: Array(0)
// __proto__: Object

// }