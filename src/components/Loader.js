// Loader.js
import React from 'react';
import './Loader.css'; // Импортиране на CSS файла

const Loader = () => {
    return <div className="loader">
        <div class="loader-overlay">
            <div class="loader"></div>
        </div>
    </div>;

};

export default Loader;
