import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TabContent from "../components/TabContent"
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { setWatched } from "../redux/watchedSlice";

function Detail ({fruit}){
  const { id } = useParams();

  const [num,setNum] = useState(0); 
  const [num2,setNum2] = useState(0); 
  const [alret,setAlret] = useState(true);

  const [tabNumber, setTabNumber] =useState(0);


  const selectedFruit = fruit[id];

  const dispatch = useDispatch();

  // useEffect는 html이 전부 다 렌더링이 완료 된 후 실행이 된다.
  useEffect(()=>{
    //여기에 작성 된 모든 코드들은 마운트, 업데이트 될 때 실행
    let timer = setTimeout(()=>{
      setAlret(false);
      console.log('setTimeout 종료')
    },5000)

    return ()=> {
      clearTimeout(timer); 
    }

  }, []) // 의존성 배열에 빈 배열을 넣으면 마운트 시 한번만 실행이 됨
  // 의존성 배열 - 변경 감지 된 srate, props 설정하는거에 따라 실행 여부가 결정 됨

  // console.log('그냥 밖에 있는 console-lon임')

  // 의존성 배열이 없으면 마운트, 업데이트마다 실행이 됨
  // 의존성 배열이 빈 배열이면 마운트 시 한번만 실행이 됨
  // 의존성 배열에 특정 state, proprs가 있으면 마운트 될 때와 ㅎ당 state, props가 업데이트 될 때 실행이 됨
  useEffect(()=>{
    console.log('useEffect 확인용 콘솔')
  },[num])

  useEffect(()=>{
    // 방금 들어온 상품의 id를 로컬스토리지에 추가
    let watched = localStorage.getItem('watched');

    // 문자열이라서 JSON을 이용해서 배열로 변경
    watched = JSON.parse(watched);

    // 3개 이상 들어가면 제거하는 작업 (pop이 그 역활)
    // 이렇게 작업했더니 중복제거로 인해 2개만 남는 상황이 생김

    // .includes : 해당 배열에 값이 있으면 true, 없으면 false
    // 이미 최근 본 상품이 3개 일 때 새로운 걸 추가해야 하므로 기존거 하나 지우고 추가
    // 개수로만 삭제를 하니까 중복된 걸 보게되면 문제가 생김
    // 이미 들어있는 거면 안 지워도 됨 -> 없을때만 삭제를 하면 될 듯
    if(watched.length === 3 && !watched.includes(id))
      watched.pop();

    watched = [id, ...watched]

    // Set은 (map,set,list등) 중복을 허용 안 함 
    watched = new Set(watched);
    // Set은 배열이 아님 그래서 다시 배열 형태로 변환해야 함
    watched = Array.from(watched);

    localStorage.setItem('watched', JSON.stringify(watched));
    dispatch( setWatched(watched) )

  },[])

  if (!selectedFruit) {
    return <div>해당 상품이 없습니다.</div>
  }

  return(
    <div className="container mt-3">

      
      <button onClick={()=>{
        setNum(num+1);

      }}>버튼</button>{num}

      <button onClick={()=>{
        setNum2(num2+1);

      }}>버튼2</button>{num2}

      {
        alret ?
        <div className="alret alret-danger">
        5초 안에 구매하면 공짜
        </div>
        :''
      }

      


      <div className="row">
        <div className="col-md-6">
          <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} alt="" width='100%' />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].comtene}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger" onClick={()=>{
            const item = {
              id: id,
              // id는 useparam에서 뽑아온 값
              title: fruit[id].title,
              count: 1          
            }

            dispatch( addItem(item) )
            window.alert('장바구니에 추가 되었습니다.')
            // 그냥 alert하면 오류가 떠서 앞에 window를 붙혀주면 됨
          }}>주문하기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" justify>
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumber(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumber(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setTabNumber(2);
          }}>반품,교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabNumber={tabNumber}/>

    </div>
  )
}

export default Detail;