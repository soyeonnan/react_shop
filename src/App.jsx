import './App.css'  
import data from './mokData'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Header from './components/Header'

function App() {
  const [fruit,setFrult] = useState(data);

  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>} />
        <Route path='/test' element={<h1>테스트페이지</h1>} />
      </Routes>

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
