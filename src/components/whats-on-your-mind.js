import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './whats-on-your-mind.css'

const WhatsOnYourMind = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <div id={props.postId} className={`Post ${props.rootClassName} `}>
      <div className="whats-on-your-mind-container1">
        <span>Hey</span>
        <div className="whats-on-your-mind-container2">
          <span className="whats-on-your-mind-text01">
            {props.text41 ?? (
              <fragment>
                <span className="whats-on-your-mind-text14">Name</span>
              </fragment>
            )}
          </span>
          <span>
            {props.text42 ?? (
              <fragment>
                <span>,</span>
              </fragment>
            )}
          </span>
        </div>
        <span>What&apos;s On Your Mind?</span>
      </div>
      <div className="whats-on-your-mind-container3">
        <div className="whats-on-your-mind-container4">
          <img
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
              className="whats-on-your-mind-image1 Badge-Verified"
            />
          )}
        </div>
        <div className="whats-on-your-mind-container5">
          <input
            type="text"
            id={props.textinputId}
            name="Post"
            placeholder="What's On your Mind?"
            className="whats-on-your-mind-textinput"
          />
          <button type="button" className="CommentButton">
            <span>
              {props.text3 ?? (
                <fragment>
                  <span>Post</span>
                </fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="whats-on-your-mind-container6">
        <button type="button" className="PostAction Create-Action">
          <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon">
            <path d="M938.667 381.568v260.864l-182.613-130.432zM128 170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-130.432l231.211 165.163c19.157 13.696 45.824 9.259 59.52-9.899 5.376-7.595 7.979-16.341 7.936-24.832v-426.667c0-23.552-19.115-42.667-42.667-42.667-9.301 0-17.92 2.987-24.789 7.936l-231.211 165.163v-130.432c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM128 256h469.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"></path>
          </svg>
          <span id="LikeCount" className="whats-on-your-mind-text05">
            Live Stream
          </span>
        </button>
        <button type="button" className="PostAction Create-Action">
          <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon2">
            <path d="M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 362.667c0-29.44-11.989-56.149-31.232-75.435s-45.995-31.232-75.435-31.232-56.149 11.989-75.435 31.232-31.232 45.995-31.232 75.435 11.989 56.149 31.232 75.435 45.995 31.232 75.435 31.232 56.149-11.989 75.435-31.232 31.232-45.995 31.232-75.435zM384 362.667c0 5.888-2.347 11.179-6.229 15.104s-9.216 6.229-15.104 6.229-11.179-2.347-15.104-6.229-6.229-9.216-6.229-15.104 2.347-11.179 6.229-15.104 9.216-6.229 15.104-6.229 11.179 2.347 15.104 6.229 6.229 9.216 6.229 15.104zM316.331 853.333l366.336-366.336 170.667 170.667v153.003c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM853.333 537.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0l-454.144 454.144c-5.76-2.133-10.88-5.504-15.189-9.813-7.765-7.765-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
          </svg>
          <span id="CommentCount" className="whats-on-your-mind-text06">
            Media
          </span>
        </button>
        {verified && (
          <button type="button" className="Create-Action">
            <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon4">
              <path d="M469.333 853.333h-256c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h256zM512 85.333c-23.552 0-42.667 19.115-42.667 42.667v42.667h85.333v-42.667c0-23.552-19.115-42.667-42.667-42.667zM554.667 170.667h256c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-256zM512 85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667-19.115-42.667-42.667-42.667h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667h298.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504z"></path>
            </svg>
            <span id="CommentCount" className="whats-on-your-mind-text07">
              Carousel
            </span>
          </button>
        )}
        <button type="button" className="Create-Action">
          <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon6">
            <path d="M487.339 298.667l94.848-164.267c77.867 14.379 147.499 52.267 201.344 106.069 17.749 17.749 33.792 37.248 47.829 58.197h-221.611zM314.88 426.667l-94.805-164.139c6.528-7.637 13.312-14.976 20.395-22.059 64-64 150.4-105.472 246.4-111.659l-110.592 191.573zM339.541 640h-189.696c-14.165-40.021-21.845-83.115-21.845-128 0-61.013 14.208-118.656 39.509-169.899l110.933 192.171zM745.515 489.728l-61.056-105.728h189.696c14.165 40.021 21.845 83.115 21.845 128 0 61.013-14.208 118.656-39.509 169.899l-109.909-190.379zM537.088 895.189l172.032-297.856 94.805 164.181c-6.528 7.595-13.312 14.976-20.395 22.016-64 64-150.4 105.472-246.4 111.659zM456.533 978.091c1.963 0.341 3.925 0.597 5.931 0.64 16.256 1.707 32.811 2.603 49.536 2.603 129.579 0 246.997-52.565 331.861-137.472 15.616-15.616 30.123-32.299 43.392-49.963 1.792-2.005 3.371-4.139 4.693-6.357 56.235-77.355 89.387-172.629 89.387-275.541 0-65.664-13.525-128.213-37.888-185.003-0.683-1.877-1.451-3.669-2.347-5.376-23.595-53.077-56.747-100.992-97.237-141.483-72.576-72.576-168.96-121.557-276.395-134.229-1.963-0.341-3.925-0.597-5.931-0.64-16.256-1.707-32.811-2.603-49.536-2.603-129.579 0-246.997 52.565-331.861 137.472-15.616 15.573-30.123 32.299-43.392 49.963-1.792 2.005-3.371 4.139-4.736 6.357-56.192 77.355-89.344 172.629-89.344 275.541 0 65.664 13.525 128.213 37.888 185.003 0.683 1.877 1.451 3.669 2.347 5.376 23.595 53.077 56.747 100.992 97.237 141.483 72.576 72.576 168.96 121.557 276.395 134.229zM536.661 725.333l-94.848 164.267c-77.867-14.379-147.499-52.267-201.344-106.069-17.749-17.749-33.792-37.248-47.829-58.197h221.611zM659.84 512l-73.899 128h-147.883l-73.899-128 73.899-128h147.883z"></path>
          </svg>
          <span id="CommentCount" className="whats-on-your-mind-text08">
            Story
          </span>
        </button>
      </div>
    </div>
  )
}

WhatsOnYourMind.defaultProps = {
  text1: undefined,
  imageProfileImageSrc: '',
  rootClassName: '',
  text42: undefined,
  text21: undefined,
  text2: undefined,
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text3: undefined,
  textinputId: 'Comment-Bar',
  rootClassName1: '',
  text41: undefined,
  text211: undefined,
  postId: '',
}

WhatsOnYourMind.propTypes = {
  text1: PropTypes.element,
  imageProfileImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text42: PropTypes.element,
  text21: PropTypes.element,
  text2: PropTypes.element,
  profileImageSrc: PropTypes.string,
  text3: PropTypes.element,
  textinputId: PropTypes.string,
  rootClassName1: PropTypes.string,
  text41: PropTypes.element,
  text211: PropTypes.element,
  postId: PropTypes.string,
}

export default WhatsOnYourMind
