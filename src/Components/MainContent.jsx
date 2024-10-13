import { useState } from 'react'
import { projects } from '../assets/project-info'
import Project from './Project'
import Certifications from './Certifications'
import { certifications } from "../assets/certifications-info"
import "./MainContent.css"

export default function MainContent(){

    const projectList = projects.map(project =>
        <Project key={project.id} name={project.name} description={project.description} repo_url={project.repo_url} technologies={project.technologies}> </Project>
      );
      const certificationsList = certifications.map(certification =>
        <Certifications key={certification.id} name={certification.name} institution={certification.institution} year={certification.year}></Certifications>
    );
    return( <section className='content'>
        <section className='projects'>
          <h2 id='projects'>Proyectos</h2>
            <div className='projects-container'>
            {projectList}
            </div>
        </section>
        <section className='certifications'>
            <h2 id='certifications'> Certificaciones</h2>
            {certificationsList}           
        </section>
        </section>)
}