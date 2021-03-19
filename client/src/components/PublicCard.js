import React, {} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import publicCardStyles from '../styles/PublicCard';

const PublicCard = ({title, body}) => {

  const classes = publicCardStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" color="textSecondary">
        {title}
        </Typography>
        <Typography variant="body2" component="p" >
        {body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PublicCard;