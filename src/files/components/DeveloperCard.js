import { Card, Button } from 'react-bootstrap';

const DeveloperCard = ({who, image, content,name,post}) => {
    return <div className="col-sm-3 devCard">
    <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{who}</Card.Title>
            <p>{name}</p>
            <h3>{post}</h3>
            <Card.Text>
                 {content}
            </Card.Text>
            <Button variant="primary" href={`https://github.com/${who}`}>Github</Button>
        </Card.Body>
    </Card>
    </div>
}
export default DeveloperCard;