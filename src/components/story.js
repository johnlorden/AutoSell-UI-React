import React from 'react'

import PropTypes from 'prop-types'

import './story.css'

const Story = (props) => {
  return (
    <div id="Story" className={`story-container ${props.rootClassName} `}>
      <img alt={props.imageSrc} src={props.imageSrc} className="StoryIco" />
    </div>
  )
}

Story.defaultProps = {
  rootClassName: '',
  imageAlt1: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Story.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Story
