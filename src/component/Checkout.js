import '../App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Fooder from './Fooder';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';


function Checkout() {
  const [totalprice, setTotalprice] = useState("");
  const [shipshow, setShipshow] = useState(false);

  useEffect(() => {
    setInterval(function () {
      try {
        var addtocart = JSON.parse(localStorage.getItem("addtocart") || "[]");
        const cropt = addtocart.map((data) => data.price * data.qunt)
        const total = cropt.reduce((a, b) => a + b);
        setTotalprice(total)
      } catch (err) {
      }
    }, 100);
  }, [setInterval])


  const ship = () => {
    return (
      <>
        <div className="title">Shipping address</div>

        <div class="form-group">
          <label for="inputAddress"></label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Country/Region" />
        </div><br />
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name (Optional)" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress"></label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
        </div>
        <div class="form-group">
          <label for="inputAddress"></label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Apartment, suite, etc..(optional)" />
        </div><br />
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="City" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Postal Code" />
          </div>
        </div>

        <div class="form-check">
          <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
          Save this information for next time
        </div><br />

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
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
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

          {shipshow ? pickup() : ship()}
          </div>



          <div className="col-md-6 bg-light">Total Price: {totalprice}</div>
        </div>
      </div>

      <Fooder />
    </>
  );
}

export default Checkout;
