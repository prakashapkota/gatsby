/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articles = await graphql(`
  {
    allNodeArticle {
      nodes {
        title
        id
        body {
          processed
        }
        path {
          langcode
          alias
        }
        field_image {
          alt
          title
        }
      }
    }
  }
  `);
  console.log(articles);
  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path : articleData.path.alias,
      component: path.resolve('src/templates/article.js'),
      context: {
        ArticleId: articleData.id,

      }
    })
  )
}