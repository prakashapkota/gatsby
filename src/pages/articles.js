import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlePreview from "../components/articlePreview";


const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;
  console.log(articles);
  return (
    <Layout>
      <SEO title = "Articles" />
      <h1>Articles (articles/images dynamic depuis drupal)</h1> 
      {articles.map(article => (
        <ArticlePreview 
          key={article.id}
          title = {article.title}
          langcode = {article.path.langcode}
          path = {article.path.alias}
          body = {article.body.processed}
          image = {article.relationships.field_image.localFile.childImageSharp.gatsbyImageData}
          
        />
      ))} 
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data =  graphql`
  {
    allNodeArticle(sort : {fields : created, order: DESC}){
      nodes{
        title
        id
        body{
          processed
        }
        path{
          langcode
          alias
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Articles;