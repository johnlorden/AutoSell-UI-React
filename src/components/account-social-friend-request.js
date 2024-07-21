import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './account-social-friend-request.css'

const AccountSocialFriendRequest = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <div
      className={`account-social-friend-request-container ${props.rootClassName} `}
    >
      <a href={props.profileUrl} className="account-social-friend-request-link">
        <img
          id={props.userID}
          alt={props.profileImageSrc}
          src={props.profileImageSrc}
          className="Profile"
        />
      </a>
      <div className="account-social-friend-request-container1">
        <div className="account-social-friend-request-container2">
          <div className="account-social-friend-request-container3">
            {verified && (
              <img
                id="Verified-Badge"
                alt="image"
                src="/verified-badge.svg"
                loading="lazy"
                className="Badge-Verified"
              />
            )}
            <h1 id="User Full Name" className="UserFullName">
              {props.userFullName}
            </h1>
          </div>
        </div>
        <div className="account-social-friend-request-container4">
          <button
            type="button"
            name="AcceptFriendRequest"
            RequestFrom={props.userID}
            className="account-social-friend-request-button button"
          >
            <span>Accept</span>
          </button>
          <button
            type="button"
            RequestFrom={props.userID}
            name="DeclineFriendRequest"
            className="account-social-friend-request-button1 button"
          >
            <span>Decline</span>
          </button>
        </div>
      </div>
    </div>
  )
}

AccountSocialFriendRequest.defaultProps = {
  profileUrl: 'https://www.teleporthq.io',
  rootClassName: '',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  userID: '',
  userFullName: 'Full Name',
  imageAlt: 'image',
}

AccountSocialFriendRequest.propTypes = {
  profileUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  profileImageSrc: PropTypes.string,
  userID: PropTypes.string,
  userFullName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default AccountSocialFriendRequest
