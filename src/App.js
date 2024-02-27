import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import data from "./data.js";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Shopper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link disabled href="#">Disabled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <div className="row">
          {shoes.map((a,i)=>{
            return (
              <Card shoes={shoes[i]} i={i}></Card>
            )
          })
        }
        </div>
      </Container>
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;
