import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useState, useContext } from "react";
import {CartContext} from '../CartContext';
import InCartProduct from "./InCartProduct";



function StoreNavBar() {
  const [show, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);
  const shoppingCart = useContext(CartContext);
  const totalItemsInCart = shoppingCart.items.reduce((sum, item) => sum + item.quantity, 0); // adding up the quantities of all the items in the item array

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
            <Button onClick={openModal}>{totalItemsInCart} Items in Cart</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {totalItemsInCart > 0 ?
            <>
              <h5>Items in Cart: </h5>
              {shoppingCart.items.map((currentItem, index) => 
              (
                <InCartProduct id={currentItem.id} quantity={currentItem.quantity} key={index}></InCartProduct>
              ))}
             
              <h3>Total: ${shoppingCart.getTotalCost().toFixed(2)}</h3>

              <Button variant='success'>Buy</Button>
            </>
            :
            <h2 align='center'>No items currently in cart</h2>
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StoreNavBar;
