import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import { useState } from "react";
import db from "./firebase";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Me",
      username: "mytweet",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://help.twitter.com/content/dam/help-twitter/brand/logo.png",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's Happening??"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          placeholder="Enter image URL"
          className="inputImageUrl"
        />
        <Button onClick={sendTweet} className="tweet_button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
