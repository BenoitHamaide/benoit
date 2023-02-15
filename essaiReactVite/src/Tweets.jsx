import React from "react";

const Tweets = ({name, content, like}) => {
    const onLike = () => {
        console.log("like", name);
    }
  return (
      <div className="tweet">
        <h3>{name}</h3>
        <p>{content}</p>
        <button onClick={() => onLike()}>{like} &#10084;</button>
      </div>
    
  );
};

export default Tweets;
