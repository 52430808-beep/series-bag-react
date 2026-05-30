import React from 'react';
import { Link } from 'react-router-dom';
import { moviesData } from '../moviesData';
import { FaStar, FaRegStar, FaFire } from 'react-icons/fa';

function Home() {

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

  return (
    <div className="container py-5">
      <h1 className="enjoy-text">Enjoy!🎬🪄</h1>
      <div className="row mt-5">
        {moviesData.map((movie) => (
          <div key={movie.id} className="col-md-3 col-sm-6 mb-5 text-center">
            <div className="series-card">
              <img src={movie.img} alt={movie.name} />
            </div>
            <Link to={`/details/${movie.id}`} className="series-name">{movie.name}</Link>
            <div className="rating">{renderStars(movie.rating)}</div>
            <div className="views"><FaFire /> {movie.views} Views</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;