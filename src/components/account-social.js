import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './account-social.css'

const AccountSocial = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <a href={props.profileUrl} target="_blank" rel="noreferrer noopener">
      <div className={`account-social-container ${props.rootClassName} `}>
        <img
          id={props.userID}
          alt={props.profileImageSrc}
          src={props.profileImageSrc}
          className="Profile"
        />
        <div className="account-social-container1">
          <div className="account-social-container2">
            {verified && (
              <img
                id="Verified-Badge"
                alt="image"
                src="/verified-badge.svg"
                loading="lazy"
                className="Badge-Verified"
              />
            )}
            <h1
              id="User Full Name"
              userFullName={props.headingUserFullName1}
              className="UserFullName"
            >
              {props.userFullName}
            </h1>
          </div>
        </div>
      </div>
    </a>
  )
}

AccountSocial.defaultProps = {
  headingUserFullName: '',
  headingUserFullName1: '',
  planName: 'Plan Name',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  userID: '',
  profileUrl: 'https://www.teleporthq.io',
  userFullName: 'Full Name',
  imageAlt: 'image',
  rootClassName: '',
}

AccountSocial.propTypes = {
  headingUserFullName: PropTypes.string,
  headingUserFullName1: PropTypes.string,
  planName: PropTypes.string,
  profileImageSrc: PropTypes.string,
  userID: PropTypes.string,
  profileUrl: PropTypes.string,
  userFullName: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AccountSocial
