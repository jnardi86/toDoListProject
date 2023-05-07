import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [notas, setNotas] = useState('');
    const [dia, setDia] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=> {
        e.preventDefault();

        if(!notas){
            alert('Por favor, ingrese una tarea')
            return 
        }

        onAdd ({notas, dia, reminder});
        
        setNotas('')
        setDia('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Tarea</label>
            <input 
            type="text" 
            placeholder='Nueva Tarea' 
            value={notas}
            onChange={(e) => setNotas(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Día</label>
            <input 
            type="text" 
            placeholder='Seleccionar día' 
            value={dia}
            onChange={(e) => setDia(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Recordar</label>
            <input 
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='Agregar Tarea' className='btn btn-block'/>
    </form>
  )
}

export default AddTask