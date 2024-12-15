import React from 'react'
import './TitleSection.css'

const TitleSection = (props)=>{
    return(
        <div className="container_section">
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    )

}

export default TitleSection