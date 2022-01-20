import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import useStyles from './styles';

const HomePage = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={user.media.source} title={user.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.content}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: user.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Logout" onClick={Login}>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default HomePage;