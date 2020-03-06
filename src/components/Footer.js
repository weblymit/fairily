import React from 'react';
import styled from 'styled-components';
import img2 from '../images/img2.png';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faLinkedin, faFacebook, faInstagram);

const Footer = () => {
	return (
		<FooterDiv className="footer">
			<div className="container text-center">
				<div className="row align-items-center mb-5">
					<div className="col-md-6">
						<img src={img2} alt="" className="img-fluid" width="250" />
					</div>
					<div className="col-md-6">
						<FontAwesomeIcon icon={faFacebook} />
						<FontAwesomeIcon icon={faInstagram} />
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-md-12">
						<ul className="list-inline social-buttons mx-auto">
							<li className="list-inline-item">Contactez-nous</li>
							<li className="list-inline-item">FAQ</li>
							<li className="list-inline-item">Mentions légales</li>
							<li className="list-inline-item">Livraisons et retours</li>
							<li className="list-inline-item">CGV</li>
							<li className="list-inline-item">Carrières</li>
						</ul>
					</div>
				</div>
			</div>
			<hr style={{ backgroundColor: '#fff' }} />
			<div className="text-center">
				<span className="copyright ">{new Date().getFullYear()} Fairily. Conçu avec . et plein de .</span>
			</div>
		</FooterDiv>
	);
};

export default Footer;

const FooterDiv = styled.footer`
	background-color: #aec9ba;
	min-height: 452px;
	padding-top: 100px;
	color: #fff;

	li {
		padding: 0 30px;
		border-right: 1px solid;

		&:last-child {
			border-right: 0;
		}
	}

	.svg-inline--fa {
		width: 4rem;
		font-size: 2rem;
	}

	hr {
		margin-top: 100px;
		margin-bottom: 35px;
	}

	.copyright {
		font-family: 'Archivo', sans-serif;
		font-size: 8px;
	}
`;
