import passport from 'passport';
import User from '../models/User.js';

import * as passportLocal from 'passport-local';
const localStrategy = passportLocal.Strategy;

export const passConfig = (passport) => {
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                if (password === user.password) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            })
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            cb(err, user);
        });
    })
}