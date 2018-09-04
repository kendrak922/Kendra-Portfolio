import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Toggle from './ToggleRPC'
import Header from '../components/Header'

import './index.scss'



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      {/* <Toggle>
      {({on, toggle})=>(
        <div>
          {on && <Header />}
        <div onClick ={toggle} className="expand">
        <p>Menu</p>
        </div>
        </div>
      )}
    </Toggle> */}
    <Header />
  
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
