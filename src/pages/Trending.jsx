import React from 'react';
import { moviesData } from '../moviesData';

function Trending() {
  const topTrending = moviesData.slice(0, 3);

  return (
    <div className="container py-5">
      <h2 className="section-title text-center text-danger mb-5">TOP TRENDING</h2>
      <div className="d-flex flex-column gap-5">
        {topTrending.map((movie, index) => (
          <div key={movie.id} className="d-flex align-items-center row">
            <div className="col-12 d-flex align-items-center">
              <span className="trend-rank">{index + 1}</span>
              <img src={movie.img} alt={movie.name} style={{ width: '180px', borderRadius: '15px' }} />
              <h3 className="ms-4">{movie.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;