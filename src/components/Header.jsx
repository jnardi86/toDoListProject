import React from 'react'
import PropTypes from 'prop-types'
import ButtonHeader from './ButtonHeader'
import Tasks from './Tasks';

const Header = ({title}) => {

  const onClick = () =>{
    console.log('Click');
  };
  
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <ButtonHeader color='green' text='New Task' onClick={onClick}/>
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