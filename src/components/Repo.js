import React from 'react'

let Repo = (props) =>{
    return(
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted font-italic">{props.language}</h6>
                <p className="card-text">{props.description}</p>
                <a href={props.urlRepo} className="card-link">Repository</a>
            </div>
        </div>
    )
}

export default Repo