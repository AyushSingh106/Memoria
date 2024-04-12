import mongoose from "mongoose";

  // mongoose.connect(process.env.MONGO_URL);
const userSchema=mongoose.Schema({
  fullName:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  }
  // boards:{
  //   type:Array,
  //   default:[]
  // },
  // posts:[{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref: "post"
  //       }]
},{timestamps:true});
// userSchema.plugin(plm);
export const User=mongoose.model("user",userSchema);