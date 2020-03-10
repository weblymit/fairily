import React from 'react';
import { Link } from 'gatsby';
const NavbarBrand = ({ logo }) => {
	return (
		<Link to="/" className="navbar-brand">
			<img src={logo} alt="logo weblymit zacharie kabasele" width="220" />
		</Link>
	);
};

export default NavbarBrand;
