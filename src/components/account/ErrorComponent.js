import React from 'react';
import { NavLink } from 'react-router-dom';

var ErrorComponent = () => (
    <div>
        error component
        <NavLink to="/login">Login again</NavLink>
    </div>
);

export default ErrorComponent;