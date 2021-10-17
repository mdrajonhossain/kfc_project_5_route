import '../App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Fooder from './Fooder';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';


function Shopingcard() {
  const ref = React.useRef();
  const [addtocartdata, setAddtocartdata] = useState([]);
  const [producttotal, setProducttotal] = useState("");


  const productdelte = (e) => {
    const addtocart = JSON.parse(localStorage.getItem("addtocart"));
    addtocart.splice(e, 1);
    localStorage.setItem('addtocart', JSON.stringify(addtocart));
  }


  useEffect(() => {
    setInterval(function () {
      var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
      setAddtocartdata(addtocart)
    }, 100);
  }, [setInterval])


  useEffect(() => {
    setInterval(function () {
      try {
        var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
        const cropt = addtocart.map((data) => data.price * data.qunt)
        const total = cropt.reduce((a, b) => a + b);
        setProducttotal(total)
      } catch (err) {
      }
    }, 100);
  }, [setInterval])






  return (
    <>
      <div className="container"><Header /></div>
      <Menubar />


      <div className="container text-center p-3">Your Cart</div>
      <Link to="/menu"><div className="container text-center" style={{ fontSize: '14px', cursor: 'pointer' }}>Continue shopping</div></Link>

      <div className="container" style={{ marginTop: "10px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">Qnt</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>

            {addtocartdata.map((data, index) => {
              return (
                <tr>
                  <td><img src={data.img} width="60px" height="40px" /></td>
                  <td>
                    {data.product_name}<br />
                    <div className="text-danger" onClick={() => productdelte(index)} style={{ cursor: 'pointer' }}>Remove</div>
                  </td>
                  <td>Tk. {data.price}</td>
                  <td>{data.qunt}</td>
                  <td style={{ textDecoration: 'none' }}>{data.qunt * data.price}</td>
                </tr>
              )
            })}
          </tbody>
          <tr>
            <td colspan="5" style={{ textAlign: 'right', color: 'green', fontWeight: 'bold' }}>Subtotal = {producttotal}/=</td>
          </tr>
        </table>
        <Link to="/product_checkout" style={{ textDecoration: 'none' }}><div className="container checkout">CHECK OUT</div></Link>
      </div>


      <Fooder />
    </>
  );
}

export default Shopingcard;
