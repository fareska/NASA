import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
function FavoriteCard(props) {

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
                    <Link to={`/favorite/${data._id}`}>
                        <CardMedia
                            className={classes.media}
                            image={data.imgUrl}
                            title="Contemplative Reptile"
                        />
                    </Link>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <button onClick={props.props.deleteFromDB} style={{ width: '100%', color: 'blue' }}>
                    delete
                </button>
            </div>
        </Card>
    )
}

export default FavoriteCard
