import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink, Outlet } from 'react-router-dom';

export default function ProjectMenu() {
    return (
        <aside>
            <ul>
                <li>
                    <NavLink to='description'>Description</NavLink>
                </li>
                <li>
                    <NavLink to='tech'>Tech</NavLink>
                </li>
                <li>
                    <NavLink to='images'>Images</NavLink>
                </li>
                <li>
                    <a href="https://github.com/johannes9108">repo</a>
                </li>
            </ul>
        </aside>
    );
}