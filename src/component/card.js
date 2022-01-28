import React from 'react';

export default function DisplayData({ filter }) {
  return (
    <div>
      {filter.map((kuroko) => (
        <p key={kuroko.mal_id}>
          <h1>{kuroko.title}</h1>
          <img src={kuroko.images.jpg.image_url} alt={kuroko.title}></img>
          <>Favorited: {kuroko.favorites}</>
        </p>
      ))}
      ;
    </div>
  );
}
