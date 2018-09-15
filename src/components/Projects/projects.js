import React from 'react';
import "./style.scss";





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