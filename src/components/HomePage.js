import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
  const handleFindMovie = () => {
    console.log("clicked");
  };

  return (
    <div className="content">
      <>
        <img alt="Its a Logo for Website" src="https://cdn.discordapp.com/attachments/906929616076279850/907905214244331560/6333051817_95477b21-c589-4bda-8eb6-977f333921a8.png" />
      </>
      <h1>
        The Newest Movies Rating and Reviews in <strong>Moviez</strong>
      </h1>
      <p>
        <strong>Moviez</strong> is the world's most popular and authoritative
        source for movie, TV and celebrity content. Find ratings and reviews for
        the newest movie and TV shows
      </p>
      <form>
        <input type="text" placeholder="&#x270e; Search for a Movie!" />
        <Link to="/movies">
          <button onClick={handleFindMovie}>Find Movie</button>
        </Link>
      </form>
    </div>
  );
}

export default HomePage;
