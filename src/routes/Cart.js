import { useDispatch, useSelector } from "react-redux"
import Table from "react-bootstrap/Table"
import { changeName, increase} from "/Users/nojaegyeong/Documents/GitHub/react_shop/src/store/userSlice.js"
import {addCount, addItem} from "./../store/stockSlice.js"
///테이블 헤드-tr쓰면 행하나 ht,hd로 열하나씩 생성
function Cart(){
    let state = useSelector((state)=>{return state}) //store 안에 있던 모든 state가 됨. state.user 처럼 어떤 스테이트를 쓸지 특정 가능함.
    let dispatch = useDispatch()

    return(
        <div> 

            <h6> {state.user.age} </h6>
            console.log(state.cart)
            <button onClick={()=>{dispatch(increase())}}> + </button>

            <Table>
            <thead>
                <tr> 
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                state.cart.map((item, index)=>(<tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>
                        <button onClick={()=>{
                            dispatch(addCount(state.cart[index].id)) 
                        }}>변경하기</button>
                    </td>
                </tr>
                ))
                }
            </tbody>

            </Table> 
        </div>
    )
}

export default Cart