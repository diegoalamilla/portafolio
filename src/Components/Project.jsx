import './Project.css'


function Project({name, description, repo_url, technologies}) {

    return(
    <div className='project'>
        <h1 className= "project-name">{name}</h1>

        <div className="project-description"><p>{description}</p></div>

        <div className="project-technologies">
        {technologies.map((tech, index) => (
          <img 
            key={index} 
            src={tech.image} 
            alt={tech.name} 
            title={tech.name} 
          />
        ))}
      </div>
       
        <div className= "project-links">
            <a href={repo_url} target='_blank'><img className= "repolink" src="../src/assets/github-logo.webp" alt=""  /></a>
            <a href='' target='_blank' > <img src= '../src/assets/toanotherpage.png'></img></a>
        </div>
    </div>
    );
}




export default Project