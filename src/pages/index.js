import React, { Component } from 'react';
import Link from 'gatsby-link'
import Projects from '../components/Projects'
import Wrapper from '../components/Wrapper'
import work from "../../../Kendra-Portfolio/src/components/Projects/projectData.json";
import face from '../../public/images/face.jpg'

class IndexPage extends Component {

  state = {
    work
  };

  render() {
return (
    <div className="IndexPage">
      <div className="background">
        <h1 className="title">It's me, Kendra.</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className="background2"></div>
      <div className="imgcontainer">
        <div className="green"></div>
        <img src={face} alt="a picture of my face" />
        <p className="about">Based in Minneapolis, Minnesota. Coding BootCamp and Liberal Arts graduate with the resources to create elegant and responsive websites. Enthusiastic about people, great writing, and technological solutions</p>
      </div>
      <Wrapper>
        {this.state.work.map(work => (
          <Projects
            key={work.id}
            image={work.image}
            title={work.title}
          />
        )
        )
        }
      </Wrapper>
    </div> 
    );
  }

}
export default IndexPage;
