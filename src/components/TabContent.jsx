import { useEffect, useState } from 'react';
import './TabContent.css'

function TabContent({ tabNumber }){

  const [fade, setFade] = useState('');

  // (오토매칭) state를 업데이트하는 작업은 비동기로 처리함
  // state를 변경하는 함수를 호출하면 바로 반영하는게 아니라 내부적으로 일단 저장해둠
  // 그리고 한번에 모아 둔 변경처리를 일괄적으로 함 -> 렌더링을 한번만 하게 됨
  useEffect (()=>{
    //setFade('');  
    // setFade('end');
    const timer = setTimeout(()=>{
      setFade('end');
    },10)

    return () => {
      clearTimeout(timer)
      setFade('');
    }

  },[tabNumber])

  return(

    <div className={`start ${fade}`}>
    {
      [ <div>상세정보</div>,<div>리뷰</div>, <div>교환 및 반품정보</div> ][tabNumber]
    }  
    </div>
    // if(tabNumber ===0){
    //   return <div>상세정보</div>;
    // }else if (tabNumber===1){
    //   return <div>리뷰</div>
    // }else if (tabNumber===2){
    //   return <div>교환 및 반품정보</div>
    // }
  )
}


export default TabContent;