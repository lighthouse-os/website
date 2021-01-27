import HomepageHead from "../components/HomepageHead";
import Phone from "../components/Phone"

const Homepage = () => {
    return ( 
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
     );
}
 
export default Homepage;