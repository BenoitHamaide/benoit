import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  // création d'une variable de type react avec state
const [content, setContent] = useState("");
// creation variable error
const [error, setError] = useState(false);

// creation de la fonction handle submit
const handleSubmit= (e) => {
  e.preventDefault();
  if (content.length < 140){
    setError(true);
  }else{
    setError(false);
  }
};

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
{/* // dès que tu es soumis je t'ajoute un evenement odnc jouer la fonction handleSubmit */}
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea 
        style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}
        placeholder="Message" 
        onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>veuillez ecrire un minimum de 140 caracteres</p>}
        <input type="submit"  value="Envoyer" />
      </form>
      <ul>
        
      </ul>

    </div>
  );
};

export default Blog;
