import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import startRoute from './routes/login.js';
import User from './models/User.js';
// import postRoutes from './routes/posts.js';
import session from 'express-session';
import * as passportLocal from 'passport-local';
import {passConfig} from './controllers/passportConfig.js';
import login from './routes/login.js';
import stories from './routes/stories.js';
import cookieParser from 'cookie-parser';

const localStrategy = passportLocal.Strategy;

dotenv.config({ path: './config/config.env' });


const app = express();


// Bodyparser Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use( cors({
    origin: "http://localhost:3000",
    credentials: true,
  }));

// Sessions
app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}))

// Cookie parser
app.use(cookieParser('secretcode'));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
passConfig(passport);

// Routes
app.use('/start', startRoute);
app.use(login);
app.use(stories);
// import {createUser, login, signUp} from './controllers/userController.js';
// app.post("/login", (req, res, next) => {
//     console.log(req.body);
//     console.log("Trying to login");
//     passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//         if (!user) {
//             res.status(404).json({message: "User does not exist"});
//         }
//         else {
//             req.logIn(user, err =>{
//                 if (err) throw err
//                 res.send("Succesfully authenticated");
//                 console.log(req.user);
//             });
//         }
//     })(req, res, next);
// });
// Mongo
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 4000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
// .catch((error) => console.log(`${error} did not connect`));

const conn = await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(`Mongo connection at ${conn.connection.host}`);
if (conn) {
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)) 
}

mongoose.set('useFindAndModify', false);