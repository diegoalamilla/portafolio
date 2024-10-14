import "./Footer.css"

export default function Footer(){
return(
    <footer className="footer">
    <p>© 2024 Diego Alamilla. Todos los derechos reservados.</p>
    
    <div className="footer-links">
        <a target="blank" href="https://github.com/diegoalamilla"><img className= "social-git" src="/github-logo.webp" alt=""  /> </a>
        <a target="blank" href="https://linkedin.com/in/diego-alamilla-osorio-65287021b/"><img className= "social-linkedin" src="/linkedin.png" alt=""  /> </a>
        <a target="blank" href="mailto:diego.alamilla123@gmail.com"><img className= "social-gmail" src="/gmail.webp" alt=""  /> </a>
    </div>
    </footer>
);}
