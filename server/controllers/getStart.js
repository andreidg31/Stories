import express from 'express';
import User from '../models/User.js';

const getStart = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default getStart;