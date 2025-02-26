import React from 'react';
import { useParams } from 'react-router-dom';
import { educations } from './Resume'; // Adjust the import path as needed

export default function EducationDetail() {
    const { id } = useParams();
    const education = educations.find(edu => edu.id === parseInt(id));

    return (
        <div className='resume-detail'>
            <h2>{education.school}</h2>
            <p>{education.degree}</p>
            <p>{education.year}</p>
            <p>{education.content}</p>
        </div>
    );
}