import React, { useEffect, useState } from 'react'
const axios = require('axios')

export default function Home() {

    const [apod, setApod] = useState({})

    useEffect(() => {
        async function getApod() {
            const apodData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            const fetchedData = apodData.data
            setApod(fetchedData)
            // date: "2020-12-30"
            // explanation: "Yes, but have you seen a movie of Jupiter and Saturn's Great Conjunction? The featured time-lapse video was composed from a series of images taken from Thailand and shows the two giant planets as they angularly passed about a tenth of a degree from each other.  The first Great Conjunction sequence shows a relative close up over five days with moons and cloud bands easily visible, followed by a second video sequence, zoomed out, over 9 days.  Even though Jupiter and Saturn appeared to pass unusually close together on the sky on December 21, 2020, in actuality they were still nearly a billion kilometers apart.  The two gas giants are destined for similar meet ups every 19.86 years.  However, they had not come this close, angularly, for the past 397 years, and will not again for another 60 years.  If you're willing to wait until the year 7541, though, you can see Jupiter  pass directly in front of Saturn.    Gallery: Notable images of the Great Conjunction submitted to APOD"
            // media_type: "video"
            // service_version: "v1"
            // title: "Jupiter and Saturn Great Conjunction: The Movie"
            // url: "https://www.youtube.com/embed/aokGqxVdpz0?rel=0"
        }
        getApod()
    }, [])

    return (
        <div>
            <h5>{apod.date}</h5>
            <h3>{apod.title}</h3>
            {apod.media_type === 'video'
                ? <iframe title='nasaVideo' width="420" height="315" src={apod.url}></iframe>
                : <img src={apod.url} alt="" />}
            <p>{apod.explanation}</p>
        </div>
    )
}
