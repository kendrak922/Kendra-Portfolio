import React from 'react'
import Link from 'gatsby-link'

import './style.scss';

const Header = ({ siteTitle }) => (
  <div className="landing">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </div>
)

export default Header
