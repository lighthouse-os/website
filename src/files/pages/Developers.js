import { Card, Button } from 'react-bootstrap';

const Developers = () => {
    return ( 
        <div className="developers container">
            <div className="row">
                <div className="col-sm-3">
                    Developers
                </div>
                <div className="col-sm-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Vyom Desai</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Rishawn Iyer</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-3">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Shoury Sharma</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
     );
}
 
export default Developers;