import React from 'react'

import { Helmet } from 'react-helmet'

import Account from '../components/account'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>Search - AutoSell UI</title>
        <meta property="og:title" content="Search - AutoSell UI" />
      </Helmet>
      <div className="search-container1">
        <div className="search-container2">
          <div className="search-container3">
            <img
              alt="image"
              src="/autosell%20icon.svg"
              className="search-image"
            />
            <img
              alt="image"
              src="/external/autosell.io%20-%20logo%20text-200h-200h.png"
              className="search-image1"
            />
            <div className="search-search-bar">
              <button
                id="Search-Button"
                name="Search-Button"
                type="submit"
                className="search-search-button search"
              >
                <svg viewBox="0 0 1024 1024" className="search-icon">
                  <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
                <span className="search-text">
                  <span>Search</span>
                  <br></br>
                </span>
              </button>
              <input
                type="text"
                placeholder="placeholder"
                className="search-textinput input"
              />
            </div>
          </div>
        </div>
        <div className="search-container4">
          <Account
            planName="Plan Name"
            userFullName="Full Name"
            rootClassName="account-root-class-name2"
          ></Account>
        </div>
      </div>
    </div>
  )
}

export default Search
