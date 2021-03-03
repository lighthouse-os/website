import HomepageHead from "../components/HomepageHead";
import Phone from "../components/Phone"
import Navbar from "../components/Navbar";

const Homepage = () => {
    return ( 
        <div>
            <Navbar/>
        <div className="home-page container">
            <div className="row">
                <div className="col-sm-7">
                    <HomepageHead />
                </div>
                <div className="col-sm-5">
                    <Phone />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Homepage;