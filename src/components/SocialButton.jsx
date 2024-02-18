import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SocialButton = (props) => {
    return (
        <>
        <Container>
            <Row xs="auto" className='justify-content-md-center'>
                <Col>
                    <button className='rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName1}</title><path d={props.iconsSVG1}/></svg></button>
                </Col>
                <Col>
                    <button className='rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName2}</title><path d={props.iconsSVG2}/></svg></button>
                </Col>
                <Col>
                    <button className='rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName3}</title><path d={props.iconsSVG3}/></svg></button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

    export default SocialButton