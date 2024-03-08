import { useSelector } from "react-redux"
import Table from "react-bootstrap/Table"
///테이블 헤드-tr쓰면 행하나 ht,hd로 열하나씩 생성
function Cart(){
    let a = useSelector((state)=>{return state}) //store 안에 있던 모든 state가 됨. state.user 처럼 어떤 스테이트를 쓸지 특정 가능함.

    return(
        <div>
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
                a.cart.map((item)=>(                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>변경하기</td>
                </tr>
                ))
                }
            </tbody>

            </Table> 
        </div>
    )
}

export default Cart