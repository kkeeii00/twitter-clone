import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード" />
      </div>

      <div className="widetContainer">
        <h2>今どうしてる？

        </h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1619343845451522049"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kenken26679105"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/camcam_everyday"}
          options={{ text: "React", via: "camcam_everyday" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
