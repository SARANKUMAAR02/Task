import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Task = () => {
  const [task,setTask]=useState();

    useEffect(()=> {
      axios.get(`http://localhost:4000/api/tasks/${id}`)
      .then((res)=>{
        setTask(res.data)
        
      })
    
    }, [])
  const {id}= useParams()
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      
      <Link to='/' className='text-black font-semibold px-6 py-4 rounded-xl bg-blue-200 font-Inter text-2xl mt-8'  >Back to Home</Link>
      
      {task &&(
        <>

        {/* <h1>{task.title}</h1> */}
        <div className='w-[700px] h-[200px]  flex justify-center items-center  px-6 py-4 border border-black mt-16'>

          <div className='w-5/12 flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black   '>Task :</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black   '>Description :</h2>

          </div>
          <div className='w-7/12 flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black   '>{task.title}</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black   '>{task.description}</h2>

          </div>



        </div>
      
        </>
      
      
      )}

        

    </div>
  )
}

export default Task