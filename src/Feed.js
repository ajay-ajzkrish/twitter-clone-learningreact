import React from "react";
import "./Feed.css";
import { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
     db.collection('posts').onSnapshot(snapshot => (
       setPost(snapshot.docs.map(doc => doc.data()))
     ))
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>

        {/* tweetbox */}

        <TweetBox />
        <FlipMove>
        {post.map(post => (
          
          <Post
          key = {post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
          />
          ))}
          </FlipMove>
          
      </div>
    </div>
  );
};

export default Feed;
