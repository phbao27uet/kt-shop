import React from 'react'
import PropTypes from 'prop-types'

const Helmet = (props) => {
    document.title =
        props.option === '1' ? `KTS - ${props.title}` : `${props.title} | KTS`

    React.useEffect(() => {
        scrollTo(0, 0)
    }, [])

    return <div>{props.children}</div>
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
    option: PropTypes.string,
}

export default Helmet
