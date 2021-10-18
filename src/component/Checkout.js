import '../App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Fooder from './Fooder';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';


function Checkout() {
  const [totalprice, setTotalprice] = useState("");
  const [shipshow, setShipshow] = useState(false);
  const [quickcheckout, setQuickcheckout] = useState(false);
  const [checkoutproductlist, setCheckoutproductlist] = useState([]);

  useEffect(() => {
    setInterval(function () {
      try {
        var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
        setCheckoutproductlist(addtocart);
        const cropt = addtocart.map((data) => data.price * data.qunt);
        const total = cropt.reduce((a, b) => a + b);
        setTotalprice(total);
      } catch (err) {
      }
    }, 100);
  }, [setInterval])


  const userauthincate = () => {
    return (
      <>
        {quickcheckout ?
          <div className="title text-warning" style={{ cursor: 'pointer' }} onClick={() => setQuickcheckout(!quickcheckout)}>Authinticate User-</div>
          : 
          <div className="title text-warning" style={{cursor:'pointer'}} onClick={() => setQuickcheckout(!quickcheckout)}>Quick Check Out</div>
        }
        {quickcheckout ? ship() :
          <div className="bg-info p-3">
            <div className="title">User Login</div>
            <div class="form-group">
              <label for="inputAddress"></label>
              <input type="text" class="form-control" id="inputAddress" placeholder="User Name" />
            </div>
            <div class="form-group">
              <label for="inputAddress"></label>
              <input type="password" class="form-control" id="inputAddress" placeholder="Password" />
            </div><br />
          </div>
        }
      </>
    )
  }

  const ship = () => {
    return (
      <>

        <div className="title">Quick Check Out</div>
        <div class="form-group">
          <label for="inputAddress"></label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Your Full Name" />
        </div>
        <div class="form-group">
          <label for="inputAddress"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Address" rows="3"></textarea>
        </div><br />
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Phone Number" />
          </div>
        </div> <br />

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary p-3">Continue to Shipping</button>
          </div>
        </div>
      </>
    )
  }

  const pickup = () => {
    return (
      <>
        <div className="title">Pickup locations</div>
        <ul class="list-group" style={{ marginTop: '20px' }}>
          <li class="list-group-item ship">
            <div class="form-check">
              Gyayathi<br />
              <span style={{ fontSize: '13px' }}>Ghayathi, Next to Tamm center, Abu Dhabi AZ</span>
            </div>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <div className="container"><Header /></div>
      <Menubar />

      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="title">Delivery method</div>

            <ul class="list-group" style={{ marginTop: '20px' }}>
              <li class="list-group-item ship">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label ship" for="flexRadioDefault1" onClick={() => setShipshow(false)}>
                    Ship
                  </label>
                </div>
              </li>
              <li class="list-group-item pickup">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label pickup" for="flexRadioDefault2" onClick={() => setShipshow(true)}>
                    Pick Up
                  </label>
                </div>
              </li>
            </ul>
            <br />
            {shipshow ? pickup() : userauthincate()}
          </div>

          <div className="col-md-6 bg-light">
            <br />
            <table class="table">
              <tbody>
                {checkoutproductlist.map((data) => {
                  return (
                    <tr>
                      <td><img src={data.img} width="60px" height="30px" /></td>
                      <td style={{ textAlign: 'right' }}>{data.qunt * data.price}</td>
                    </tr>
                  )
                })}
              </tbody>
              <tr>
                <td style={{ width: '40%', padding: '15px', lineHeight: '40px' }}>
                  Subtotal <br />
                  {shipshow ? "Pick Up a" : "Shipping"}
                </td>
                <td style={{ textAlign: 'right', lineHeight: '40px' }}>
                  taka{totalprice}
                  <br />
                  {shipshow ? <div style={{ fontSize: '13px' }}>Free</div> : <div style={{ fontSize: '13px' }}>Calculated at next step</div>}
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td style={{ textAlign: 'right' }}><h4>Taka {totalprice}</h4></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <Fooder />
    </>
  );
}

export default Checkout;
