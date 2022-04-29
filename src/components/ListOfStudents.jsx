import React, { useState } from 'react'

const ListOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if(name && lastName){
      const student = {
        name,
        lastName
      }
      setList([...list, student])
    } 
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event)=>{
    setName(event.target.value)
  }

 const addLastName = (event) => {
    setLastName(event.target.value)
 }


  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button onClick={onAddStudent}>add student</button>
        {list.map((student, index) => <div key={index}>
          <h2>{student.name}</h2>
          <h2>{student.lastName}</h2>
        </div>)}
      </form>
    </div>
  )
}

export default ListOfStudents
