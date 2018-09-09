import React from 'react';
import "./style.scss";
import picture from "../../images/car.jpg"




const Projects = props => (
<div className="container">
<img className="pic" src={picture} alt={props.image} />
<p>{props.title}</p>
</div>

)

export default Projects;