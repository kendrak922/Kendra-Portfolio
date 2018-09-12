import React from 'react';
import './style.scss'

const Wrapper = props => 
<div className="workContainer">
<h1>Stuff I've Worked On</h1>
{props.children}
</div>

export default Wrapper;