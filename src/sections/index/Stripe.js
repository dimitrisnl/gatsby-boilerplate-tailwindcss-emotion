import React from 'react';
import { AlertWithExternalLink } from 'components/alert';

const Stripe = ({ title, body, href }) => (
  <div className="container text-center mt-12">
    <AlertWithExternalLink href={href} title={title} body={body} />
  </div>
);

export default Stripe;
