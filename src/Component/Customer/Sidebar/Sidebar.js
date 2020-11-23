import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCommentDots, faList, faPlus, faUserClock } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li>
                    <Link className="text-decoration-none text-dark item" to="/order"><FontAwesomeIcon icon={faCartPlus} /> Order</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-dark item" to="/service"><FontAwesomeIcon icon={faList} /> Service-list</Link>
                </li>
                <li>
                <Link className="text-decoration-none text-dark item" to="/review"><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;