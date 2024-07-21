import React from 'react'

import PropTypes from 'prop-types'

import AccountSocialFriendRequest from './account-social-friend-request'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container sidebar ${props.rootClassName} `}>
      <div className="app-component-container1">
        <h3 className="HeadingColored">
          {props.heading ?? (
            <fragment>
              <span>Announcements</span>
            </fragment>
          )}
        </h3>
        <div className="app-component-container2">
          <div
            data-thq="slider"
            data-autoplay="true"
            data-navigation="false"
            data-pagination="false"
            data-loop="true"
            data-disable-autoplay-on-interaction="false"
            data-pause-autoplay-on-mouse-enter="true"
            data-autoplay-delay="3500"
            className="app-component-slider"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="app-component-slider-slide swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="app-component-slider-slide1 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="app-component-slider-slide2 swiper-slide"
              ></div>
            </div>
            <div
              data-thq="slider-pagination"
              className="app-component-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="app-component-slider-button-prev swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="app-component-slider-button-next swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <div className="app-component-container3">
        <h3 className="HeadingColored">
          {props.heading1 ?? (
            <fragment>
              <span>Friend Request</span>
            </fragment>
          )}
        </h3>
        <div className="app-component-container4">
          <AccountSocialFriendRequest
            rootClassName="account-social-friend-request-root-class-name"
            DeclineButton={
              <fragment>
                <span>Decline</span>
              </fragment>
            }
          ></AccountSocialFriendRequest>
          <AccountSocialFriendRequest
            rootClassName="account-social-friend-request-root-class-name1"
            DeclineButton={
              <fragment>
                <span>Decline</span>
              </fragment>
            }
          ></AccountSocialFriendRequest>
          <AccountSocialFriendRequest
            rootClassName="account-social-friend-request-root-class-name2"
            DeclineButton={
              <fragment>
                <span>Decline</span>
              </fragment>
            }
          ></AccountSocialFriendRequest>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: undefined,
  heading1: undefined,
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AppComponent
