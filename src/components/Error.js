import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Error.css';
import pizzaError from '../assets/images/error.jpg';

function Error() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleGoHome = () => {
        setError(true);

        navigate('/');
    }

    return (
        <div className="error-page" style={{ backgroundImage: `url(${pizzaError})` }}>
            <h1>404 - Page Not Found
                {error}
            </h1>
            <h2>Oops! The page you are looking for does not exist.</h2>
            <button className="error-page-button" onClick={handleGoHome}>
                Go to Homepage
            </button>
        </div>
    )
}

export default Error;