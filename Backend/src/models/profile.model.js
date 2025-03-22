import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({ 
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    profilePic:{
        type:String,
        default:""
    },
    skills:{
        type:[String],
        default:[]
    },
    experience: [
        {
          title: { type: String, required: true }, // Job title, e.g., "Software Engineer"
          company: { type: String, required: true }, // Company/Organization name
          startDate: { type: Date, required: true },
          endDate: { type: Date }, // Can be null for current jobs
          description: { type: String }, // Optional details about responsibilities
        }
      ],
      education: [
        {
          degree: { type: String, required: true }, // Example: "B.Tech in Computer Science"
          institution: { type: String, required: true }, // University name
          startYear: { type: Number, required: true }, // Example: 2018
          endYear: { type: Number }, // Can be null if still studying
          grade: { type: String }, // Optional field for CGPA/Percentage
          description: { type: String } // Additional details (e.g., thesis, projects)
        }
      ],
},{
    timestamps:true
});

export const profileModel=mongoose.model("Profile",profileSchema);