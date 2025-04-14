import React from "react";
import {Container,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
       <Navbar className="bg-black text-white p-4">
        <Container>
          <Nav className="flex justify-end space-x-4">
            <Link  to="/">My App</Link>
            <Link to="/">Dashboard </Link>
            <Link to="/user">PostUser</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
