import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const ArticlePreview = ({ title, path, body, image }) => {
  console.log(image);

  return (
    <div>
      <Link to={path}>
        <h1>{title}</h1>
      </Link>
      <br/>
      <GatsbyImage image={image} alt="aze" />
      <div dangerouslySetInnerHTML = {{ __html: body }}/> 
    </div>
  )
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default ArticlePreview;

//