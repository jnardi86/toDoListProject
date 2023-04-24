import React from 'react'
import { FaTimes } from 'react-icons/fa'
import App from '../App'

const Task = ( {task, onDelete, onToggle}) => {
    return (
      <div className={`task ${task.recordar ? 
      'reminder' : '' }`} 
      onDoubleClick={()=>onToggle(task.id)}>
          <h3>{task.notas} <FaTimes style={{color: 'red' , cursor:'pointer'}} onClick={()=>onDelete(task.id)} /> 
          </h3>
          <p>{task.dia}</p>
      </div>
    )
    };  

export default Task