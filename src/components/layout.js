import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

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
    <Footer />
  </Content>
);

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

export default LayoutWithQuery;
