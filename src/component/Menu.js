import '../App.css';
import Fooder from './Fooder';
import Header from './Header';
import Menubar from './Menubar';
import 'aos';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';

const productdata = [
  {product_img:"./img/catagoryimg/01.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/02.jpg", product_name: "Triple Treat Meal", price:"510"},
  {product_img:"./img/catagoryimg/03.jpg", product_name: "10pc Leg Piece Bucket", price:"510"},
  {product_img:"./img/catagoryimg/04.jpg", product_name: "KFC Tacos Duo Meal", price:"510"},
  {product_img:"./img/catagoryimg/05.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/06.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/07.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/03.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/01.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/06.jpg", product_name: "Celebration Bucket", price:"510"},
  {product_img:"./img/catagoryimg/02.jpg", product_name: "Celebration Bucket", price:"510"}
]


function Menu() {
  const [productcard, setProductcard] = useState(productdata);

  useEffect(() => {
    AOS.init({ duration: 1000 })
  });

var a = 1;
const addtocardmethod = (e)=>{
 
 
  var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
   
  if(addtocart.length === 0){
    var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
    addtocart.push({img: e.product_img, product_name: e.product_name, price:e.price, qunt:a});
    localStorage.setItem("addtocart", JSON.stringify(addtocart));
  }else{
    var mach = addtocart.filter((dt)=> {
      return dt.product_name.match(e.product_name)
    })
    if(mach.length === 0){
      var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
      addtocart.push({img: e.product_img, product_name: e.product_name, price:e.price, qunt:a});
      localStorage.setItem("addtocart", JSON.stringify(addtocart));
    }else{ 
      var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");  
      var index = addtocart.findIndex(x => x.product_name ===e.product_name);
      addtocart[index].qunt = addtocart[index].qunt + 1 ;
      localStorage.setItem("addtocart", JSON.stringify(addtocart));
    }
  }


}



  return (
    <>
      <div className="container"><Header /></div>
      <Menubar />

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/carousel/01.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/02.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/03.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="product_header">FEATURED PRODUCTS</div>

      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          
        {productcard.map((productcartdata)=>{
          return(          
          <div class="col" data-aos="zoom-in">
            <div class="card">
              <img src={productcartdata.product_img} class="card-img-top" data-aos="flip-right" alt="..." style={{ height: '200px' }} />
              <div class="card-body">
                <h6 class="card-title">{productcartdata.product_name}</h6>
                <h6 class="card-title text-righ">৳ 157</h6>
                <h6 class="card-title bg-danger text-light text-center p-2 addtocart" onClick={()=>addtocardmethod(productcartdata)}>
                  Add To Cart
                </h6>
              </div>
            </div>
          </div>
          )
        })}
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Menu;
