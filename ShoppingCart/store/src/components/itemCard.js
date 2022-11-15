import { Card, Button, Form, Row, Col, Image } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ItemCard(props) {
  const itemForSale = props.itemForSale;
  const shoppingCart = useContext(CartContext);
  const itemsInCart = shoppingCart.getItemQuantity(itemForSale.id);
  console.log(shoppingCart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Title><h4>{itemForSale.name}</h4></Card.Title>
        <Card.Text><h5>${itemForSale.price.toFixed(2)}</h5></Card.Text>
        <Image
          src={itemForSale.image}
          width={itemForSale.imgSize}
          height={itemForSale.imgSize}
          fluid
          responsive
          rounded
        />
        <div className="py-3"></div>
        { itemsInCart > 0 ? 
          <>
          <Form as={Row}>
            <Form.Label column="true" sm="6" className='mx-auto'>
                {itemsInCart} In Cart  
                <Col sm="6">
                    <Button style={{width: 50}} variant="dark" sm="6" className="btn-outline-light" onClick={() => shoppingCart.addItemToCart(itemForSale.id)}>+</Button>
                    <Button style={{width: 50}} variant="dark" sm="6" className="btn-outline-light" onClick={() => shoppingCart.removeItemfromCart(itemForSale.id)}>-</Button>
                </Col>
            </Form.Label>
          </Form>
          <Button variant='danger' onClick={() => shoppingCart.clearItemFromCart(itemForSale.id)}> 
            Remove All From Cart
          </Button>
          </>
         : 
          <Button variant="dark" className="position-absolute top-100 start-50 translate-middle btn-outline-light" onClick={() => shoppingCart.addItemToCart(itemForSale.id)}>
            Add to Cart
          </Button>
        }
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
