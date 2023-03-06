import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    console.log('project', project)
    const { name, image, skills } = project

    return (
        <div>
            <div className="project">
                <h1> {name}</h1>
                <img src={image} alt='image'/>
                <p>
                    <b>Skills:</b> {skills}
                </p>
                <GitHubIcon />
            </div>
        </div>
    );
};

export default ProjectDisplay;
