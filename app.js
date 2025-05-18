// import routes from "./routes"
import express from "express";
import path from "path"
// import cors from "cors"
import http from 'http'
import fs from "fs";
import { PORT } from "./common/constants/config-constant.js"

import modelsAllRelations from "./model/index.js";


const app = express()

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

const corsOptions = { origin: process.env.ALLOW_ORIGIN };
// app.use(cors(corsOptions));

// const server = http.Server(app)
// server.listen(PORT, () => {
//     console.log(`Your application is running on ${PORT}`);
// })
modelsAllRelations.sequelize.sync({ })
    .then(() => {
        const server = http.Server(app)
        server.listen(PORT, () => {
        console.log(`Your application is running on ${PORT}`);
    })
})