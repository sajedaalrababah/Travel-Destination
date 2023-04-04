import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useState } from "react"
import { useParams } from 'react-router-dom';
import cardData from "../../data/db.json";
import Navbar from '../Navbar/Navbar';
const TourDetails = () => {
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(false);
    function anather  () {
          setSeeMore(!seeMore)
      }
      return (
<>
      <section className="full">
      <Header/>
      <Navbar/>
      <div className="container">
                    {
                cardData.map(element => {
                    const text = element.info;
                    if (element.id == id) {
                        return (
                            <div>
                            <img src={element.image} alt={element.name} style={{width :"50rem"}} />
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
      <Footer/>
</section>
</>
      )

      }
      export default TourDetails;