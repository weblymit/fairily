import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const NavbarBrand = ({ logo }) => {
	return (
		<Div>
			<Link to="/" className="navbar-brand">
				<img src={logo} alt="logo weblymit zacharie kabasele" />
			</Link>
		</Div>
	);
};

export default NavbarBrand;
const Div = styled.div`
	img {
		width: 200px;

		@media (max-width: 720px) {
			width: 120px;
		}
	}
`;
