import express from 'express';
import User from '../models/User.js';
import passport from 'passport';

export const createUser = async (req, res) => {
    const body = req.body;

    try {
        const newUser = await User.create({
            username: 'andreidg',
            password: 'andrei31'
        });
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const login = async (req, res, next) => {
    console.log(req.body);
    console.log("Trying to login");
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) {
            res.status(404).json({message: "User does not exist"});
        }
        else {
            req.logIn(user, err =>{
                if (err) throw err
                res.send(user);
            });
        }
    })(req, res, next);
}

export const signUp = async (req, res) => {

    res.status(200).json({signup:'sign'});
}
