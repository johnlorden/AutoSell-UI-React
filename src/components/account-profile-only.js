import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './account-profile-only.css'

const AccountProfileOnly = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <a href={props.containerUrl} target="_blank" rel="noreferrer noopener">
      <div className={`account-profile-only-container ${props.rootClassName} `}>
        <img
          id={props.userID}
          alt={props.profileImageSrc}
          src={props.profileImageSrc}
          profileImageSrc={props.imageProfileImageSrc}
          className="Profile"
        />
        {verified && (
          <img
            id="Verified-Badge"
            alt="image"
            src="/verified-badge.svg"
            loading="lazy"
            className="account-profile-only-image1 Badge-Verified"
          />
        )}
      </div>
    </a>
  )
}

AccountProfileOnly.defaultProps = {
  containerUrl: 'https://autosell.io/profile/',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  imageProfileImageSrc: '',
  userID: '',
}

AccountProfileOnly.propTypes = {
  containerUrl: PropTypes.string,
  profileImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageProfileImageSrc: PropTypes.string,
  userID: PropTypes.string,
}

export default AccountProfileOnly
