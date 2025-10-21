import appconfig from './dotenv.js';
import app from './app.js';
import connectDB from './config/db.js';



const PORT = appconfig.PORT

connectDB()

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
});