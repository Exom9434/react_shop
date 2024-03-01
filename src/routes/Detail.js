import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components"
import { useEffect } from 'react';



function Detail(props){
  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')

  let handleChange = (e) =>{
    let {value} = e.target
    if(typeof value != Number){
      window.alert("그러지 마세요")
    }
  }
  //useEffect 안에 있는 코드는 html 렌더링 후에 동작함, 홈페이지 렌더링 같은 걸 먼저하고 시간이  필요한 건 따로 굴림
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착
  //useEffect안에 리턴 넣으면 useEffect 동작하기 전에 먼저 동작함, 기존 데이터를 삭제해서 중복을 회피하는 등의 방법
  // CLENA UP 함수는 마운트 시에는 작동하지 않음.
  useEffect(() =>{
    if (isNaN(num) == true){
      window.alert('그러지마세요')
    }
  }, [num])


    let [count, setCount] = useState(0)
    let { id } = useParams();

    id = parseInt(id,10);

    let result = props.shoes.find((x) => x.id === id);

    return(
      <div className="container">
      {alert === true ? <div className='alert alert-warining'> 2초 이내 구매시 할인</div> : null}
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
            <div className="col-md-6">
            <input onChange={ (e) => { setNum(e.target.value) } } />
              <h4 className="pt-5">{result.title}</h4>
              <p>{result.content}</p>
              <p>{result.price}원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
      </div>
    )
}

export default Detail;