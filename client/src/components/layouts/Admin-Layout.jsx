import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom'; // Import NavLink and Outlet from react-router-dom
import { FaUser } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { useAuth } from '../../store/auth'; // Import useAuth
import './adminLayout.css'; // Import the CSS file

const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("admin layout", user);

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (!user.isAdmin) {
        return <Navigate to="/Home" />
    }
    return (
        <div>
            <div className="navbar"> {/* Apply the navbar class */}
                {/* Navbar content */}
                Navbar
            </div>
            <div className="admin-navbar"> {/* Apply the admin-navbar class */}
                {/* Admin Navbar links */}
                <nav>
                    <ul>
                        <li><NavLink to="/home"><FaHome />Home</NavLink></li>
                        <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
                        <li><NavLink to="/admin/reviews"><MdRateReview />Reviews</NavLink></li>
                        <li><NavLink to="/products"><RiShoppingCartFill />Products</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

export default AdminLayout;
