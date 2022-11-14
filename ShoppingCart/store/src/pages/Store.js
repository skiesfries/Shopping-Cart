import {Row, Col, Container, Image} from 'react-bootstrap';
import pokeball from '../assets/pokeball.png';
import potion from '../assets/potion.png';
import zcrystal from '../assets/z crystal.png';


function Store()
{
    return(
    <Container>
        <Row xs={1} md={3} className='g-4 justify-content-md-center py-5'>
            <Col align='center'>
                <h1>Pokeball</h1>
                <Container>
                    <Image src={pokeball} width='200' height='200' fluid responsive rounded/>
                </Container>
            </Col>
            <Col align='center'>
                <h1>Potion</h1>
                <Image src={potion} width='200' height='200' fluid responsive rounded/>
            </Col>
            <Col align='center'>
                <h1>Z Crystal</h1>
                <Image src={zcrystal} width='350' height='350' fluid responsive rounded/>
            </Col>
        </Row>
    </Container>
    )
}
export default Store;