import React from 'react'

import PropTypes from 'prop-types'

import './mention.css'

const Mention = (props) => {
  return (
    <div className={`mention-hashtag ${props.rootClassName} `}>
      <span id="Caption" className="ActiveText">
        @
      </span>
      <span id="HashtagText" className="ActiveText">
        {props.text1}
      </span>
    </div>
  )
}

Mention.defaultProps = {
  text: '@',
  rootClassName: '',
  text1: 'Text',
}

Mention.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Mention
