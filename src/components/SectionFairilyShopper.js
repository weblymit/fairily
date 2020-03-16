import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SectionFairilyShopper = () => {
	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
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
										<FontAwesomeIcon icon={faStar} />
										Dénichez des séries limitées
									</li>
									<li>
										<FontAwesomeIcon icon={faStar} />
										Négociez le prix d’achat
									</li>
									<li>
										<FontAwesomeIcon icon={faStar} />
										Osez prendre des risques
									</li>
									<li>
										<FontAwesomeIcon icon={faStar} />
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
								<Link to="/#fairily_newsletter" className="btn btn-gray">
									devenir un Fairy'Maker
								</Link>
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
	#block_community {
		background-color: #fff;
		padding: 75px 75px 100px;
		/* margin-right: 10%; */
		margin-top: -170px;

		& .h1-size {
			margin-top: 30px;
			margin-bottom: 70px;
		}

		& .list_shopper {
			ul {
				list-style: none;
				padding: 0;
				font-weight: 500;
				line-height: 2;
			}

			.svg-inline--fa.fa-w-18 {
				width: .6em;
				color: #777777;
				margin-right: 5px;
			}
		}
	}
	#block_community_two {
		padding-left: 60px;
		padding-right: 180px;

		#button_div {
			margin-top: 30px;
			.fairily_button {
				margin-bottom: 15px;
			}
		}
	}
`;
