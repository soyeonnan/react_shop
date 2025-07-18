import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate();

  return(
  

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            <Link to={"/test"}>Test2</Link> 
            {/* 라우터에 있는 링크를 이용하면 로딩이 안됨 */}
          </Nav>
        </Container>
      </Navbar>

  
  )
}

export default Header;