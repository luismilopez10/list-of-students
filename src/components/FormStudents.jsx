import React, { useState } from 'react'
import ListOfStudents from './ListOfStudents';

const FormStudents = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lstStudents, setLstStudents] = useState([]);
  
  const addName = (event)=>{
    setName(event.target.value);
  }
  
  const addLastName = (event) => {
    setLastName(event.target.value);
  }
  
  const onAddStudent = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random()*10000);
    if(name && lastName){
      const student = {
        id,
        name,
        lastName
      }
      setLstStudents([...lstStudents, student]);
    } 
  }
  
  const deleteStudent = (id) => {
    setLstStudents(lstStudents.filter(student => student.id !== id));
  }

  return (
    <div>
      <form className='form-control'>
          <label>Name</label>
              <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button className='btn btn-block' onClick={onAddStudent}>add student</button>
        <ListOfStudents lstStudents={lstStudents} deleteStudent={deleteStudent}/>
      </form>
    </div>
  )
}

export default FormStudents;
