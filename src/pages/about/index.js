import * as React from "react"
import PropTypes from "prop-types";
import { Link } from 'gatsby';


import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./style.scss"

const About = ({ data }) => (
  <Layout>
    <SEO title="About Page" />
    <h1>Hi from the About page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


About.protoTypes = {
  data: PropTypes.object.isRequired,
}


export default About
