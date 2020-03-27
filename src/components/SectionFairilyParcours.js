import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SectionFairilyParcours = () => {
	const data = useStaticQuery(graphql`
		query {
			img: file(relativePath: { eq: "parcours.jpeg" }) {
				childImageSharp {
					fluid(maxHeight: 620, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img1 = data.img.childImageSharp.fluid;

	return (
		<Section id="fairily_parcour">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 imgCol">
						<div className="cont-img">
							<Img fluid={img1} />
						</div>
					</div>
					<div className="col-md-8" id="parcour_block">
						<p className="parcour_block_firstP">
							Découverte des séries <br /> limitées de la semaine
						</p>
						<p className="h1-size">Notre parcours</p>

						<div>
							<span className="badge badge-pill badge-primary">1</span>
							<h3>Créez votre sélection personnalisée</h3>
							<p>Selon vos goûts et vos envies.</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">2</span>
							<h3>Un coup de coeur</h3>
							<p>
								Faites une offre de prix à l’aveugle et laissez-vous prendre au jeu de la négociation !
								Visualisez le nombre de Fairy’Shoppers intéressés et négociez à vos risques et périls
								...
							</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">3</span>
							<h3>Validez votre selection</h3>
							<p>Avant qu’elle ne s’évapore...</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">4</span>
							<h3>Le fairy'Maker accèpte votre proposition ?</h3>
							<p>La magie opère. À vous de jouer !</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyParcours;

const Section = styled.section`
	padding: 80px 0;

	@media (max-width: 720px) {
		padding: 0;
	}
	p {
		color: #fff;
	}

	h3 {
		margin-bottom: 0;
	}

	.imgCol {
		@media (max-width: 720px) {
			display: none;
		}
	}

	.cont-img {
		position: relative;
		top: 190px;
		z-index: 1;
		width: 540px;
		margin-left: 70px;

		@media (max-width: 720px) {
			top: 0;
			position: initial;
			width: initial;
			margin-left: 0;
		}
	}

	#parcour_block {
		background-color: #bb6b44;
		color: #fff;
		padding: 120px 130px 120px 270px;

		@media (max-width: 720px) {
			padding: 70px 15px;
		}

		.h1-size {
			color: #fff;
			margin-bottom: 3rem;
		}

		.parcour_block_firstP  {
			color: #fff;
			font-size: 1.8rem;
		}

		.badge-primary {
			color: #bb6b44;
			background-color: #fff;
			margin-bottom: 20px;
			margin-top: 30px;
			font-size: 1.1rem;
		}

		.badge-pill {
			padding: 10px 15px;
			border-radius: 50%;
		}
	}
`;
