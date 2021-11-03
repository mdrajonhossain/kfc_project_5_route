import '../App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Fooder from './Fooder';
import 'aos';
import AOS from 'aos';
import { Link } from "react-router-dom";




function Home() {


  const [catagorey, setCatagorey] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 1000 })
  });

  useEffect(() => {
    fetch('/productCategories', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Key': 'aHR0cHN+Y3VycnltZWFsLmFlfmFwaQ',
        'X-Auth-Email': 'info@currymeal.ae'
      },
      body: {},
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.content);
        setCatagorey(data.content);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  console.log("---")



  return (
    <>
      <div className="container">
        <Header />
        <div className="container_baner" data-aos="fade-down">


          <img src="./img/home_font_img.jpg" alt="Nature" style={{ width: '100%' }} />



          <div className="ordering" data-aos="fade-up">LET'S START ORDERING</div>

          <div className="row delivary">
            <div className="col-md-6">
              <Link to="/menu"><button type="button" class="btn delivarybtn btn-lg btn-block">DELIVERY</button></Link>

            </div>
            <div className="col-md-6">
              <button type="button" className="btn delivarybtn btn-lg btn-block">DINE-IN</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="fuatuer_product_header">FEATURED PRODUCT</div>


          <div className="row">

            {catagorey.length != 0 && catagorey.map((data) => {
              return (
                <div className="col-md-4" style={{ marginBottom: '30px', padding: '10px' }}>
                  <Link to={`/menu/${data.id}`}>
                    <div className="card">
                      <img src="./img/catagoryimg/01.jpg" width="100%" />
                      <div className="product_name">{data.main}</div>
                    </div>
                  </Link>
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
