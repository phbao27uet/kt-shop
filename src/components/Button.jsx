import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const size = props?.size ? `btn-${props.size}` : ''

    return (
        <button
            className={`btn ${size}`}
            onClick={props?.onClick ? props.onClick : null}
        >
            <span className="btn__txt">{props.children}</span>
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.string,
}

export default Button
