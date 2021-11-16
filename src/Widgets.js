import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget_input">
        <SearchOutlined className="widget_searchicon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget_container">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"860893473745928192"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ajzkrish"
          options={{ height: 400 }}
        />{" "}
      </div>
    </div>
  );
};

export default Widgets;
