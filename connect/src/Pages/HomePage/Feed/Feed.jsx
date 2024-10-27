import { useState } from "react";
import "./Feed.css";
import FlipMove from "react-flip-move";
import Post from "../Posts/Post";
import TweetBox from "./TweetBox/TweetBox";

function Feed() {
  const [posts, setPosts] = useState([
    // Placeholder posts
    {
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: "Welcome to the app!",
      image: "https://via.placeholder.com/150",
    },
    {
      displayName: "Another User",
      username: "anotheruser",
      verified: false,
      text: "This is a sample post!",
      image: "",
    },
  ]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
