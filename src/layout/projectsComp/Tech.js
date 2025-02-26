import React from 'react';
import { useOutletContext } from 'react-router-dom';
// import { NavLink, Outlet } from 'react-router-dom';

export default function Tech() {
    const [selectedProject] = useOutletContext();

    return (
        <ul className='tech-container'>
            {selectedProject.map((tech, index) => (
                <li key={index}>
                    <span>{tech.name}</span><a href={tech.docs}>Docs</a>
                    <p>{tech.description}</p>
                </li>
            ))}
        </ul>
    );
}