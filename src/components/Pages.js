import { Link } from "react-router-dom";

function Pages() {
    return(
        <div className="nav-item dropdown">
        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu m-0">
            <Link to="/booking" className="dropdown-item">Booking</Link>
            <Link to="/team" className="dropdown-item">Our Team</Link>
            <Link to="/reservation" className="dropdown-item">Reservation</Link>
        </div>
    </div>
    )
}

export default Pages;