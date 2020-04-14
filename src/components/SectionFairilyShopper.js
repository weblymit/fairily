import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import etoile from '../images/etoile.svg';

const SectionFairilyShopper = () => {
	return (
		<Section>
			<div className="row">
				<div className="col-md-6 col-lg-6 firstCol">
					<div id="block_community">
						<div className="container">
							<h2>
								Nos Fairy’Shoppers <br /> Nos Fairy’Makers
							</h2>
							<p className="h1-size">
								Notre <br /> communauté
							</p>
							<div className="list_shopper">
								<ul>
									<li>
										<span>
											<img src={etoile} alt="star fairily" width="13" />
										</span>
										Dénichez des séries limitées
									</li>
									<li>
										<span>
											<img src={etoile} alt="star fairily" width="13" />
										</span>
										Négociez le prix d’achat
									</li>
									<li>
										<span>
											<img src={etoile} alt="star fairily" width="13" />
										</span>
										Osez prendre des risques
									</li>
									<li>
										<span>
											<img src={etoile} alt="star fairily" width="13" />
										</span>
										Devenez un Fairy’Shopper
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 col-lg-6" id="block_community_two">
					<div className="container">
						<h3 className="myH3">
							Fairily est le dénicheur <br /> de séries limitées <br /> au juste prix
						</h3>
						<p>
							Dénichez d’authentiques produits sélectionnés avec soin, négociez le prix d’achat à travers
							une expérience intuitive, personnalisée et ludique. Devenez l’acteur de vos découvertes.
							Fairily est un véritable créateur et de liens et d'émotions entre acheteurs en recherche de
							plaisir, découverte et artisans créateurs.
						</p>
						<div id="button_div">
							<div className="fairily_button">
								<Link to="/#fairily_newsletter" className="btn btn-green">
									s'inscrire
								</Link>
							</div>
							<div className="fairily_button">
								<a href="mailto:partenariat@fairilyapp.com" className="btn btn-gray">
									devenir un Fairy'Maker
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyShopper;

const Section = styled.section`
	margin-left: 15px;
	margin-right: 15px;
	padding: 70px 0;

	@media (min-width: 320px) {
		padding: 0 0;
		.firstCol {
			background-color: #fff;
			padding-left: 0;
			padding-right: 0;
		}
	}
	@media (min-width: 768px) {
		.firstCol {
			background-color: initial;
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	@media (min-width: 992px) {
		margin-left: 15px;
		margin-right: 15px;
		padding: 40px 0;
		.firstCol {
			padding-left: 95px;
		}
	}

	#block_community {
		@media (min-width: 320px) {
			background-color: #fff;
			margin-top: 0;
			padding: 65px 0;
		}

		@media (min-width: 768px) {
			/* margin-top: 0; */
			padding: 65px 15px;
			margin-top: -120px;
		}

		@media (min-width: 992px) {
			padding: 30px 35px 150px;
			margin-top: -110px;
			margin-right:40px;
		}

		& .h1-size {
			margin-top: 30px;
			margin-bottom: 70px;

			@media (min-width: 320px) {
				margin-bottom: 40px;
			}
			@media (min-width: 768px) {
				margin-bottom: 70px;
			}
		}

		& .list_shopper {
			ul {
				list-style: none;
				padding: 0;
				font-weight: 500;
				line-height: 2;
			}

			span {
				margin-right: 5px;
			}
		}
	}

	#block_community_two {
		padding-left: 60px;
		padding-right: 180px;

		@media (min-width: 320px) {
			padding: 60px 0;
		}

		@media (min-width: 992px) {
			padding-left: 40px;
			padding-right: 180px;
			padding-top: 30px;
		}

		#button_div {
			margin-top: 30px;

			@media (max-width: 720px) {
				display: flex;
				flex-direction: column;
				margin-top: 50px;
			}

			.fairily_button {
				margin-bottom: 15px;
				@media (max-width: 768px) {
					margin-left: 40px;
					margin-right: 40px;
					justify-content: center;
				}

				& .btn {
					@media (min-width: 320px) {
						width: 100%;
					}
					@media (min-width: 992px) {
						width: 70%;
					}
				}
			}
		}
	}
`;
