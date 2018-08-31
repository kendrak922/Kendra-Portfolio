import React from 'react'
import Link from 'gatsby-link'

import './style.scss';

import icon from '../../images/icon.png'

const Header = ({ siteTitle }) => (
  <div className="nav">
  <img src={icon} alt="icon" />
  <p>Menu</p>
      <h1>
        <Link className="link"
          to="/"
        >
        Home
          {/* {siteTitle} */}
        </Link>
        <Link className="link" to="/page-2/">Writing</Link>
        <Link className="link" to="#">Company</Link>
      </h1>
  </div>
)

export default Header
