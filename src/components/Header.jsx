import React from 'react'
import PropTypes from 'prop-types'
import ButtonHeader from './ButtonHeader'
import Tasks from './Tasks';

const Header = ({title, onAdd, showAdd}) => {


  return (
    <header className='header'>
        <h1>{title}</h1>
        <ButtonHeader 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Cerrar' : 'Tarea'} 
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title:'Tareas Pendientes',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header