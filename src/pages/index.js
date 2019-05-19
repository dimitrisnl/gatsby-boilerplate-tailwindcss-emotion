import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Head from 'components/head';
import { Hero, Stripe, Features } from 'sections/index';

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <Hero {...data.homeJson.hero} />
    <Stripe {...data.homeJson.stripe} />
    <Features {...data.homeJson.features} />
  </Layout>
);

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      hero {
        title
        subtitle
        body
      }
      features {
        lead {
          title
          subtitle
          body
        }
        list {
          icon
          title
          body
        }
      }
      stripe {
        title
        body
        href
      }
    }
  }
`;
