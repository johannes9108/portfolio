
import React, { useState } from 'react';




export default function Dashboard() {

    const [apiData, setApiData] = useState([
        {
            id: 1,
            name: 'Data_1',
            description: 'Description of data_1',
            tech: ['API', 'JSON', 'JavaScript'],
        },
        {
            id: 2,
            name: 'Data_2',
            description: 'Description of data_2',
            tech: ['Java', 'Python', 'JavaScript'],
        },
        {
            id: 3,
            name: 'Data_3',
            description: 'Description of data_3',
            tech: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 4,
            name: 'Data_4',
            description: 'Description of data_4',
            tech: ['Jenkins', 'Docker', 'Kubernetes'],
        },
        {
            id: 5,
            name: 'Data_5',
            description: 'Description of data_5',
            tech: ['Linux', 'Windows', 'MacOS'],
        },
    ]);



    return (
        <article className="dashboard-container">
            {apiData && apiData.map(data => (
                <section key={data.id} className="dashboard-section">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    {data.tech.map(tech => (
                        <p key={tech}>{tech}</p>
                    ))}
                </section>
            ))}
        </article>
    );
}