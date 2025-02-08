import React from 'react';

const Greet = () => {
  const greet = "Hello"; 
  const date=new Date();

  return (
    <div>
      <h1>{greet}</h1>
      <h2><p>Date: {date.getDate()}</p></h2>
    </div>
  );
};

export default Greet;
