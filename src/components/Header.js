import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Pages from "./Pages";

function Header() {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <>
            <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
            <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
        </>
    );

    let userNavigation = (
        <>
            <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                About
            </NavLink>
            <NavLink
                to="/menu"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Menu
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Contact
            </NavLink>
            <NavLink
                to="/service"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Service
            </NavLink>
            <Pages />
            <span className="nav-item nav-link">Welcome, {user.email}</span>
            <NavLink
                to="/profile"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Profile
            </NavLink>
            <NavLink
                to="/logout"
                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            >
                Logout
            </NavLink>
        </>
    );

    return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
                {user.email ? userNavigation : guestNavigation}
            </div>
            <div className="navbar-nav ms-auto">
                <NavLink to="/reservation" className="btn btn-primary py-2 px-4 ms-3">
                    Book A Table
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
