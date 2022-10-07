/* eslint 'no-console': 'off' */
const path = require('path');
const _ = require('lodash');
const moment = require('moment');

exports.createSchemaCustomization = ({ actions }) => {
  console.log('MarkdownRemarkFields')
  const { createTypes } = actions
  // https://krzysztofzuraw.com/blog/2020/customizing-gatsby-graphql-schema/
  // https://blog.logrocket.com/gatsby-apis-you-need-to-know/
  // extend https://stackoverflow.com/a/56204966/1872200
  const typeDefs = `
    extend type MarkdownRemark {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      activity: String
      link: String
      primaryArea: String
      additionalAreas: [String]
      type: String
      excerpt: String
      date: Date @dateformat(formatString: "YYYY-MM-DD")
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, actions, getNode }, { config }) => {
  const { createNodeField } = actions;


  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    createNodeField({ node, name: 'filename', value: parsedFilePath.name });

    const fileNamePattern = /(\d+-\d+-\d+)-([\w-]+)/;
    const date = parsedFilePath.name.match(fileNamePattern)[1];
    createNodeField({ node, name: 'date', value: date });

    let slug;
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'activity')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.activity)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      }
    }
    createNodeField({ node, name: 'slug', value: `${config.nodePrefix}${slug}` });

  }
};

exports.createPages = async ({ graphql, actions }, { config }) => {
  const { createPage } = actions;
  const postPage = require.resolve('./src/templates/post.jsx');
  const listingPage = require.resolve('./src/templates/PostListingPagination.jsx');
  const landingPage = require.resolve('./src/templates/PostListing.jsx');

  // alias and operation name
  // https://graphql.org/learn/queries/

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    query markdownQuery {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              filename
              slug
            }
            frontmatter {
              activity
              tags
            }
          }
        }
      }
      tags: allMarkdownRemark(sort: {fields: frontmatter___tags}) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  // const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.posts.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.fields.date,
      config.dateFromFormat
    );

    const dateB = moment(
      postB.node.fields.date,
      config.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Paging for post list
  const { postsPerPage } = config;
  if (postsPerPage) {
    const pageCount = Math.ceil(postsEdges.length / postsPerPage);

    [...Array(pageCount)].forEach((_val, pageNum) => {
      createPage({
        path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
        component: listingPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount,
          currentPageNum: pageNum + 1,
        },
      });
    });
  } else {
    // Load the landing page instead
    createPage({
      path: `/`,
      component: landingPage,
    });
  }

  // Post details page
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nextActivity: nextEdge.node.frontmatter.activity,
        nextslug: nextEdge.node.fields.slug,
        prevActivity: prevEdge.node.frontmatter.activity,
        prevslug: prevEdge.node.fields.slug,
      },
    });
  }); //end forEach

  // https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
  // Extract tag data from query
  const tags = markdownQueryResult.data.tags.group
  const tagTemplate = require.resolve('./src/templates/tags.tsx')
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
        count: tag.totalCount
      },
    })
  })

};
