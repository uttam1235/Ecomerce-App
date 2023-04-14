import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors  from 'colors';
dotenv.config()
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect To Mongodb Database ${conn.connection.host}`.bgMagenta);

    } catch (error) {
        console.log(`Error in MOngodb ${error}`.bgRed.white)
    }
}
export default connectDB;