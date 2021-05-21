import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlePreview from "../components/articlePreview";


const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      <SEO title = "Articles" />
      <h1>Articles</h1> 
      {articles.map(article => (
        <ArticlePreview 
          key={article.id}
          title = {article.title}
          path = {article.path.alias}
          body = {article.body.processed}
          image = {article.relationships.field_image.localFile.childImageSharp.fluid}
        />
      ))} 
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
          alias
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Articles;