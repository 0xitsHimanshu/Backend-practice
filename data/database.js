import mongoose from "mongoose";

//database URI 

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("***Database connected***"))
    .catch((e) => console.log(e))
}