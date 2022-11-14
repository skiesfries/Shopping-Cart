import {Card, Button, Form, Row, Col, Image} from 'react-bootstrap';


function ItemCard(props) 
{
    const itemForSale = props.itemForSale; 
    return(
    <Card >
        <Card.Body>
            <Card.Title>{itemForSale.name}</Card.Title>
            <Card.Text>${itemForSale.price}</Card.Text>
            <Image src={itemForSale.image} width={itemForSale.imgSize} height={itemForSale.imgSize} fluid responsive rounded/>
            <div className='py-4'></div>
            <Button variant='dark' className='position-absolute top-100 start-50 translate-middle btn-outline-light'>Add to Cart</Button> 
        </Card.Body>
    </Card> 
    )
}

export default ItemCard;