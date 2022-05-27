import React from 'react'

import {Navbar,Container} from 'react-bootstrap';
function Navb() {
  return (
    <div>
       <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">HomePage</Navbar.Brand>
    </Container>
  </Navbar>  
    </div>
  )
}

export default Navb