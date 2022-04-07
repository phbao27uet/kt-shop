import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
    const [breadcrumbLv3, setBreadcrumbLv3] = useState('')

    // console.log(props.breadcrumb_lv2)
    // _.capitalize(props.breadcrumb_lv2)
    // console.log(_.trimEnd(props.breadcrumb_lv3, '('))

    useEffect(() => {
        if (props.breadcrumb_lv3) {
            const index = props.breadcrumb_lv3.indexOf('(')

            const string =
                index === -1 ? props.breadcrumb_lv3 : props.breadcrumb_lv3.slice(0, index).trim()
            setBreadcrumbLv3(string)
        }
    }, [props.breadcrumb_lv3])

    return (
        <div className="breadcrumb">
            <Link to="/">
                <span className="breadcrumb__item">Home</span>
            </Link>
            <span>
                <i className="bx bx-chevron-right breadcrumb__separator"></i>
            </span>

            <Link to={`/${props.breadcrumb_lv2}`}>
                <span className="breadcrumb__item ">{_.capitalize(props.breadcrumb_lv2)}</span>
            </Link>
            <span>
                <i className="bx bx-chevron-right breadcrumb__separator"></i>
            </span>

            <span className="breadcrumb__item active">{breadcrumbLv3}</span>
        </div>
    )
}

Breadcrumb.propTypes = {
    breadcrumb_lv2: PropTypes.string.isRequired,
    breadcrumb_lv3: PropTypes.string.isRequired,
}

export default Breadcrumb
