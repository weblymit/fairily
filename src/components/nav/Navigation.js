import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavLink from './NavLink';
import NavbarBrand from './NavbarBrand';
import styled from 'styled-components';
import logo from '../../images/logo.png';

class Navigation extends Component {
	_isTop = false;
	constructor(props) {
		super(props);

		this.state = {
			isTop: true
			// isLoading: true
		};
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		this._isTop = true;

		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 130;
			if (this._isTop) {
				if (isTop !== this.state.isTop) {
					this.onScroll(isTop);
				}
			}
		});
	}

	componentWillUnmount() {
		this._isTop = false;
	}

	onScroll(isTop) {
		this.setState({ isTop });
	}

	render() {
		return (
			<DivNav>
				<Navbar expand="lg" fixed="sticky" bg="light">
					<Container>
						<NavbarBrand logo={logo} />
						<Navbar.Toggle aria-controls="basic-navbar-nav">
							Menu {''}
							{/* <FontAwesomeIcon icon={faBars} /> */}
						</Navbar.Toggle>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto" id="myNavigation">
								<NavLink navLink="item1" linkHref="#" />
								<NavLink navLink="item2" linkHref="#" />
								<NavLink navLink="item3" linkHref="#" />
								<NavLink navLink="item4" linkHref="#" />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</DivNav>
		);
	}
}

export default Navigation;

const DivNav = styled.div`
	.navbar-nav {
		text-align: center;
		/* background-color: #000; */
	}

	.navbar-expand-lg .navbar-nav .nav-link {
		padding: 0 50px;
		border-right: 1px solid ;
	}
`;
