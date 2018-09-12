import React from 'react';
import "./style.scss";
import picture from "../../images/car.jpg"




const Projects = props => (
<div>
<div className="container">
<div className="work">
<img className="pic" src={props.image} alt={props.image} />
<p>{props.title}</p>
</div>
</div>
</div>

)

export default Projects;