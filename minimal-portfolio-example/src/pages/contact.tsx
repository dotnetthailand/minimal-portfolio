// Learn more theme shadowing https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageLayout, ConfigContext } from '@dotnetthailand/gatsby-theme-minimal-portfolio';

export default function ContactPage() {
  const config = useContext(ConfigContext);
  return (
    <PageLayout>
      <div className='container'>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h2>Contact</h2>
        <p>
          <h2>Edit your contact here:</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sagittis pharetra ipsum, non varius massa tincidunt sit amet.
          Cras id libero et urna sodales commodo. Donec nec aliquam turpis. Nulla et vestibulum erat. Fusce posuere risus id pellentesque sollicitudin. Sed quis nisi in lacus feugiat commodo. Praesent magna mauris, ornare at quam nec, iaculis hendrerit dolor. Maecenas quis metus malesuada, feugiat quam a, dignissim elit. Sed eget odio orci. Vestibulum eu ex vitae purus aliquam commodo.
          Nunc suscipit metus augue, non tincidunt mauris aliquet vel.
        </p>
      </div>
    </PageLayout>
  );
}
