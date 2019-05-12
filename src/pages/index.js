import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Head from 'components/head';

import { Hero, Stripe, Features } from 'sections/index';

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <Hero />
    <Stripe />
    <Features />
  </Layout>
);

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
