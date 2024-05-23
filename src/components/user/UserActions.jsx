import React, { useState, useContext } from 'react'
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const UserActions = ({action}) => {
    const { user, dispatch } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const navigate = useNavigate();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/home");
    };
    const userId = user._id;
    return (
        <>
            <>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>{user.username}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>User menu</DropdownItem>
                        <DropdownItem divider />
                        <Link to={`/users/${userId}`}><DropdownItem>Profile</DropdownItem></Link>
                        <Link to='/dashboard'><DropdownItem>Dashboard</DropdownItem></Link>
                        <DropdownItem onClick={logout}>Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        </>
    )
}

export default UserActions