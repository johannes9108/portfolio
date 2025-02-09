import React, { useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
// import { NavLink, Outlet } from 'react-router-dom';


export const outsideProjects = [
    {
        id: 1,
        name: 'Project_1',
        description: 'Description of project_1',
        tech: [
            {
                'name': 'HTML',
                'description': 'Use for structuring the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/HTML'
            },
            {
                'name': 'CSS',
                'description': 'Use for styling the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/CSS'
            },
            {
                'name': 'JavaScript',
                'description': 'Use for adding functionality to the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            },
            {
                'name': 'React',
                'description': 'Use for building the frontend application.',
                'docs': 'https://reactjs.org/'
            },
            {
                'name': 'Redux',
                'description': 'Use for managing the frontend application state.',
                'docs': 'https://redux.js.org/'
            },
            {
                'name': 'Node.js',
                'description': 'Use for building the backend application.',
                'docs': 'https://nodejs.org/en/'
            },
            {
                'name': 'Express',
                'description': 'Use for building the backend application.',
                'docs': 'https://expressjs.com/'
            }
        ],
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        repo: ""
    },
    {
        id: 2,
        name: 'Project_2',
        description: 'Description of project_2',
        tech: [
            {
                'name': 'HTML',
                'description': 'Use for structuring the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/HTML'
            },
            {
                'name': 'CSS',
                'description': 'Use for styling the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/CSS'
            },
            {
                'name': 'JavaScript',
                'description': 'Use for adding functionality to the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            },
            {
                'name': 'React',
                'description': 'Use for building the frontend application.',
                'docs': 'https://reactjs.org/'
            },
            {
                'name': 'Redux',
                'description': 'Use for managing the frontend application state.',
                'docs': 'https://redux.js.org/'
            },
            {
                'name': 'Node.js',
                'description': 'Use for building the backend application.',
                'docs': 'https://nodejs.org/en/'
            },
            {
                'name': 'Express',
                'description': 'Use for building the backend application.',
                'docs': 'https://expressjs.com/'
            }
        ],
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        repo: ""
    },
    {
        id: 3,
        name: 'Project_3',
        description: 'Description of project_3',
        tech: [
            {
                'name': 'HTML',
                'description': 'Use for structuring the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/HTML'
            },
            {
                'name': 'CSS',
                'description': 'Use for styling the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/CSS'
            },
            {
                'name': 'JavaScript',
                'description': 'Use for adding functionality to the frontend application.',
                'docs': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            },
            {
                'name': 'React',
                'description': 'Use for building the frontend application.',
                'docs': 'https://reactjs.org/'
            },
            {
                'name': 'Redux',
                'description': 'Use for managing the frontend application state.',
                'docs': 'https://redux.js.org/'
            },
            {
                'name': 'Node.js',
                'description': 'Use for building the backend application.',
                'docs': 'https://nodejs.org/en/'
            },
            {
                'name': 'Express',
                'description': 'Use for building the backend application.',
                'docs': 'https://expressjs.com/'
            }
        ],
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        repo: ""
    }
];
export default function Projects() {
    const [projects, setProjects] = useState(outsideProjects);
    const { projectName } = useParams();

    const selectedProject = projects.find(project => project.name.toLowerCase() === projectName?.toLowerCase());


    return (
        <article className='projects-container'>
            <aside>
                {selectedProject ? (
                    <div className='project-nav'>
                        <ul>
                            <li>
                                <NavLink to={`/projects/${selectedProject.name.toLowerCase()}/description`}>Description</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/projects/${selectedProject.name.toLowerCase()}/tech`}>Tech</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/projects/${selectedProject.name.toLowerCase()}/images`}>Images</NavLink>
                            </li>
                            <li>
                                <a href="">Repository</a>
                            </li>
                        </ul>
                        <Link to="/projects">Back to Projects</Link>
                    </div>
                ) : (
                    <ul>
                        {projects.map(project => (
                            <li key={project.id}>
                                <NavLink to={`/projects/${project.name.toLowerCase()}`}>{project.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </aside>
            <section>
                {selectedProject ? (
                    <>
                        <h2>{selectedProject.name}</h2>
                        <Outlet />
                    </>
                ) : (
                    <h2>Projects</h2>
                )}
            </section>
        </article>
    );
};