import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Card, Typography, CardContent, Grid, Box} from '@material-ui/core';
import PublicCard from './PublicCard';
import postsStyles from '../styles/Posts.js';

const Posts =() => {

  const [stories, setStories] = useState(null);
  const classes = postsStyles();

  useEffect(() => {

    axios.get("http://localhost:4000/getStories")
    .then((res) => {
      return res.data;
      
    })
    .then((data) => {
      console.log(data);
      setStories(data);
    })
  }, []);

  return (
    <div>
      <h1>Stories</h1>
      <Box className={classes.container}>
        
        {stories && stories.map(story => <PublicCard key={story._id} title={story.title} body={story.body} />)}
        
      </Box>
    </div>
  );
}

export default Posts