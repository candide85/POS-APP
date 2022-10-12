import React from 'react';
import { useState } from 'react';
import {IoIosStar} from 'react-icons/io'
import {IoIosStarOutline} from 'react-icons/io'
import './Laurels.css';

const Laurels = () => {

  const [rating, setRating] = useState()

  // const handleRating = () =>{
  //   if (condition) {
      
  //   }
  // }
  return (  

  <div>
    <h3>Rating: {rating}</h3>
      {rating >= 0 ?  (< IoIosStar onClick={() => setRating(1)} style={{color:'red'}}  />) : (<IoIosStarOutline onClick={() => setRating(1)}style={{color:'red'}}  />) }
      {rating >= 2 ? (< IoIosStar onClick={() => setRating(2)} style={{color:'red'}}   />) : (<IoIosStarOutline onClick={() => setRating(2)} />) }
      {rating >= 3 ? (< IoIosStar onClick={() => setRating(3)}  style={{color:'red'}}  />) : (<IoIosStarOutline onClick={() => setRating(3)} />) }
      {rating >= 4 ? (< IoIosStar onClick={() => setRating(4)}  style={{color:'red'}}  />) : (<IoIosStarOutline onClick={() => setRating(4)} />) }
      {rating >= 5 ? (< IoIosStar onClick={() => setRating(5)} style={{color:'red'}}   />) : (<IoIosStarOutline onClick={() => setRating(5)} />) }
    
  </div>
  );
}

export default Laurels;
