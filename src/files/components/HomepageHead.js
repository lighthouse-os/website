import { Button } from 'react-bootstrap';

const HomepageHead = () => {
    return ( 
        <div className="home-page-head">
            <h1>Minimal Operating System</h1>
            <div className="landingText">
                <h5>With most simplistic</h5>
                <h5>yet aesthetic feel</h5>
                <h5>Staying close to AOSP</h5>
            <Button variant="primary" className="homepageBtn">Know more</Button>
            </div>
        </div>
     );
}
 
export default HomepageHead;