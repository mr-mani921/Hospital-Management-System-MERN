import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    dbName:"Hospital-Management-System"
  }).then(()=>{
    console.log("Database Connected");
  }).catch((err)=>{
    console.log("Some error occured while connecting to database",err.message);
    
  }) 
};
