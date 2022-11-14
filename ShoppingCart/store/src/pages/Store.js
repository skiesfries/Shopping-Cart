import {Row, Col, Container, Image} from 'react-bootstrap';


import { productsArray } from '../productStore';


function Store()
{
    return(
    <Container>
        <h1 align='center' className='p-3'>Welcome to the Poké Mart</h1>
        <Row xs={1} md={3} className='g-4 justify-content-md-center py-5'>
            {productsArray.map((product, index) =>
            (
                <Col align='center' key={index}>
                <h1>{product.name}</h1>
                <Container>
                    <Image src={product.image} width={product.imgSize} height={product.imgSize} fluid responsive rounded/>
                </Container>
            </Col>
            ))}
        </Row>
    </Container>
    )
}
export default Store;