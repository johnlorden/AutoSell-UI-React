import React from 'react'

import PropTypes from 'prop-types'

import './announcment.css'

const Announcment = (props) => {
  return (
    <div className="announcment-container">
      <img alt={props.imageAlt} src={props.imageSrc} className="Announcement" />
    </div>
  )
}

Announcment.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Announcment.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Announcment
