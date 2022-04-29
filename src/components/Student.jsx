import { BiTrashAlt } from 'react-icons/bi'

const Student = ({student, onDelete}) => {    
  return (
    <div className='student'>
        <h3>{student.name} {student.lastName} <BiTrashAlt onClick={() => onDelete(student.id)}/></h3>
    </div>
  )
}

export default Student;