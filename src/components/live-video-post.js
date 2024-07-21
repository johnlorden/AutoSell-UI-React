import React, { useState } from 'react'

import PropTypes from 'prop-types'

import AccountSocial from './account-social'
import Hashtag from './hashtag'
import Mention from './mention'
import './live-video-post.css'

const LiveVideoPost = (props) => {
  const [more, setMore] = useState(false)
  return (
    <div id={props.postId} className="live-video-post-container Post">
      <div className="live-video-post-container1">
        {more && (
          <div className="live-video-post-container2">
            <button
              id="ReportPostButton"
              name="ReportPostButton"
              type="button"
              ReportPostID={props.postId1}
              className="live-video-post-button"
            >
              <span>
                {props.button ?? (
                  <fragment>
                    <span>Report Post</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        )}
        <AccountSocial
          imageAlt
          userFullName={props.userFullName}
          rootClassName="account-social-root-class-name8"
          profileImageSrc={props.profileImageSrc}
        ></AccountSocial>
        {!more && (
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setMore(true)}
            className="subactions"
          >
            <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
          </svg>
        )}
        {more && (
          <svg
            id="Close"
            viewBox="0 0 1024 1024"
            onClick={() => setMore(false)}
            className="subactions"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        )}
      </div>
      <div className="live-video-post-container3">
        <span id="Caption">
          {props.text ?? (
            <fragment>
              <span>Text</span>
            </fragment>
          )}
        </span>
        <Hashtag></Hashtag>
        <Mention rootClassName="mention-root-class-name9"></Mention>
      </div>
      <div id="Images" className="live-video-post-container4">
        <video
          src={props.videoSrc}
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="VideoPost PostImage Live"
        ></video>
      </div>
      <div className="live-video-post-container5">
        <button type="button" className="PostAction">
          <svg viewBox="0 0 1024 1024" className="live-video-post-icon04">
            <path d="M256 512v384h-85.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM640 341.333v-128c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005c-17.28 0-32.171 10.283-38.997 25.344l-159.403 358.656h-100.267c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v298.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h609.28c32.725 0.384 63.232-11.989 86.229-32.555 21.547-19.285 36.565-45.909 41.259-76.075l58.88-384.085c5.333-34.987-4.096-68.864-23.467-95.189s-48.939-45.355-83.84-50.645c-7.040-1.067-14.208-1.579-20.992-1.451zM554.667 384c0 23.552 19.115 42.667 42.667 42.667l245.12 0.085 3.755 0.427c11.648 1.749 21.419 8.021 27.947 16.896s9.6 20.053 7.851 31.659l-58.88 383.915c-1.579 10.197-6.656 19.115-13.867 25.6-7.68 6.869-17.707 10.923-29.269 10.795l-438.656-0.043v-417.621l153.941-346.368c13.099 4.181 24.832 11.435 34.389 20.992 15.488 15.488 25.003 36.736 25.003 60.331z"></path>
          </svg>
          <span id="LikeCount" className="live-video-post-text02">
            {props.likeCount1 ?? (
              <fragment>
                <span>0</span>
              </fragment>
            )}
          </span>
        </button>
        <button type="button" className="PostAction">
          <svg viewBox="0 0 1024 1024" className="live-video-post-icon06">
            <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
          </svg>
          <span id="CommentCount" className="live-video-post-text03">
            {props.commentCount1 ?? (
              <fragment>
                <span>0</span>
              </fragment>
            )}
          </span>
        </button>
        <div className="live-video-post-container6">
          <input
            type="text"
            id={props.textinputId1}
            name="Comment"
            placeholder="Write Your Comment"
            className="live-video-post-textinput"
          />
          <button type="button" className="CommentButton">
            <span>
              {props.text31 ?? (
                <fragment>
                  <span>Send</span>
                </fragment>
              )}
            </span>
          </button>
        </div>
        <button id="CopyLink" type="button" className="PostAction">
          <svg viewBox="0 0 1024 1024" className="live-video-post-icon08">
            <path d="M640 341.333h128c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661-19.072 89.728-50.005 120.661-73.515 50.005-120.661 50.005h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h128c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035-28.715-134.741-74.965-181.035-110.336-74.965-181.035-74.965h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM384 682.667h-128c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661 19.072-89.728 50.005-120.661 73.515-50.005 120.661-50.005h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035 28.715 134.741 74.965 181.035 110.336 74.965 181.035 74.965h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM341.333 554.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-341.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </button>
        <button type="button" className="PostAction">
          <svg viewBox="0 0 1024 1024" className="live-video-post-icon10">
            <path d="M691.797 772.181c1.067-1.408 2.048-2.859 2.987-4.437 0.853-1.493 1.621-3.029 2.304-4.565 3.115-4.608 6.656-8.917 10.581-12.843 15.488-15.488 36.736-25.003 60.331-25.003s44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331c0-13.867 3.285-26.923 9.131-38.485zM695.509 258.389c-0.384-0.725-0.768-1.451-1.195-2.176s-0.853-1.451-1.323-2.133c-6.571-12.075-10.325-25.941-10.325-40.747 0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003c-4.608-4.608-8.704-9.728-12.16-15.275zM328.491 466.944c0.384 0.725 0.768 1.451 1.195 2.176s0.853 1.451 1.323 2.133c6.571 12.075 10.325 25.941 10.325 40.747s-3.755 28.672-10.368 40.789c-0.469 0.683-0.896 1.408-1.323 2.133s-0.811 1.408-1.152 2.133c-3.456 5.547-7.552 10.667-12.16 15.275-15.488 15.488-36.736 25.003-60.331 25.003s-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003c4.608 4.608 8.704 9.728 12.16 15.275zM603.733 259.755l-226.475 132.139c-0.171-0.213-0.384-0.384-0.597-0.597-30.805-30.805-73.557-49.963-120.661-49.963s-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005c0.213-0.213 0.384-0.384 0.597-0.597l226.517 132.011c-4.181 14.805-6.443 30.464-6.443 46.592 0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005c-0.128 0.128-0.299 0.299-0.427 0.427l-226.645-132.053c4.181-14.763 6.4-30.293 6.4-46.379s-2.219-31.659-6.4-46.421l226.475-132.181c0.171 0.213 0.384 0.384 0.597 0.597 30.805 30.848 73.557 50.005 120.661 50.005s89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661c0 16.085 2.219 31.659 6.4 46.421z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

LiveVideoPost.defaultProps = {
  postId: '',
  profileImageSrc: '',
  userFullName: 'Full Name',
  text: undefined,
  videoSrc: '',
  postId1: '',
  likeCount1: undefined,
  commentCount1: undefined,
  textinputId1: 'Comment-Bar',
  button: undefined,
  text31: undefined,
}

LiveVideoPost.propTypes = {
  postId: PropTypes.string,
  profileImageSrc: PropTypes.string,
  userFullName: PropTypes.string,
  text: PropTypes.element,
  videoSrc: PropTypes.string,
  postId1: PropTypes.string,
  likeCount1: PropTypes.element,
  commentCount1: PropTypes.element,
  textinputId1: PropTypes.string,
  button: PropTypes.element,
  text31: PropTypes.element,
}

export default LiveVideoPost
