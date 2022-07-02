import React from 'react';
import { 
  Navbar, 
  Container,
  Form,
  FormControl,
} from 'react-bootstrap';

import './AppBar.css';

const AppBar = (props) => {
  return (
    <Navbar fixed="top" className="nav-bar">
      <Container fluid style={{ height: 'inherit' }}>
        <Form style={{ height: 'inherit' }}>
          <FormControl 
            className="nav-search"
            type="search"
            placeholder="Search"
          />
        </Form>
      </Container>
    </Navbar>
  )
}

export default AppBar;