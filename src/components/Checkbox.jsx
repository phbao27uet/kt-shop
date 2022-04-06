import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Checkbox = (props) => {
    const inputRef = useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    // console.log(props.value, props.checked)

    return (
        <label className="custom-checkbox">
            <input
                ref={inputRef}
                type="checkbox"
                onChange={onChange}
                value={props.value}
                checked={props.checked}
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
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
}

export default Checkbox
