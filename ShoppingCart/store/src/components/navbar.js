import { Button, Container, Navbar, Modal, Nav} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function StoreNavBar()
{
   return(
   <Navbar expand='sm' bg='dark' variant='dark'>
    <Container>
        <Navbar.Brand href='/'>
            Poké Mart
        </Navbar.Brand>
        <Nav className="main-me">
            <Nav.Link href="/pokeballs">Pokeballs</Nav.Link>
            <Nav.Link href="/potions">Potions</Nav.Link>
            <Nav.Link href="/powerups">Power Ups</Nav.Link>
          </Nav>
        <NavbarToggle/> 
        <Navbar.Collapse className='justify-content-end'>
            <Button>
                0 Items in Cart
            </Button>
        </Navbar.Collapse>

    </Container>
   </Navbar>
   )
}

export default StoreNavBar;