import React, { useState, useEffect } from 'react'

import MediaCard from './MediaCard'
const axios = require('axios')

// Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
//     at Favorites 

export default (function Favorites(props) {

    console.log(props);
    // match:
    // isExact: true
    // params: { id: "5fef2e7c1367b656b8691e43" }
    // path: "/favorite/:id"
    // url: "/favorite/5fef2e7c1367b656b8691e43"

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        async function getFavorites() {
            const dbRes = await axios.get('http://localhost:3200/images')
            setFavorites(dbRes.data)
        }
        getFavorites()
    }, [])

    const favoriteId = props.match&&props.match.params.id 

    const deleteFromDB = async imageId => {
        const deleted = await axios.delete(`http://localhost:3200/image/${imageId}`)
        const updateFavorites = [...favorites]
        for (let i in updateFavorites) {
            if (updateFavorites[i]._id === deleted.data._id) {
                updateFavorites.splice(i, 1)
            }
        } setFavorites(updateFavorites)

    }

    return (
        <div>
            {props.match
                ? <MediaCard key={favoriteId} favorites={favorites.find(f => f._id === favoriteId)} deleteFromDB={deleteFromDB} idDescription={favoriteId} />
                : favorites.map((f, i) => {
                    return (
                        <div>
                            <MediaCard key={i} favorites={f} deleteFromDB={deleteFromDB} />
                        </div>
                    )
                })}

        </div>
    )
})
