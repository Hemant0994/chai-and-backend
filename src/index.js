// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";



dotenv.config({
    path: './env'
})




connectDB()



// this is first approch 
/*
import express from "express"
const app = express()



( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error : ", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app listining on port $ {process.env.PORT}`)
        })

    } catch (error) {
       console.error("ERROR: ",error) 
    }
})()
*/