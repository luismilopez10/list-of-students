import React from 'react'
import Student from './Student'

const ListOfStudents = ({lstStudents, deleteStudent}) =>{    
    return (
        <>
        {lstStudents.map((student, index) => 
        <div key={index} >
            <Student index={index} student={student} onDelete={deleteStudent} />
        </div>
            )}
        </>
        )
}

export default ListOfStudents;