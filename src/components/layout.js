import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const Layout = ({ data, children }) => (
  <Content>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <Main>{children}</Main>
    <Footer title={data.site.siteMetadata.siteTitle} />
  </Content>
);

const LayoutWithQuery = props => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `);

  return <Layout data={data} {...props} />;
};

export default LayoutWithQuery;
