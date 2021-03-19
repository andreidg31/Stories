import express from 'express';

export const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.send(404);
    }
}