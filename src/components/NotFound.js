import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Not Found page default 404!!
        <p><Link to="/">Go Home</Link></p>
    </div>
)

export default NotFoundPage;