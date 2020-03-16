import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SectionFairilyConcept = () => {
	const data = useStaticQuery(graphql`
		query {
			img: file(relativePath: { eq: "img9.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 520, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			logo: file(relativePath: { eq: "symbole_seul_gris.png" }) {
				childImageSharp {
					fluid(maxWidth: 200, quality: 90) {
						aspectRatio
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img1 = data.img.childImageSharp.fluid;
	const logo1 = data.logo.childImageSharp.fluid;
	return (
		<Div>
			<section className="container" id="section_concept">
				<div className="row">
					<div className="col-md-6 div_logo_header">
						<div className="container">
							<div className="row">
								<div className="col-md-1" id="logo_1">
									<div className="logo_container">
										<div className="vl" />
										<Img fluid={logo1} alt="Fairily logo gris" className="img-fluid" />
									</div>
								</div>
								<div className="col-md-8">
									<h2>Fairily</h2>
									<p className="h1-size">Notre concept</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6" id="votre_experience">
						<div className="hl" />

						<h2>
							De nouvelles expériences <br /> à vivre
						</h2>
						<p className="h1-size">Votre expérience</p>
					</div>
				</div>
			</section>
			<section id="fairily_concept">
				<div className="row" id="fairily_purpose">
					<div className="col-md-6 col-img">
						<div className="cont">
							<Img
								fluid={img1}
								alt="fairily parcour"
								id="img_parcour"
								// imgStyle={{ objectFit: 'contain' }}
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="col-md-6" id="fairily_purpose_contenu">
						<div className="logo_container">
							<Img fluid={logo1} alt="Fairily logo gris" className="img-fluid" />
						</div>
						<h3>
							FAIRILY VOUS PROPOSE DE <br /> DEVENIR ACTEUR DE VOTRE <br /> SHOPPING EN LIGNE
						</h3>
						<p>
							Chez nous, vous êtes au cœur de l’expérience. <br /> Vous avez le pouvoir de décision sur le
							produit et le prix. <br />
							Découvrez une sélection décoration, objets design, <br /> bijoux et accessoires.
						</p>
					</div>
				</div>
			</section>
		</Div>
	);
};

export default SectionFairilyConcept;
const Div = styled.div`
	/* padding: 80px 0; */
	width: 100%;
	padding-right: 85px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	#section_concept {
		padding-top: 80px;
		margin-top: 50px;
		/* height: 200px; */

		.div_logo_header {
			margin-top: -220px;

			& #logo_1 {
				margin-right: 24px;
				margin-left: 15px;
			}
		}

		#votre_experience {
			padding-left: 60px;
			padding-bottom: 100px;
		}
	}

	#fairily_concept {
		height: 500px;
		.cont {
			/* max-height: 280px; */
			/* height: 700px; */
			position: relative;
			top: -180px;
		}

		.col-img {
			padding-left: 0;
			height: 620px;
			overflow: hidden;
			top: -300px;
		}

		.logo_container {
			margin-bottom: 25px;
		}

		#fairily_purpose {
			background-color: #fff;
			padding-top: 50px;
			/* margin-bottom: 50px; */

			& #fairily_purpose_contenu {
				padding-left: 60px;
				/* height: 300px; */
				/* margin-left:90px; */
			}
		}
	}
`;
