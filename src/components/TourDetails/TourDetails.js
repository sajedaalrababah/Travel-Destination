import './TourDetails.css'
import React from 'react';

import { useState } from "react"
import { useParams } from 'react-router-dom';
import data from '../../data/db.json';

const TourDetails = () => {
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(false);
    function anather  () {
          setSeeMore(!seeMore)
      }
      return (
<>
      <section className="full">
      
      
      <div className="container">
                    {
              data.map(element => {
                    const text = element.info;
                    
                    if (element.id === id) {
                        return (
                            <div className='card'>
                            <img src={element.image} alt={element.name}  />
                            <h2>{element.name}</h2>
                            <h3>{seeMore ? text : `${text.substring(0, 300)}`}
                             <button className="btn" onClick={anather}>{seeMore? "See Less":"See More"}</button>
                            </h3>
                            <h3>{element.price}</h3>
                            </div>
                        )
                    }
                })
            }
      </div>
      
</section>
</>
      )

      }
      export default TourDetails;