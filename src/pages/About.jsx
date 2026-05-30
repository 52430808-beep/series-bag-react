import React from 'react';
import { FaFilm, FaGlobe, FaLanguage } from 'react-icons/fa';

function About() {
  return (
    <div className="container py-5 text-center">
      <h2 class="section-title mb-5" style={{ color: '#ff0000', fontWeight: 'bold' }}>About Our Website</h2>
      <div className="about-box p-5 rounded-5 border border-danger shadow-lg" style={{ backgroundColor: '#111', maxWidth: '900px', margin: '0 auto' }}>
        <p className="lead text-white mb-5">
          Series' Bag is your premier destination for high-quality streaming. We aim to bring the best television content from around the globe directly to your screen with a user-friendly interface.
        </p>
        <div className="row text-start">
          <div className="col-md-6 mb-4">
            <h4 className="text-danger"><FaFilm className="me-2" /> Content Categories</h4>
            <ul className="text-secondary mt-3">
              <li>Action & Adventure</li>
              <li>Drama & Thrillers</li>
              <li>Sci-Fi & Mystery</li>
              <li>Documentaries</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="text-danger"><FaGlobe className="me-2" /> Global Production</h4>
            <p className="text-secondary mt-3">We offer series from: <strong>USA, UK, Spain, Korea, Turkey, and Lebanon.</strong></p>
          </div>
          <div className="col-md-12">
            <h4 className="text-danger"><FaLanguage className="me-2" /> Translation & Subtitles</h4>
            <p className="text-secondary mt-3">All our content is available with high-definition subtitles in: <strong>Arabic, English, and French.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;