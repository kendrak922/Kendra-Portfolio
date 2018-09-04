import React from 'react'
import Link from 'gatsby-link'

import face from '../images/face.jpg'

const IndexPage = () => (
  <div>
    <div className="background">
    <h1>It's me, Kendra.</h1>
    <h2>Full Stack Web Developer</h2>
    </div>
    <div className="background2"></div>
    <div className="imgcontainer">
    <div className="green"></div>
    <img src={face} alt="a picture of my face" />
    <p className="about">Based in Minneapolis, Minnesota. Coding BootCamp and Liberal Arts graduate with the resources to create elegant and responsive websites. Enthusiastic about people, great writing, and technological solutions</p>
    </div>
  </div>
)

export default IndexPage
