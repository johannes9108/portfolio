import React from 'react';
import { useParams } from 'react-router-dom';
import { workExperiences } from './Resume'; // Adjust the import path as needed

export default function WorkExperienceDetail() {
    const { id } = useParams();
    const workExperience = workExperiences.find(work => work.id === parseInt(id));

    return (
        <div className='resume-detail'>
            <h2>{workExperience.company}</h2>
            <p>{workExperience.position}</p>
            <p>{workExperience.year}</p>
            <p>{workExperience.content}</p>
        </div>
    );
}