import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart () {

  const test = useSelector((state)=>{
    return state
  })

  console.log(test);

  return(
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>apple</th>
          <th>10</th>
          <th>수정하기</th>
        </tr>
      </tbody>
    </Table>

  )
}

export default Cart;