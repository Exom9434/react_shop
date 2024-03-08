import React, { useState, useContext } from 'react'
import {useParams} from "react-router-dom"
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';

import {Context1} from "./../App.js"

// single page react application : component간 state 공유가 어려움.

function Detail(props){
  let {stock} = useContext(Context1)

  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')
  let [tab, setTab] = useState(0)
  let [fade2,setFade2] = useState('')

  useEffect(()=>{
    setFade2('end')
    return ()=>{ 
      setFade2('')
    }
  }, [])

  //useEffect 안에 있는 코드는 html 렌더링 후에 동작함, 홈페이지 렌더링 같은 걸 먼저하고 시간이  필요한 건 따로 굴림
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착
  //useEffect안에 리턴 넣으면 useEffect 동작하기 전에 먼저 동작함, 기존 데이터를 삭제해서 중복을 회피하는 등의 방법
  // Clean UP 함수는 마운트 시에는 작동하지 않음.

  // 여기에 타이머 설정을 위한 useEffect 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000); // 2초 후에 실행될 함수 설정

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 제거
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시에만 실행되도록 함
  
  useEffect(() =>{
    if (isNaN(num) === true){
      window.alert('그러지마세요')
    }
  }, [num])

    let { id } = useParams();

    id = parseInt(id,10);

    let result = props.shoes.find((x) => x.id === id);

    return(
      <div className={"container start " + fade2}>
      {alert === true ? <div className='alert alert-warining'> 2초 이내 구매시 할인</div> : null}
        <div className="row">
          <div className="col-md-6">
            <img alt="대체텍스트" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
            <div className="col-md-6">
            <input onChange={ (e) => { setNum(e.target.value) } } />
              <h4 className="pt-5">{result.title}</h4>
              <p>{result.content}</p>
              <p>{result.price}원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent tab={tab}/>

      </div>
    )
}

function TabContent({tab}){
  
  let [fade,setFade] = useState('')
  let {stock} = useContext(Context1)

  useEffect(()=>{
    setTimeout(()=>{setFade(('end')
    )} , 100)
    return()=>{
      setFade('')
    }
  },[tab]) //tab이 변경될 때마다 코드 실햄
  return <div className={`start ${fade}`}>
    {[<div>{stock[0]}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
  </div>

}




export default Detail