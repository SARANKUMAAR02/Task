const mongoose = require('mongoose')
const taskmodel=require('../models/Taskmodel')


// to create a task - post

const createTask=async (req,res)=>{
    const {title,description}=req.body
    try{
    const task = await taskmodel.create( {title,description}) 
    res.status(200).json(task)
    }
    catch(err){
        res.status(400).json({error:err.message});

    } 
}

// to get all tasks - GET



const gettasks = async (req,res)=>{
    try{
        const tasks= await taskmodel.find({})
        res.status(200).json(tasks)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}


// to get a single task - GET

const getsingle= async (req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task not found'})
    }
    try{
        const singletask=await taskmodel.findById(id);
        res.status(200).json(singletask);
    }
    catch(err){
        res.status(400).json({error:err.message})

    }

}

// to update task - PATCH

const updatetask=async (req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task not found'})
    }
    
    try{
        const task = await taskmodel.findByIdAndUpdate({

            _id:id
        },{
            ...req.body
        })
        res.status(200).json(task);
    
    }
    catch(err){
        res.status(400).json({error:err.message});

    } 
}

// to delete task - DELETE

const deletetask = async (req,res)=>{
    const {id} =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task not found'})
    }
    try{
        const task= await taskmodel.findByIdAndDelete(id)
        res.status(200).json(task)

    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}







module.exports = {createTask,gettasks,getsingle,updatetask,deletetask};