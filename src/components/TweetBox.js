import React, {useState} from 'react'
import { Button } from '@mui/material';
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = async (e) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "post"), {
          displayName: "Sinha Nawa",
          username: "scnawa",
          verified: true,
          text: tweetMessage,
          image: tweetImage,    
        });
        console.log("Post written with id: ", docRef.id);
      } catch (e) {
        console.error("Error adding post: ", e);
      }
      setTweetMessage("");
      setTweetImage("");
  }
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
      <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBoxTweetButton"
        >
          Tweet
        </Button>
    </form>
  </div>
  )
}

export default TweetBox