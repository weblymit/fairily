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
								<NavLink navLink="Notre concept" linkHref="#section_concept" />
								<NavLink navLink="Notre expérience" linkHref="#section_concept" />
								<NavLink navLink="Notre communauté " linkHref="#section_concept" />
								<NavLink navLink="Votre parcours" linkHref="#section_concept" />
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
		/* background-color: #000; */
	}

	.navbar-expand-lg .navbar-nav .nav-link {
		padding: 0 30px;
		border-right: 1px solid;

		&:last-child {
			border-right: 0;
		}
	}
`;
