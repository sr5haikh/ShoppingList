import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Container, Button } from "reactstrap";

export const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Button className="b1">&lt; Go Back</Button>
        </Link>

        <NavbarBrand>Daily Groceries</NavbarBrand>

        <Link to="/add">
          <Button>+ Add User</Button>
        </Link>
      </Container>
    </Navbar>
  );
};
