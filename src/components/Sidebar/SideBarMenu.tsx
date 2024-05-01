import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./style.css"

export default function SideBarMenu() {
  return (<>
    <Nav variant="pills" activeKey={"articles"} className='mx-0 d-none d-md-block sidebar' >
      <Container className='w-100 mx-0' id={"sidebar-wrapper"}>
        <MenuEntry eventkey={"1"} href={"articles"} label={"Articles"}/>
        <MenuEntry eventkey={"2"} href={"about"} label={"About"}/>
      </Container>
    </Nav>
  </>);
}

interface MenuEntryProps {
  eventkey: string;
  href: string;
  label: string;
}

export function MenuEntry(props:MenuEntryProps) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={props.eventkey} href={`#/${props.href}`} className='sidebar-heading'>
        {props.label}
      </Nav.Link>
    </Nav.Item>
  );
}

