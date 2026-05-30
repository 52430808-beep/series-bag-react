import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../moviesData';
import { FaHeart } from 'react-icons/fa';

function Details() {
  const { id } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(id));
  
  const [isLiked, setIsLiked] = useState(false);

  if (!movie) {
    return <div className="container py-5 text-center"><h2>Series Not Found!</h2></div>;
  }

  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <img src={movie.img} alt={movie.name} className="img-fluid rounded-5 border border-danger shadow-lg" />
        </div>
        <div className="col-md-7 ps-md-5">
          <h1 className="display-3 text-danger fw-bold">{movie.name}</h1>
          <h4 className="text-secondary mt-3">
            {movie.year} | {movie.episodes} | {movie.genre}
          </h4>
          <p className="mt-4 fs-5 lead">{movie.desc}</p>
          <div className="d-flex align-items-center gap-4 mt-5">
            <FaHeart 
              size={50}
              style={{ 
                cursor: 'pointer', 
                transition: '0.3s', 
                color: isLiked ? '#ff0000' : 'white' 
              }} 
              onClick={() => setIsLiked(!isLiked)} 
            />
            <button className="btn btn-red btn-lg px-5 fs-4 rounded-pill">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;