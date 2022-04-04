import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/customerReviews';
import img from '../../images/Drone3.png';
import './Home.css'

const Home = () => {
   const [ reviews, setReviews] = useReviews()

   const navigate = useNavigate()

   const reviewsBtn = () =>{
       const path = `/reviews`

    navigate(path)
   }
    return (
        <div className='container'>
           <div className='home-container'>
           <div className="heading-text">
               <h1>Drone</h1>
               <p>ORION 2 Persistent Drone Flight Test To improve our understanding of our customers’ requirements, Elistair's R&D team recently flew the Orion 2 persistent drone continuously for 50 hours. The purpose of this flight test was to further investigate the Orion 2's...</p>
           </div>
           <div>
                  <img src={img} alt="" />
         </div>
           </div>
         <div>
             <h2>Customer Reviews</h2>
             {
                 reviews.map( review=> <p>{review.name}</p>)
             }

         </div>
         <button onClick={reviewsBtn}>see all reviews</button>
        </div>
        
    );
};

export default Home;