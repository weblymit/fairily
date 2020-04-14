import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faStar);

const Layout = ({ children }) => {

	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
