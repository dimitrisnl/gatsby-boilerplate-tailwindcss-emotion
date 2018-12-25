import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contactJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
