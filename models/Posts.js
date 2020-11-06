import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    avatar:{
        type:String
    },
    likes:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref: 'users'
            },
            text:{
                type:String,
                 required:true
            },
            name:{
                type:String
            },
            avatar:{
                type:String
            }
        }
    ]
});