import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SearchBar from '../components/search-bar'
import Account from '../components/account'
import Sidebar from '../components/sidebar'
import Story from '../components/story'
import WhatsOnYourMind from '../components/whats-on-your-mind'
import MultipleImagePost from '../components/multiple-image-post'
import AccountSocialFriendRequest from '../components/account-social-friend-request'
import './newsfeed.css'

const Newsfeed = (props) => {
  return (
    <div className="newsfeed-container">
      <Helmet>
        <title>AutoSell UI</title>
        <meta property="og:title" content="AutoSell UI" />
      </Helmet>
      <div className="newsfeed-top-bar TopBar">
        <div className="newsfeed-container01">
          <img
            alt="image"
            src="/autosell%20icon.svg"
            className="newsfeed-image"
          />
          <img
            alt="image"
            src="/external/autosell.io%20-%20logo%20text-200h-200h.png"
            className="newsfeed-image1"
          />
          <SearchBar></SearchBar>
        </div>
        <div className="Top TopNav">
          <button type="button" className="newsfeed-button button ActiveButton">
            Newsfeed
          </button>
          <button type="button" className="newsfeed-button1 button">
            <span>
              <span>Marketplace</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="newsfeed-button2 button">
            Programs
          </button>
          <button type="button" className="newsfeed-button3 button">
            Jobs
          </button>
          <button type="button" className="newsfeed-button4 button">
            Challenges
          </button>
        </div>
        <div className="newsfeed-container03">
          <Account
            planName="Plan Name"
            userFullName="Full Name"
            rootClassName="account-root-class-name1"
          ></Account>
        </div>
      </div>
      <div className="newsfeed-container04"></div>
      <div className="newsfeed-container05">
        <div>
          <div className="newsfeed-container07">
            <Script
              html={`
    <script>
        const carousel = document.getElementById('Stories');
        const scrollLeftButton = document.getElementById('scroll-left');
        const scrollRightButton = document.getElementById('scroll-right');

        function updateButtons() {
            if (carousel.scrollLeft === 0) {
                scrollLeftButton.classList.add('hidden');
            } else {
                scrollLeftButton.classList.remove('hidden');
            }

            if (carousel.scrollWidth - carousel.clientWidth === carousel.scrollLeft) {
                scrollRightButton.classList.add('hidden');
            } else {
                scrollRightButton.classList.remove('hidden');
            }
        }

        scrollLeftButton.addEventListener('click', () => {
            carousel.scrollBy({
                top: 0,
                left: -200, // Adjust as needed
                behavior: 'smooth'
            });
        });

        scrollRightButton.addEventListener('click', () => {
            carousel.scrollBy({
                top: 0,
                left: 200, // Adjust as needed
                behavior: 'smooth'
            });
        });

        carousel.addEventListener('scroll', updateButtons);

        // Initial check to set button visibility
        updateButtons();

        // Allow horizontal scrolling with mouse wheel
        carousel.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) {
                carousel.scrollBy({
                    top: 0,
                    left: 200,
                    behavior: 'smooth'
                });
            } else {
                carousel.scrollBy({
                    top: 0,
                    left: -200,
                    behavior: 'smooth'
                });
            }
            event.preventDefault();
        });
    </script>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="TopNav Bot">
        <Link to="/" className="newsfeed-navlink button ActiveButton">
          <svg viewBox="0 0 1024 1024" className="newsfeed-icon">
            <path d="M170.667 512c94.251 0 179.541 38.144 241.365 99.968s99.968 147.115 99.968 241.365c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM170.667 213.333c176.725 0 336.683 71.595 452.565 187.435s187.435 275.84 187.435 452.565c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-200.277-81.237-381.696-212.437-512.896s-312.619-212.437-512.896-212.437c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM298.667 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
          </svg>
          <span className="newsfeed-text03">Newsfeed</span>
        </Link>
        <Link to="/marketplace" className="newsfeed-navlink1 button">
          <svg viewBox="0 0 1024 1024" className="newsfeed-icon02">
            <path d="M908.672 602.325c24.875-25.003 37.291-57.685 37.291-90.24 0.043-32.597-12.373-65.365-37.291-90.453l-366.507-366.507c-7.723-7.68-18.389-12.459-30.165-12.459h-426.667c-23.552 0-42.667 19.115-42.667 42.667v426.667c0 10.923 4.181 21.845 12.501 30.208l366.592 366.165c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504zM848.341 541.995l-305.92 305.92c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459l-354.091-353.707v-366.293h366.336l354.005 354.005c8.192 8.235 12.331 19.072 12.331 30.037 0 10.923-4.139 21.717-12.331 29.952zM341.333 298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
        </Link>
        <button type="button" className="newsfeed-button5 button">
          <svg viewBox="0 0 1024 1024" className="newsfeed-icon04">
            <path d="M512 682.667h-341.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM469.333 768v85.333h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-85.333h298.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-682.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504z"></path>
          </svg>
        </button>
        <Link to="/jobs" className="newsfeed-navlink2 button">
          <svg viewBox="0 0 1024 1024" className="newsfeed-icon06">
            <path d="M384 256v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667zM384 853.333v-512h256v512zM298.667 341.333v512h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM725.333 256v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-128c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM725.333 853.333v-512h128c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501z"></path>
          </svg>
        </Link>
        <Link to="/challenges" className="newsfeed-navlink3 button">
          <svg viewBox="0 0 1024 1024" className="newsfeed-icon08">
            <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
          </svg>
        </Link>
      </div>
      <div className="newsfeed-container09">
        <div className="newsfeed-container10"></div>
        <Sidebar rootClassName="sidebar-root-class-name4"></Sidebar>
        <div className="newsfeed-container11">
          <div className="newsfeed-container12">
            <div id="scroll-left" className="newsfeed-container13">
              <svg viewBox="0 0 1024 1024" className="newsfeed-icon10">
                <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </div>
            <div id="scroll-right" className="newsfeed-container14">
              <svg viewBox="0 0 1024 1024" className="newsfeed-icon12">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div id="Stories" className="newsfeed-container15">
              <div id="Story" className="newsfeed-container16">
                <div id="CreateStory" className="newsfeed-container17 StoryIco">
                  <svg viewBox="0 0 1024 1024" className="StoryIcon">
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <Story rootClassName="story-root-class-name1"></Story>
              <Story rootClassName="story-root-class-name5"></Story>
              <Story rootClassName="story-root-class-name4"></Story>
              <Story rootClassName="story-root-class-name11"></Story>
              <Story rootClassName="story-root-class-name10"></Story>
              <Story rootClassName="story-root-class-name9"></Story>
              <Story rootClassName="story-root-class-name8"></Story>
              <Story rootClassName="story-root-class-name3"></Story>
              <Story rootClassName="story-root-class-name2"></Story>
              <Story rootClassName="story-root-class-name"></Story>
              <Story rootClassName="story-root-class-name7"></Story>
              <Story rootClassName="story-root-class-name6"></Story>
            </div>
          </div>
          <WhatsOnYourMind
            text1={
              <fragment>
                <span>Live Stream</span>
              </fragment>
            }
            text2={
              <fragment>
                <span>Media</span>
              </fragment>
            }
            text3={
              <fragment>
                <span>Post</span>
              </fragment>
            }
            text21={
              <fragment>
                <span>Carousel</span>
              </fragment>
            }
            text41={
              <fragment>
                <span className="newsfeed-text08">Name</span>
              </fragment>
            }
            text42={
              <fragment>
                <span>,</span>
              </fragment>
            }
            text211={
              <fragment>
                <span id="Create-Story">Story</span>
              </fragment>
            }
            rootClassName="whats-on-your-mind-root-class-name1"
          ></WhatsOnYourMind>
          <div id="Posts" className="newsfeed-container18">
            <MultipleImagePost
              text={
                <fragment>
                  <span>Text</span>
                </fragment>
              }
              text3={
                <fragment>
                  <span>Send</span>
                </fragment>
              }
              button={
                <fragment>
                  <span>Report Post</span>
                </fragment>
              }
              likeCount={
                <fragment>
                  <span>0</span>
                </fragment>
              }
              commentCount={
                <fragment>
                  <span>0</span>
                </fragment>
              }
              rootClassName="multiple-image-post-root-class-name1"
            ></MultipleImagePost>
            <MultipleImagePost
              text={
                <fragment>
                  <span>Text</span>
                </fragment>
              }
              text3={
                <fragment>
                  <span>Send</span>
                </fragment>
              }
              button={
                <fragment>
                  <span>Report Post</span>
                </fragment>
              }
              likeCount={
                <fragment>
                  <span>0</span>
                </fragment>
              }
              commentCount={
                <fragment>
                  <span>0</span>
                </fragment>
              }
              rootClassName="multiple-image-post-root-class-name2"
            ></MultipleImagePost>
          </div>
        </div>
        <div className="newsfeed-container19"></div>
        <div className="newsfeed-container20 sidebar">
          <div className="newsfeed-container21">
            <h3 className="HeadingColored">Announcements</h3>
            <div className="newsfeed-container22">
              <div
                data-thq="slider"
                data-autoplay="true"
                data-navigation="false"
                data-pagination="false"
                data-loop="true"
                data-disable-autoplay-on-interaction="false"
                data-pause-autoplay-on-mouse-enter="true"
                data-autoplay-delay="3500"
                className="newsfeed-slider"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="newsfeed-slider-slide swiper-slide"
                  ></div>
                  <div
                    data-thq="slider-slide"
                    className="newsfeed-slider-slide1 swiper-slide"
                  ></div>
                  <div
                    data-thq="slider-slide"
                    className="newsfeed-slider-slide2 swiper-slide"
                  ></div>
                </div>
                <div
                  data-thq="slider-pagination"
                  className="newsfeed-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
                  className="newsfeed-slider-button-prev swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="newsfeed-slider-button-next swiper-button-next"
                ></div>
              </div>
            </div>
          </div>
          <div className="newsfeed-container23">
            <h3 className="HeadingColored">Friend Request</h3>
            <div className="newsfeed-container24">
              <AccountSocialFriendRequest
                rootClassName="account-social-friend-request-root-class-name3"
                DeclineButton={
                  <fragment>
                    <span>Decline</span>
                  </fragment>
                }
              ></AccountSocialFriendRequest>
              <AccountSocialFriendRequest
                rootClassName="account-social-friend-request-root-class-name4"
                DeclineButton={
                  <fragment>
                    <span>Decline</span>
                  </fragment>
                }
              ></AccountSocialFriendRequest>
              <AccountSocialFriendRequest
                rootClassName="account-social-friend-request-root-class-name5"
                DeclineButton={
                  <fragment>
                    <span>Decline</span>
                  </fragment>
                }
              ></AccountSocialFriendRequest>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsfeed
