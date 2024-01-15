import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import './Feed.css'
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore"; 

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
      {/**Feed */}
    </div>
  )
}

export default Feed 