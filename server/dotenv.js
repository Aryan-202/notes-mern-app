import { config } from "dotenv";

config();

const appconfig = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || 'development'
}

export default appconfig