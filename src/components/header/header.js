import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
