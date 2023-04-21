import React from 'react'
import PropTypes from 'prop-types'

const ButtonHeader = ({color, text, onClick}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} 
            className='btn' onClick={onClick}>
            {text}</button>
        </div>
    )
}

ButtonHeader.defaultProps = {
    color:'steelblue',
}

ButtonHeader.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default ButtonHeader