import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./css/deshboard.css"


const Deshboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user");
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.error("error while fetching users:", error.message);

        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    const handleUpdate = (userId) => {
        navigate(`/user/${userId}`)

    };

    const handleDelete = async (userId) => {
        let c = confirm("Do you really want to delete this pass")
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: "DELETE"
            });
            if (response.ok, c) {
                fetchUsers();
            }

        } catch (error) {
            console.error("error while deleting users:", error.message);

        }
    }

    return (
        <div>
               <div className="tableStyle">
               <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Button
                                    className="me-2"
                                        variant="dark"
                                        onClick={() => handleUpdate(user._id)}>

                                        Update
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(user._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
               </div>
        </div>
    )
};

export default Deshboard;
