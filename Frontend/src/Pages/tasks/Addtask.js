import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addtask = () => {

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")


    const navigate=useNavigate()


    const data={
        title:title,
        description:description

    }

    function Submit(e){
        e.preventDefault();

        axios.post("http://localhost:4000/api/tasks",data)
        .then(
            navigate('/')
        )

    }



  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
   <h1 className='text-black text-3xl font-semibold font-Montserrat mb-5'>Add Task</h1>
    <form className='w-[80%] h-full flex-col justify-center items-start'>
    
    <input 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    
    type="text" placeholder='Enter the Title' className='w-[80%] bg-white/10 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400'  />
    <input 
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
    
    type="text" placeholder='Enter the description' className='w-[80%] bg-white/10 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400 mt-4'  />

    <button onClick={Submit} className='w-[80%] bg-blue-600 text-white font-semibold text-xl font-Montserrat font-normal py-4 pl-6 mt-4'>Add Task</button>

    </form>



    </div>
  )
}

export default Addtask