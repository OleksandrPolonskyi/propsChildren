import { Container, Row, Col } from 'react-bootstrap';

const BootstrapTest = (props) => {
    return (
        <Container className="mt-7 mb-7">
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;