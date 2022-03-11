import React, { useState } from 'react'

const AddMovie = (addM) => {
    const [newmovie, setNewmovie] = useState("")
    const handleChange = (e) => setNewmovie(e.target.value) ; 

const handleSubmit = (el) => {
    e.preventDefault() ;
    addM (newmovie) ;
    setNewmovie ("") ; 
}


  return (
    <div>
        <h1>Add movie</h1>
        <form onSubmit={handleSubmit}>
            <input type ="text" value={newmovie} onChange={handleChange}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddMovie