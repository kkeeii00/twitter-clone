import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault();

    // Add a new document with a generated id.
    addDoc(collection(db, "posts"), {
      displayName: "なのは",
      userName: "_aa000x__x",
      verified: true,
      text: tweetMessage,
      avatar: "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGztGPefdiQTfIAviEwyQXoC3FXEiDTnUNRSyfX2qyUmf0AP26bt60PtsOK-WAmC_TvJNOASOCe3qzli3jdCyQ1O0zTbAwyfnva6jxotKKSd8xSraTegbxbuEYp48mBjiE6ADyXk0nJ1Q-f83e4iq9wNDwyg2XpWFRyJKpsNPR9MKOuRPUwpN6t__peOhP16APmK5GRBgAnHeFp8oTVVjHp7hnq2P9FAPNR5Ejch-NbTB/85342235_480x437.jpeg?errorImage=false",
      image: tweetImage,
      timeStamp: serverTimestamp()
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBoxImageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox-TweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
