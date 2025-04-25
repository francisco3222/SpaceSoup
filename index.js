require('dotenv').config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require('./config/.secret');
const localStrategy = require("passport-local").Strategy;

const app = express();

// Conectar ao MongoDB
connectDB();

// Configurações do Passport
const User = require('./Model/UseModel');
app.use(session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração da view engine
app.set("view engine", "ejs");

// Rotas
const routes = [
    require("./Routes/MensagemSuporteRoute"),
    require("./Routes/PaginaInicialRoute"),
    require('./Routes/userRoute'),
    require("./routes/SignUpRoute"),
    require("./routes/SpaceSoupThingsRoute"),
    require("./routes/PlanetasRoute"),
    require("./routes/EstrelasRoute"),
    require("./routes/OutrosRoute"),
    require("./routes/SuporteRoute"),
    require("./routes/DesenvolvedoresRoute"),
    require("./routes/DadosRoute")
];

routes.forEach(route => app.use(route));

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: err });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});