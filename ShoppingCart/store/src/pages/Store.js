import {Row, Col, Container} from 'react-bootstrap';


import { itemsInStock } from '../items';
import ItemCard from '../components/ItemCard';

function Store()
{
    return(
    <Container>
        <h1 align='center' className='p-3'>Welcome to the Poké Mart</h1>
        <Row xs={1} md={3} className='g-4 justify-content-md-center py-5'>
            {itemsInStock.map((item, index) =>
            (
                <Col align='center' key={index}>
                <ItemCard itemForSale = {item}></ItemCard>
            </Col>
            ))}
        </Row>
    </Container>
    )
}
export default Store;