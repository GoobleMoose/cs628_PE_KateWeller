import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Cities (){
    return <div className="section">
        <h2>Cities List</h2>
        <div>
            <ul>
                <Link to="/cities/city">City</Link>
            </ul>
        </div>
        <Outlet />
    </div>

}

export default Cities;