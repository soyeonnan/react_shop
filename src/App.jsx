import style from './App.module.css' 
import data from './mokData'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Header from './components/Header'
import Detail from './Pages/Detail'
import About from './Pages/About'
import styled from 'styled-components'
import axios from 'axios'
import Cart from './Pages/Cart'
import WatchedProduct from './components/WatchedProduct'

// stled-component 기본 사용법
// const 컴포넌트이름지정 = styled.태그명`css속성`

const Btn = styled.button`
  background : ${props => props.bg};
  font-size : 30px;
  border : 1px solid red;
  color : ${props => props.bg === 'blue' ? 'white' : 'black'};
`
const Btn2 = styled(Btn)`
  width : 200px;
  height : 200px;
`

const Div = styled.div`
  padding : 20px;
  background : skyblue;
`

function App() {
  const [fruit,setFruit] = useState([]);
  
 

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
      .then(response=>{
        console.log(response.data);
        setFruit([...response.data]);
      })
      .catch(error=>{
        console.log(error);
      })
    },[])
  
  
    useEffect(()=>{
      localStorage.setItem('watched',JSON.stringify([]));
    })


  return (


    
    <div className={style.container}> 

    {/* sttled-component 사용 */}
    {/* 규모가 작거나 협업 시 이걸 사용할 줄 모르는 사람이 있다면 사용X */}
      {/* <Div>
        <Btn bg='pink'>버튼</Btn>
        <Btn bg='blue'>버튼</Btn>
        <Btn2 bg='yellowgreen'>버튼</Btn2>
      </Div> */}

      <WatchedProduct fruit={fruit} />

      <Header/>

      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>} />
        <Route path='/test' element={<h1>테스트페이지</h1>} />

        <Route path='/cart' element={<Cart/>} />
        
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>}/>

        <Route path='/about' element={<About/>} >
        {/* 자식 라우터들은 / 슬러시를 제외해야 함 */}
          <Route path='intro' element={<div>회사소개</div>}></Route>
          <Route path='history' element={<div>연혁</div>}></Route>
          <Route path='loc' element={<div>오시는 길</div>}></Route>
        </Route>

        
        <Route path='*' element={<h1>존재하지 않는 페이지.</h1>} />

      </Routes>

      <button onClick={()=> {
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
          .then(response => {
            console.log(response.data)
            setFruit([...fruit, ...response.data])
          })
          .catch(error=>{
            console.log(error)
          })
        
      }}>더보기</button>

        <button onClick={()=>{
          axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then (response=> {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        }}>과일정보 받아오기</button>


        {/* <div className="row">
          {/* ``빽팁을 이용하면 이렇게 사용 */}
          {/* <img src={`${import.meta.env.BASE_URL}img/strawberry.jpg`} alt="" width='80%' />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div> */}


        {/* <div className="row">
          <img src={`${import.meta.env.BASE_URL}img/watermelon.jpg`} alt="" width='80%' />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div> */} 


      </div>
      
    // {/* <img src="{bg}" alt="" />        -> 이미지태그는 이렇게 사용 가능*/}
  
  )
}

export default App
