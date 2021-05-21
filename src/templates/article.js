import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Article = ({ data }) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML = {{ __html: post.body.processed }}/>
    </Layout>
  )
};

Article.propTypes = {
  data : PropTypes.object.isRequired,
};

export const query =  graphql`
  query($ArticleId : String!) {
    nodeArticle(id : { eq: $ArticleId}) {
      title
        id
        body {
          processed
        }
    }
  }
  `

  export default Article;