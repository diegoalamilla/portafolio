
import "./Certifications.css"


export default function Certifications({ id, name, institution, year}){
    

    return(
        <>
        <div className="certification" key={id}>{name} <br/> {institution} - {year}</div>
        </> 
    )
}