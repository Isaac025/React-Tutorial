import React from "react";
import { Link, useParams } from "react-router-dom";
import { tweets } from "../data";

//useParams - gives an object contaiing the route parameter
//{id: '3'}
const SingleTweet = () => {
  const { id } = useParams();
  const tweet = tweets.find((SingleTweet) => SingleTweet.id === id);

  return (
    <div className="container py-10">
      <Link to="/timeline" className="btn btn-primary mb-4 rounded-md">
        Back to Timeline
      </Link>
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl">{tweet.profileName}</h1>
          <p>@{tweet.handle}</p>
        </div>
        <p>{tweet.tweet}</p>
        <div className="flex gap-3">
          <p>{tweet.likes} likes</p>
          <p>{tweet.comments.length} comments</p>
        </div>
        <h1 className="font-bold">Comments</h1>
        <div className="flex flex-col gap-5">
          {tweet.comments.map((comment, i) => {
            return <p key={i}>{comment}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleTweet;
