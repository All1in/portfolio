import React from 'react';
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import "./ProjectsPage.css";


const ProjectsPage = () => {
    return (
        <div className="projects">
            <h1> My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    const { name, image} = project
                    return (
                        <ProjectItem
                            key={idx}
                            id={idx}
                            name={name}
                            image={image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsPage;
