import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/nav/Navigation'
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
// import './layout.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div>
			{/* <Navigation /> */}
			<Header />
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
