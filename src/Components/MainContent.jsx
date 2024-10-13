
import { projects } from '../assets/project-info'
import { certifications } from "../assets/certifications-info"
import { jobs } from "../assets/jobs-info"
import Project from './Project'
import Certifications from './Certifications'
import Jobs from './Jobs'

import "./MainContent.css"

export default function MainContent(){

    const projectList = projects.map(project =>
        <Project key={project.id} name={project.name} description={project.description} repo_url={project.repo_url} technologies={project.technologies}> </Project>
      );
      const certificationsList = certifications.map(certification =>
        <Certifications key={certification.id} name={certification.name} institution={certification.institution} year={certification.year}></Certifications>
    )

    const jobList = jobs.map(job => 
      <Jobs role={job.role} startDate={job.startDate} endDate={job.endDate} description={job.description}></Jobs>
    )
    return( 
    <section className='content'>
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
        <section className='Jobs'>
        <h2 id='jobs'> Trabajos</h2>
          <div className='jobs-container'>
            {jobList}
          </div>

        </section>
        </section>
        )
}