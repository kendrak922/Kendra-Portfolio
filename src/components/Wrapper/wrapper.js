import React from 'react';
import './style.scss'

const Wrapper = props => 
<div>
<h1 className="project-title">Stuff I've Worked On</h1>
<div className="workContainer">
{props.children}
</div>
</div>

export default Wrapper;