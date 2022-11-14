import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useState } from "react";

function StoreNavBar() {
  const [show, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Poké Mart</Navbar.Brand>
          <Nav className="main-me">
            <Nav.Link href="/pokeballs">Pokeballs</Nav.Link>
            <Nav.Link href="/potions">Potions</Nav.Link>
            <Nav.Link href="/powerups">Power Ups</Nav.Link>
          </Nav>
          <NavbarToggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={openModal}>0 Items in Cart</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Payment Stuff</Modal.Body>
      </Modal>
    </>
  );
}

export default StoreNavBar;
