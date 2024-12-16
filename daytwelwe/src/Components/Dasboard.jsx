import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Dasboard = ({ regDash }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12" style={{ backgroundColor: "grey" }}>
            <h1>Welcome {regDash.name}</h1>
            <h2>Email ID {regDash.email}</h2>
          </div>
          <div className="col-sm-8">
            <h1>User Apps</h1>
          </div>
          <div className="col-sem-4">
            <Link to="/weather">
            <h2>WeatherApp</h2>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/logout">Logout</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;