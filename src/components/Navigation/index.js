import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.SIGN_IN}>SignIn</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landiing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
