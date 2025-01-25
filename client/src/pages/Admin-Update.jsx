import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import './AdminUpdate.css'; // Changed import to match the new CSS file name

const CustomAdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
    });

    const params = useParams();
    const userId = params.id;
    console.log("params single user: ", params);
    const { authorizationToken } = useAuth();

    //get single user data

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            });
            const userData = await response.json();
            setData(userData);
        } catch (error) {
            console.error(error);
        } 
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    //to update the data dynamically

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                console.log("Update successful");
                toast.success("Updated successfully");
            } else {
                toast.error("Update failed");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <section className="custom-section-contact"> {/* Changed class name to 'custom-section-contact' */}
            <div className="custom-contact-content custom-container"> {/* Changed class names to 'custom-contact-content' and 'custom-container' */}
                <h1 className="custom-main-heading">Update User Data</h1> {/* Changed class name to 'custom-main-heading' */}
            </div>
            <div className="custom-container grid grid-two-cols"> {/* Changed class name to 'custom-container' */}
                <section className="custom-section-form"> {/* Changed class name to 'custom-section-form' */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="custom-username">username</label> {/* Changed id to 'custom-username' */}
                            <input
                                type="text"
                                name="username"
                                id="custom-username" 
                                autoComplete="off"
                                value={data.username}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="custom-email">email</label> {/* Changed id to 'custom-email' */}
                            <input
                                type="email"
                                name="email"
                                id="custom-email" 
                                autoComplete="off"
                                value={data.email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};

export default CustomAdminUpdate;
