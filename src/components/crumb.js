import React from 'react'

import PropTypes from 'prop-types'

import './crumb.css'

const Crumb = (props) => {
  return (
    <div className="crumb-container breadcrumb">
      <span>/</span>
      <span className="crumb-text1">{props.text1}</span>
    </div>
  )
}

Crumb.defaultProps = {
  linkText: '',
  text1: 'Crumb',
}

Crumb.propTypes = {
  linkText: PropTypes.string,
  text1: PropTypes.string,
}

export default Crumb
