import React from "react";
import "./Post.css";
import { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  PublishOutlined,
  RepeatOutlined,
  VerifiedUser,
} from "@material-ui/icons";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar },ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}{" "}
              <span className="post_headerSpecial">
                {verified && <VerifiedUser className="post_badge" />}{" "}
                {`@` + username}
              </span>
            </h3>
          </div>
          <div className="post_headerdescription">
            <p>{text}</p>
          </div>
        </div>
        {image && <img src={image} alt="postpic" width="100%" height="100%" />}
        <div className="post_footer">
          <ChatBubbleOutline />
          <RepeatOutlined />
          <FavoriteBorderOutlined />
          <PublishOutlined />
        </div>
      </div>
    </div>
  );
});

export default Post;
