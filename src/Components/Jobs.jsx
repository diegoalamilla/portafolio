import './Jobs.css'

export default function Jobs({role, startDate, endDate, description}){
    return (
        <div className="job">
        <div className="job-role">
          <span>{role}</span>
        </div>
        
        <div className="job-dates">
          <span>{startDate} - {endDate}</span>
        </div>
        
        <div className="job-description">
          <strong>Descripción: </strong>
          <p>{description}</p>
        </div>
      </div>


    )
}