import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";




export const educations = [
    {
        id: 1,
        school: 'School_1',
        degree: 'Degree_1',
        year: 'Year_1',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    },
    {
        id: 2,
        school: 'School_2',
        degree: 'Degree_2',
        year: 'Year_2',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    },
    {
        id: 3,
        school: 'School_3',
        degree: 'Degree_3',
        year: 'Year_3',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    }
];

export const workExperiences = [
    {
        id: 1,
        company: 'Company_1',
        position: 'Position_1',
        year: 'Year_1',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    },
    {
        id: 2,
        company: 'Company_2',
        position: 'Position_2',
        year: 'Year_2',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    },
    {
        id: 3,
        company: 'Company_3',
        position: 'Position_3',
        year: 'Year_3',
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil facere, dolores cum tempore velit consequuntur beatae praesentium deleniti, eaque laboriosam minima expedita nemo quae distinctio amet, quas possimus reiciendis officiis temporibus rem quidem voluptas perspiciatis! Corporis placeat deleniti error fuga aut rerum iusto sapiente, expedita blanditiis voluptatem neque laboriosam.",
    }
];


export default function Resume() {

    const [education, setEducation] = useState(educations);
    const [workExperience, setWorkExperience] = useState(workExperiences);
    const [showEducation, setShowEducation] = useState(false);
    const [showWorkExperience, setShowWorkExperience] = useState(false);

    const toggleEducation = () => {
        setShowEducation(!showEducation);
        if (showWorkExperience) setShowWorkExperience(false);
    };
    const toggleWorkExperience = () => {
        setShowWorkExperience(!showWorkExperience);
        if (showEducation) setShowEducation(false);
    };

    return (
        <article className='resume-container'>
            <ul className="resume-nav">
                <li>
                    <a onClick={toggleEducation}>Education</a>
                    {showEducation && (
                        <ul>
                            {education.map(edu => (
                                <li key={edu.id}>
                                    <NavLink to={`/resume/education/${edu.id}`}>{edu.school}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li>
                    <a onClick={toggleWorkExperience}>Work Experience</a>
                    {showWorkExperience && (
                        <ul>
                            {workExperience.map(work => (
                                <li key={work.id}>
                                    <NavLink to={`/resume/work-experience/${work.id}`}>{work.company}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
            <Outlet />
        </article>
    );

} 