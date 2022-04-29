import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormStudents from './components/FormStudents'

function App() {
  return (
    <div className='container'>
      <h1>List of students</h1>
      <FormStudents />
    </div>
  )
}

export default App
