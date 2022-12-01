import { config } from "dotenv";

config();

/* MONGO_ATLAS_URI_ADM = mongodb+srv://crissroot:admin88@ingsoftware.3xqr2uy.mongodb.net/petroleo?retryWrites=true&w=majority
MONGO_ATLAS_URI = mongodb+srv://ingSoftware:admin88@ingsoftware.3xqr2uy.mongodb.net/petroleo?retryWrites=true&w=majority */

export default {
    port: process.env.PORT_PETROLEO || 4000,
    //db_mongo: process.env.MONGO_LOCAL_URI,
    db_mongo:
        "mongodb+srv://ingSoftware:admin88@ingsoftware.3xqr2uy.mongodb.net/petroleo?retryWrites=true&w=majority",
};
