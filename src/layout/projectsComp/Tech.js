import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

export default function Tech({ tech }) {
    return (
        <ul className='tech-container'>
            {tech.map((tech, index) => (
                <li key={index}>
                    <span>{tech.name}</span><a href={tech.docs}>Docs</a>
                    <p>{tech.description}</p>
                </li>
            ))}
        </ul>
    );
}