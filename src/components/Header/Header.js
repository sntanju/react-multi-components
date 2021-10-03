import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="just-box">
             <h2>This is Header</h2>
             <Link to="/home">Home</Link>
             <Link to="/more">More</Link>
             <Link to="/about">About</Link>
             <Link to="contatc">Contact</Link>
        </div>
    );
};

export default Header;