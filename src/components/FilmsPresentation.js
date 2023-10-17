import React from 'react';
import { Link } from 'react-router-dom';

import { Films } from '../shared/ListOfFilms';
import { useState } from 'react';
import { Carousel } from 'react-materialize';

export default function FilmsPresentation({ films }) {
  const [film, setFilm] = useState([]);

  return (
    <div className='home'>
    
    <img  className='bg' src="./assets/images/oppennheimer.jpg" />
    <div className="container">
   
    <Carousel
  carouselId="Carousel"
  images={[
    '/assets/images/TheNunII.jpg',
    'assets/images/Barbie.jpg',
    '/assets/images/1.jpg',
    '/assets/images/oppennheimer.jpg',
    '/assets/images/Loki.jpg',
    '/assets/images/TheEqualizer3.jpg',
    
  ]}
  options={{
    dist: -100,
    duration: 200,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    numVisible: 5,
    onCycleTo: null,
    padding: 2,
    shift: 0
  }}
/>
      {films.map((film) => (
        <div className="column" key={film.id}>
          <div className="card">
            <img src={film.img} alt="" />
            <h3>{film.title}</h3>
            <p className="title"></p>
           
            <p>
              <Link to={`detail/${film.id}`}>
                <button>Detail</button>
              </Link>
            </p>
          </div>
        </div>
      ))}

      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={film.img} alt="" />
          <h2>{film.title}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{film.info}</div>
        </div>
      </div>
    </div>
    </div>
  );
}
