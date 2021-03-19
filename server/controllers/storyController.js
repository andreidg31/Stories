import express from 'express';
import Story from '../models/Story.js';

export const createStory = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        body.user = req.body.user;
        await Story.create(body);
        res.redirect('/');
    }
    catch (err) {
        res.status(404).json({message: error.message});
    }
}

export const deleteStory = async (req, res) => {
    const body = req.body;

    try {
        await Story.create(body);
        res.redirect('/');
    }
    catch (err) {
        res.status(404).json({message: error.message});
    }
}

export const getStories = async (req, res) => {

    try {
        const stories = await Story.find().populate('user');
       
        console.log("Test");
        console.log(stories);
        res.send(stories);
    }
    catch (err) {
        res.status(404).json({message: error.message});
    }
}