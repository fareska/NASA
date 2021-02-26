import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function SearchedCard(props) {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles()

    const data = props.props.data

    return (
        <Card className={classes.root}>
            <div style={{ margin: '10px' }}>
                <CardActionArea >

                    <CardMedia
                        className={classes.media}
                        image={data.links[0].href}
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.data[0].title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <button onClick={()=> props.props.saveLiked()} style={{ width: '100%', color: 'blue' }}>
                    save
            </button>
            </div>
        </Card>
    )
}

export default SearchedCard
