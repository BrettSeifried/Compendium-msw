import React from 'react';

export default function DisplayData({ data: data }) {
  console.log('data', data);
  return (
    <div>
      {data.map((kuroko) => (
        <p key={kuroko.mal_id}>
          <h1>{kuroko.title}</h1>
          <img src={kuroko.images.jpg.image_url} alt="image"></img>
        </p>
      ))}
      ;
    </div>
  );
}
