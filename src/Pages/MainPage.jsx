import bg from '../bg.jpg'  //작명의 영역
import Card from '../components/card';


function MainPage ({fruit} ){
  return(
    <>
    <div className='main-bg' style={{backgroundImage:'url(' + bg + ')'}}></div>
     {/* //* {} 안에는 -이걸 넣으면 빼기로 인식해서 다음 문자르 대문자로 변경하면 됨  */}

  
    
    <div className="container">

      <div className="row">
        {/* 퍼블릭 경로는 / 슬래시로 시작해서 사용해도 되는 데 문제가 발생 할 수 있음 */}
        {/* 이렇게 사용하면 배포 후에 문제가 발생 될 수 있음
       // 배포 -> qwer.com 이렇게 끝나면 상관없는데 뒤에 qwre.com/ggg/img/ 이렇게 더 나오면 오류 뜸 */}
        {
          fruit.map((fr,i)=>{
            return(
              <Card fr={fr} key={i}/>
            )
          })
        }
        
      </div>
    </div>
   </>
  )
}

export default MainPage;