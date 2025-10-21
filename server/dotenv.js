import { config } from "dotenv";

config();

const appconfig = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT
}

export default appconfig