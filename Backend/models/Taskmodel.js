const mongoose=require('mongoose')

const schema=mongoose.Schema;


const TaskSchema= new schema(

    {
        title:{
            type:String,
            require:true,

        },
        description:{
            type:String,
        },
    },
    {timestamps: true}     // inorder to store the date like stuffs
)



module.exports = mongoose.model("Task",TaskSchema)