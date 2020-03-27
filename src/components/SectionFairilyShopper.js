import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import etoile from '../images/etoile.svg';

const SectionFairilyShopper = () => {
	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="col-md-6 firstCol">
						<div id="block_community">
							<h2>
								Nos fairy’shoppers <br /> Nos fairy’makers
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

					<div className="col-md-6" id="block_community_two">
						<h3 className="myH3">
							Fairily est le dénicheur <br /> des séries limitées <br /> au juste prix
						</h3>
						<p>
							Dénichez d’authentiques produits sélectionnés avec soin, négociez le prix d’achat à travers
							une expérience intuitive, personnalisée et ludique. Devenez l’acteur de vos découvertes.
							Fairily est un véritable créateur de liens et des émotions entre acheteurs en recherche de
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
	padding: 70px 0;
	@media (max-width: 720px) {
		padding: 0 0;

		.firstCol {
			background-color: #fff;
		}
	}

	#block_community {
		background-color: #fff;
		padding: 75px 75px 100px;
		/* margin-right: 10%; */
		margin-top: -170px;

		@media (max-width: 720px) {
			margin-top: 0;
			padding: 65px 15px;
		}

		& .h1-size {
			margin-top: 30px;
			margin-bottom: 70px;

			@media (max-width: 720px) {
				margin-bottom: 40px;
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

		@media (max-width: 720px) {
			padding: 60px 15px;
		}

		#button_div {
			margin-top: 30px;

			.fairily_button {
				margin-bottom: 15px;
				@media (max-width: 720px) {
					margin-left: auto;
					margin-right: auto;
					justify-content: center;
				}
			}
		}
	}
`;
