import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState(' ')
  const [detais, setDetais] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,detais})
    setTask(copyTask);
    console.log(task);
    
    
    setTitle('');
    setDetais('')
    
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1);
    setTask(copyTask);
    
    

  }

  return (
    <div className='h-screen bg-black lg:flex text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)}}  className='flex  items-start gap-4 flex-col lg:w-1/2 p-10 '>

          <h1 className='text-4xl font-bold'>Add Notes</h1>
        
        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 w-full 
        outline-none rounded font-medium'  
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>


        <textarea type="text" className='px-5 h-32  w-full py-2 border-2 font-medium
        outline-none rounded' placeholder='Write Details'
        value={detais}
        onChange={(e)=>{
          setDetais(e.target.value);
          
        }}/>

        <button className='bg-white active:bg-red-700 w-full outline-none text-black px-5 font-medium py-2
         rounded'>Add Note</button>
        
        </form>

        <div className='lg:border-l-2 lg:w-1/2  p-10'> 
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap h-[90%] overflow-auto gap-5 items-start justify-start mt-5'>
          {task.map(function(elem, idx){
            
            return <div key={idx} className='h-52 justify-between flex flex-col relative w-40 bg-cover p-4 pt-8 rounded-xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM8OoBXglbPQNArGXqYgg489QgtvbNvqb__SM98LOYg&s=10")] text-black '>
              <div>
              <h3 className='text-lg leading-tight  font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sxs font-medium text-gray-700'>{elem.detais}</p>
              </div>
              <button onClick={() =>{
                deleteNote(idx)}} className='bg-red-600 text-white text-xs cursor-pointer font-bold
               px-4 py-2 rounded hover:bg-purple-700'>Delete</button>
            </div>

          })}
          

          

          </div>
        </div>
    </div>
  )
}

export default App