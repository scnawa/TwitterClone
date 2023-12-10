import React, {useState} from 'react'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  return (
    <div className="tweetBox">
    <form>
      <div className="tweetBoxInput">
        <input
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
        />
      </div>
    </form>
  </div>
  )
}

export default TweetBox