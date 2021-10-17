import '../App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Fooder from './Fooder';
import 'aos';
import AOS from 'aos';
import { Link } from "react-router-dom";


const catagory = [
  { id: "1", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/01.jpg" },
  { id: "2", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/02.jpg" },
  { id: "3", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/03.jpg" },
  { id: "4", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/04.jpg" },
  { id: "5", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/05.jpg" },
  { id: "6", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/06.jpg" },
  { id: "7", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/07.jpg" },
  { id: "7", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/01.jpg" },
  { id: "7", catagorycard: "Catagory Name", catagorycardimg: "./img/catagoryimg/02.jpg" }
]

function Home() {
  const [catagorycard, setCatagorycard] = useState(catagory);


  useEffect(() => {
    AOS.init({ duration: 1000 })
  });





  return (
    <>
      <div className="container">
        <Header />
        <div class="container_baner" data-aos="fade-down">
          <img src="./img/home_font_img.jpg" alt="Nature" style={{ width: '100%' }} />

          <div className="ordering" data-aos="fade-up">LET'S START ORDERING</div>

          <div className="row delivary">
            <div className="col-md-6">
              <Link to="/menu"><button type="button" class="btn delivarybtn btn-lg btn-block">DELIVERY</button></Link>

            </div>
            <div className="col-md-6">
              <button type="button" class="btn delivarybtn btn-lg btn-block">DINE-IN</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="fuatuer_product_header">FEATURED PRODUCT</div>


          <div className="row">

            {catagorycard.map((data) => {
              return (
                <div className="col-md-6 cardtab" data-aos="zoom-in">
                  <img src={data.catagorycardimg} width="100%" />
                  <div className="tabhoverlick"></div>
                </div>
              )
            })}




          </div>

        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Home;
