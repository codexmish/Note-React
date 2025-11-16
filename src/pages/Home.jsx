import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {

  const [inputData, setInputData] = useState('')

  const db = getDatabase();

  const handalSubmit = (e)=>{
    e.preventDefault()

    set(ref(db, 'users/'), {
    data: inputData
  });


  }


  return (
    <>
    <div className="container mt-20">

    <form onSubmit={handalSubmit} action="">
      <input onChange={(e)=>setInputData(e.target.value)} type="text" className='border '/>
      <button>Go</button>
    </form>
    </div>
    
    </>
  )
}

export default Home