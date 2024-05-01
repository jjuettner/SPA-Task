import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import SideBarMenu from '../../components/Sidebar/SideBarMenu';
import Header from '../../components/Header';
import ArticleContent from '../Articles/Articles';
import About from '../About';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Header/>
    <Container fluid>
      <Row>
        <Col sm={1}>
          <SideBarMenu/>
        </Col>
        <Col sm={11} id="content-window">
          <Router>
            <Routes>
              <Route index path="/articles" element={<ArticleContent/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>

  </>
  );
}

export default App;
