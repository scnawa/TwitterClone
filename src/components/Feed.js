import React from 'react'
import TweetBox from './TweetBox'
import './Feed.css'

function Feed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {/**Feed */}
    </div>
  )
}

export default Feed 