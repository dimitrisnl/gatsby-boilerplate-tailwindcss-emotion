import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';

import { Solid, Outline, Plain } from 'components/button';
import { Alert, AlertWithLink, AlertWithExternalLink } from 'components/alert';

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <div className="container">
      <div className="bg-gray-300 p-6 mt-6 rounded shadow-xl">
        <h1 className="mb-4 text-3xl">Buttons</h1>
        <div className="bg-gray-400 p-4 rounded">
          <Solid className="mx-2">Button</Solid>
          <Outline className="mx-2">Button</Outline>
          <Plain className="mx-2">Button</Plain>
        </div>
      </div>

      <div className="bg-gray-300 p-6 mt-6 rounded shadow-xl">
        <h1 className="mb-4 text-3xl">Alerts</h1>
        <div className="bg-gray-400 p-4 rounded">
          <div>
            <Alert className="mx-2" title="Lorem" body="Default Alert" />
          </div>
          <div className="mt-4">
            <Alert
              className="mx-2"
              title="Lorem"
              body="Danger Alert"
              intent="danger"
            />
          </div>
          <div className="mt-4">
            <Alert
              className="mx-2"
              title="Lorem"
              body="Success Alert"
              intent="success"
            />
          </div>
          <div className="mt-4">
            <Alert
              className="mx-2"
              title="Lorem"
              body="Info Alert"
              intent="info"
            />
          </div>
          <div className="mt-4">
            <Alert
              className="mx-2"
              title="Lorem"
              body="Warning Alert"
              intent="warning"
            />
          </div>
          <div className="mt-4">
            <AlertWithLink
              className="mx-2"
              title="Lorem"
              body="As Internal Link"
              href="/"
            />
          </div>
          <div className="mt-4">
            <AlertWithExternalLink
              className="mx-2"
              title="Lorem"
              body="As External Link"
              href="https://google.com"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

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
