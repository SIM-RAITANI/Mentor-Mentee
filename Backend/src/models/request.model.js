import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    mentorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    menteeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["pending","accepted","rejected","cancelled"]
    },
    
},{
    timestamps:true
});

export const requestModel=mongoose.model("Request",requestSchema);