import './App.css';
import {useState} from "react"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, NavBar,Nav, Container } from 'react-bootstrap';
import {a,b} from "./data.js"

function App() {
  let [shoes] = useState()
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shopper</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
<div className="main-bg" ></div>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
    <div class="col-sm">
    <img src="https://codingapple1.github.io/shop/shoes2.jpg"  width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
    <div class="col-sm">
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
