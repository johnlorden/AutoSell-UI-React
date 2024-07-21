import React from 'react'

import PropTypes from 'prop-types'

import './hashtag.css'

const Hashtag = (props) => {
  return (
    <div className="hashtag-hashtag">
      <span id="Caption" className="ActiveText">
        {props.text}
      </span>
      <span id="HashtagText" className="ActiveText">
        {props.text1}
      </span>
    </div>
  )
}

Hashtag.defaultProps = {
  text1: 'Text',
  text: '#',
}

Hashtag.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Hashtag
