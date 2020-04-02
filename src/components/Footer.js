import React from 'react';
import styled from 'styled-components';
import img2 from '../images/img2.png';
import imgFooter from '../images/footer_fee.svg';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faTwitter, faLinkedin, faFacebook, faInstagram, faStar, faHeart);

const Footer = () => {
	return (
		<FooterDiv className="footer">
			<div id="fee-footer">
				<img src={imgFooter} alt="fairily fée " />
			</div>
			<div className="container text-center">
				<div className="row align-items-center mb-5">
					<div className="col-md-6" id="logo-fairily">
						<img src={img2} alt=" fairily app" className="img-fluid" width="250" />
					</div>
					<div className="col-md-6">
						<a href="https://www.facebook.com/Fairilyapp/" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-md-12">
						<ul className="list-inline social-buttons mx-auto">
							<li className="list-inline-item">
								<a href="mailto:contact@fairilyapp.com">Contactez-nous</a>
							</li>
							<li className="list-inline-item">FAQ</li>
							<li className="list-inline-item">Mentions légales</li>
							<li className="list-inline-item">Livraisons et retours</li>
							<li className="list-inline-item">CGV</li>
							<li className="list-inline-item">
								<a
									href="https://www.linkedin.com/company/fairily/about/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Carrières
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr style={{ backgroundColor: '#fff' }} />
			<div className="text-center">
				<span className="copyright ">
					{new Date().getFullYear()} Fairily. Conçu avec{' '}
					<FontAwesomeIcon icon={faHeart} style={{ fontSize: 15, width: 20 }} /> et plein d'{' '}
					<FontAwesomeIcon icon={faStar} style={{ fontSize: 15, width: 20 }} />
				</span>
			</div>
		</FooterDiv>
	);
};

export default Footer;

const FooterDiv = styled.footer`
	background-color: #aec9ba;
	min-height: 452px;
	color: #fff;

	@media (min-width: 320px) {
		padding-top: 80px;
		padding-top: 10px;
		padding-bottom: 50px;
	}

	ul {
		@media (min-width: 320px) {
			display: grid;
		}

		@media (min-width: 992px) {
			display: inline-block;
		}
	}

	#logo-fairily img {
		@media (min-width: 320px) {
			margin-bottom: 40px;
			width: 160px;
		}
		@media (min-width: 768px) {
			margin-bottom: 40px;
			width: 260px;
		}
	}

	li {
		padding: 0 30px;
		border-right: 1px solid;

		@media (min-width: 320px) {
			border-right: 0;
			line-height: 2;
		}

		&:last-child {
			border-right: 0;
		}
	}

	.svg-inline--fa {
		width: 3.2rem;
		font-size: 1.6rem;
	}

	hr {
		margin-top: 100px;
		margin-bottom: 35px;

		@media (min-width: 320px) {
			margin-top: 40px;
			margin-bottom: 40px;
		}
	}

	.copyright {
		font-family: 'Archivo', sans-serif;
		font-size: 15px;
	}

	a {
		color: #fff;
	}

	#fee-footer {
		/* position: relative; */
		@media (min-width: 320px) {
			display: flex;
			justify-content: center;
			position: relative;
			top: -38px;
		}
		@media (min-width: 768px) {
			top: -50px;
		}

		& img {
			width: 60px;

			@media (min-width: 768px) {
				width: 90px;
			}
		}
	}
`;
