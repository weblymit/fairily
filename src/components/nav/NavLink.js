import React from 'react';
import {Link} from 'gatsby'

const NavLink = ({ navLink, linkHref }) => {
	const style = {
		color: '#000',
		textDecoration: 'none',
	}

	const activeStyle = {
		color: '#007bff',
	}

	return (
		<>
			<Link
				to={linkHref}
				className='nav-link'
				style={style}
				activeStyle={activeStyle}
				>{navLink}</Link>
		</>
	);
};

export default NavLink;
