import React, { useState } from "react";
import Tweets from "./Tweets";


const DEFAULT_TWEETS =[
  {id:1,
    name:"max",
   content:"ça va bien",
   like:100,
  },
  {id:2,
    name:"julien",
   content:"o top",
   like:400,
  },
  {id:3,
    name:"florian",
   content:"ça va bof",
   like:200,
  },
  {id:4,
    name:"nathan",
   content:"ça va super",
   like:300,
  },
  ];

const App = () => {
let [tweets, setTweets] = useState(DEFAULT_TWEETS); 


  return (
    <div>
   
      <div className="tweet-container">
        {tweets.map((tweets) => {
  return( 
  <Tweets
   key={tweets.id} 
   name={tweets.name} 
   content={tweets.content} 
   like={tweets.like}
   />
  );
})}   </div>
        </div>
  );
};

export default App;
