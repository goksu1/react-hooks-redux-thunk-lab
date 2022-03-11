import React from 'react';

export default function CatList({ catPics }) {
  return (
    <>
      {catPics.map((image, i) => (
        <img key={i} src={image.url} alt="cat" />
      ))}
    </>
  );
}