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
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
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
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed 