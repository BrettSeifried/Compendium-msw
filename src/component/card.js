import React from 'react';

export default function DisplayData({ data }) {
  console.log(data.message);
  return (
    <div key="key">
      {data.map(({ message }) => (
        <img key="key" src={`&{message}`} alt="dog picture"></img>
      ))}
    </div>
  );
}
