import React, { useEffect, useState } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const axios = require('axios')

export default function Home() {

    const [apod, setApod] = useState({})

    useEffect(() => {
        async function getApod() {
            const apodData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            const fetchedData = apodData.data
            setApod(fetchedData)
        }
        getApod()
    }, [])

    return (
        <Card className='{classes.root}'>
            <CardActionArea>
                <CardMedia
                    style={{width:'400', hight:'400'}}
                    component="img"
                    image={apod.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {apod.title}
                    </Typography>

                    <Typography variant="h6" color="textSecondary" component="h6">
                        <p>{apod.date}</p>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {apod.explanation}
                    </Typography>

                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>




    )
}
