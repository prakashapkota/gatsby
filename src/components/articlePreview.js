import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


const ArticlePreview = ({ title, path, body, image }) => {

  return (
    <div>
      <Link to={path}>
        <h1>{title}</h1>
      </Link>
      <br/>
      <Img fluid={image} alt="test" />
      <div dangerouslySetInnerHTML = {{ __html: body }}/> 
    </div>
  )
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
}

export default ArticlePreview;

