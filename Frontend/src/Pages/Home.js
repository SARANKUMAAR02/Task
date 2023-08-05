import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [task,setTask]=useState([]);

    const loadtasks = ()=>{
      axios.get("http://localhost:4000/api/tasks")
      .then((res)=>{
        setTask(res.data.reverse())
        
      })}


    useEffect(()=> {
      loadtasks() 
    
    }, [task])


    function Delete(id){
      axios.delete(`http://localhost:4000/api/tasks/${id}`)
      .then(
        loadtasks()
      )
    }
    



  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
        
    
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <h1 className='text-black text-3xl font-semibold font-Montserrat'>Home page</h1>
        <table className="min-w-full text-center text-sm font-light my-8">
          <thead
            className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" className=" px-6 py-4">#</th>
              <th scope="col" className=" px-6 py-4">Task</th>
              <th scope="col" className=" px-6 py-4">Description</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {task.map((tasks,index)=>(

            
            <tr key={index} className="border-b dark:border-neutral-500">
              <td className="text-lg whitespace-nowrap  px-6 py-4 font-medium">{index+1}</td>
              <td className="text-lg whitespace-nowrap  px-6 py-4">{tasks.title}</td>
              <td className="text-lg whitespace-nowrap  px-6 py-4">{tasks.description}</td>
              
              <td className="flex justify-center items-center space-x-4 my-4">
              <Link to={`/tasks/${tasks._id}`} className='px-6 py-2 text-white font-normal bg-black rounded-lg'>View</Link>
                <Link to={`/tasks/e-tasks/${tasks._id}`}  className='px-6 py-2 text-white font-normal bg-blue-600 rounded-lg'>Edit</Link>
                <button onClick={()=>{Delete(tasks._id)}} className='px-6 py-2 text-white font-normal bg-red-600 rounded-lg'>Delete</button>
              </td>
            </tr>
))}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    
    </div>


  )
}

export default Home