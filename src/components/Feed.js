import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from "./Post";
import './Feed.css'
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore"; 
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'post'));
      const postsArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        postsArray.push({ id: doc.id, data: doc.data() });
      });
      setPosts(postsArray);
    } catch (error) {
      console.error('Error getting posts: ', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.data.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.verified}
            text={post.data.text}
            avatar={post.data.avatar}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed 