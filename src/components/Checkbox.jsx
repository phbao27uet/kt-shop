import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Checkbox = (props) => {
    const inputRef = useRef(null)

    return (
        <label className="custom-checkbox">
            <input
                ref={inputRef}
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
            />
            <span className="custom-checkbox__checkmark">
                <i className="bx bx-check"></i>
            </span>
            <span className="custom-checkbox__label">{props.label}</span>
        </label>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
}

export default Checkbox
