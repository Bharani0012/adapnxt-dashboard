import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <nav className="d-flex flex-column sidebar-section">
            <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/inventory"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Inventory
            </NavLink>
            <NavLink
                to="/order"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Order
            </NavLink>
            <NavLink
                to="/returns"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Returns
            </NavLink>
            <NavLink
                to="/customers"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Customers
            </NavLink>
            <NavLink
                to="/shipping"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Shipping
            </NavLink>
            <NavLink
                to="/channel"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Channel
            </NavLink>
            <NavLink
                to="/integration"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Integration
            </NavLink>
            <NavLink
                to="/calculator"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Calculators
            </NavLink>
            <NavLink
                to="/reports"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Reports
            </NavLink>
            <NavLink
                to="/account"
                className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
                Account
            </NavLink>
        </nav>
    );
};

export default SideBar;
