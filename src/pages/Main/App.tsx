import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import SideBarMenu from '../../components/Menu/SideBarMenu';
import Header from '../../components/Header/Header';
import ArticleContent from '../Articles/Articles';
import About from '../About/About';
import { useEffect, useState } from 'react';
import FileUpload from '../../components/FileUpload';


function App() {
  const [activePage,setActivePage] = useState("articles")
  const page = window.location.hash.substring(1)

  // useEffect(()=>{
  //   setActivePage(page)
  // },[page])

  return (<>
    <Header/>
    <Container fluid>
      <Row>
        <Col sm={3}>
          <SideBarMenu changeFun={setActivePage}/>
        </Col>
        <Col sm={9}>
          
          {activePage === "articles" &&
            <>
              <ArticleContent/>
            </>
          }
          {activePage === "about" &&
            <About/>
          }
        </Col>
      </Row>
    </Container>

  </>
  );
}

export default App;
