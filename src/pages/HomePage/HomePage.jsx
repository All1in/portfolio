import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import './HomePage.css'

const skills = [
     { tag: 'Front-end', mainSkills:  'ReactJS, Angular, Redux, HTML, CSS, NPM, Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents' },
     { tag: 'Back-end', mainSkills: 'NodeJS, ExpressJS, ApolloServer, MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3' },
     { tag: 'Languages', mainSkills: 'JavaScript, Python, TypeScript'}
]

const HomePage = () => {
    return (
        <div className='home'>
            <div className='about'>
               <h2>Hi, me name is Bogdan</h2>
                <div className='prompt'>
                    <p>
                        Hard-working, creative and proactive Front-end developer!
                    </p>
                   <LinkedInIcon />
                   <EmailIcon />
                   <GithubIcon />
                </div>
            </div>
            <div className='skills '>
                <h1> Skills </h1>
                <ol className='list'>
                    {skills.map(skill => {
                        const { tag, mainSkills } = skill
                        return (
                            <li
                                className='item'
                                key={tag}
                            >
                                <h2> {tag} </h2>
                                <span> {mainSkills} </span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    );
};

export default HomePage;
