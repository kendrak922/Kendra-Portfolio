import React from 'react';
import './style.scss'

const Wrapper = props => 
<div className="container">
<h1>Stuff I've Worked On</h1>
{props.children}
</div>

export default Wrapper;