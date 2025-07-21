import { useNavigate } from "react-router-dom";

function Card({fr}) {
  const navigate = useNavigate();
  return (
    
    <div className="col-md-4" onClick={()=>{
      navigate('/detail/'+ fr.id )
    }} >
      
      <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fr.title}.jpg`} alt="" width='80%' />
      <h4>{fr.title}</h4>
      <p>{fr.comtene}</p>
      
    </div>

  )
}

export default Card;