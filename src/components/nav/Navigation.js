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
				<Navbar expand="lg" fixed="top" bg="light">
					<Container>
						<NavbarBrand logo={logo} />
						<Navbar.Toggle aria-controls="basic-navbar-nav">
							{/* Menu {''} */}
							{/* <FontAwesomeIcon icon={faBars} /> */}
						</Navbar.Toggle>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto" id="myNavigation">
								<NavLink navLink="Notre concept" linkHref="/" />
								<NavLink navLink="Votre expérience" linkHref="/#notre-concept" />
								<NavLink navLink="Notre communauté " linkHref="/#fairy_shoppers" />
								<NavLink navLink="Votre parcours" linkHref="/#fairily_parcour" />
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
	.bg-light {
		background-color: #fff !important;
	}
	.navbar-nav {
		text-align: center;
		padding: 30px 0;
		/* background-color: #000; */
	}

	.navbar-expand-lg .navbar-nav .nav-link {
		padding: 0 30px;
		border-right: 1px solid;
		font-size: 1.2rem;
		color: #000 !important;

		@media (max-width: 500px) {
			border-right: 0;
			line-height: 2;
		}

		&:last-child {
			border-right: 0;
		}
	}

	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .5);
		border-color: #0000ff00 !important;
	}
`;
