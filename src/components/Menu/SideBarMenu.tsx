import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { menuItems } from './config';

interface SideBarMenuProps {
  changeFun: (page:string)=>void
}

export default function SideBarMenu(props:SideBarMenuProps) {
  return (<>
    <Nav variant="pills" className='w-100 mx-0' >
      <Container className='w-100 mx-0'>
        <MenuEntry eventkey={"1"} href={"articles"} label={"Articles"} {...props}/>
        <MenuEntry eventkey={"2"} href={"about"} label={"About"} {...props}/>
      </Container>
    </Nav>
  </>);
}

interface MenuEntryProps {
  eventkey: string;
  href: string;
  label: string;
  changeFun: (page:string)=>void;
}

export function MenuEntry(props:MenuEntryProps) {
  return (
    <Row>
      <Col>
        <Nav.Item>
          <Nav.Link eventKey={props.eventkey} href={"#"+props.href} onClick={()=>{props.changeFun(props.href)}}>
            {props.label}
          </Nav.Link>
        </Nav.Item>
      </Col>
    </Row>
  );
}

