import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetsSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgetsWidgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1733966961078329595"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NawaSinha"
          options={{ height: 400 }}
        />

      </div>
    </div>
  );
}

export default Widgets;