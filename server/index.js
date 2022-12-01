import express from "express";
import config from "./config.js";
import mediciones from "./routes/mediciones.routes.js";
import estanques from "./routes/estanque.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./database/conexion.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

connectDB();
//Setting app
app.set("port", config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(estanques);
app.use(mediciones);

app.use(express.static(join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../client/build/index.html"));
});

app.listen(config.port);
console.log("Server is runnig in port", config.port);
