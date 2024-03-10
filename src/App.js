import './App.css';
import React, {lazy, useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import data from "./data.js";

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from "axios"
// import Cart from "./routes/Cart.js"
// import Detail from "./routes/Detail.js"
const Detail = lazy( () => import('./routes/Detail.js') )
const Cart = lazy( () => import('./routes/Cart.js') )

export let Context1 = createContext() // state 보관함


function App() {

  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);


  const [shoes, setShoes] = useState(data);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(1);
  let [stock, setStock] = useState([10,11,12])
  let [detailed, setDetailed] = useState(0)

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Shopper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={()=>{ navigate('/')}} > Home </Nav.Link>
            <Nav.Link href="#" onClick={()=>{ navigate('/detail/1')}} > Detail </Nav.Link>
            <Nav.Link href="#" onClick={()=>{ navigate('/event')}} >Event</Nav.Link>
            <Nav.Link disabled href="#">Disabled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Link to= "/" style = {{textDecoration: 'none', margin: 10}}>홈</Link>
        <Link to="/detail/1" style = {{textDecoration: 'none'}} >상세페이지</Link>
      
      <Routes>
      <Route  path="/" element={
      <div>
        <div> 메인 페이지임</div>
          <div className="main-bg"></div>
          <Container>
            <div className="row">
            {loading === true ? <Loading /> : null}
              {shoes.map((a,i)=>{
                return (
                  <Card key={shoes.id} shoes={shoes[i]} i={i}></Card>
                )
              })
            }
            </div>
            <button onClick={()=>{
              
              setLoading(true)
              
              setClicked(Clicked => Clicked + 1);
              axios.get(`https://codingapple1.github.io/shop/data${clicked}.json`)
              .then((result) => {
              let copy = [...shoes, ...result.data];
      setShoes(copy);
    },
      setLoading(false))
      .catch(() => {
        console.log('Failed to fetch data')
        setLoading(false)}
        )
      }}>버튼</button>

          </Container>
        </div>
    } />

      <Route path="/detail/:id" element={
        <Context1.Provider value={{stock,shoes}}>
          <Detail shoes={shoes} className="start"/>
        </Context1.Provider>}/>

      <Route path="*" element={<div>404 error </div>}></Route>
      
      <Route path='/about' element = {<About/>}></Route>

      <Route path='/about' element = {<About/>}>
        <Route path='member' element = {<div>멤버임</div>}></Route>
        <Route path='location' element = {<div>위치정보임</div>}></Route>
      </Route>

      <Route path='/event' element = {<Event/>}>
        <Route path='one' element = {<div>첫 주문시 양배추즙 서비스</div>}></Route>
        <Route path='two' element = {<div>생일기념 쿠폰 받기</div>}></Route>
      </Route>

      <Route path="/cart" element={<Cart></Cart>}></Route>


      </Routes> 
</div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet> 
      {/* nested routes가 나타날 구멍*/} 
    </div>
  )
}

/// props가 한무더기로 object로 전달되니까 props.shoes~
function Card(props){
  return (
    <div className="col-md-4">
      <img alt="대체 텍스트" src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function Loading(){
  return (
    <div>
      로딩중임다
    </div>
  )
}

export default App;
