import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SectionFairilyConcept = () => {
	const data = useStaticQuery(graphql`
		query {
			img: file(relativePath: { eq: "tournevis.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 720, quality: 90) {
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
						<div className="row">
							<div className="col-md-1" id="logo_1">
								<div className="logo_container">
									<Img fluid={logo1} alt="Fairily logo gris" className="img-fluid" />
								</div>
							</div>
							<div className="col-md-8">
								<h2>Fairily</h2>
								<p className="h1-size">Notre concept</p>
							</div>
						</div>
					</div>
					<div className="col-md-6" id="votre_experience">
						<h2>
							De nouvelles expériences <br /> à vivre
						</h2>
						<p className="h1-size">Votre expérience</p>
					</div>
				</div>
			</section>
			<section id="fairily_concept">
				<div className="">
					<div className="row" id="fairily_purpose">
						<div className="col-md-6 col-img">
							<div className="cont">
								<Img
									fluid={img1}
									alt="fairily parcour"
									id="img_parcour"
									imgStyle={{ objectFit: 'contain' }}
								/>
							</div>
						</div>
						<div className="col-md-6" id="fairily_purpose_contenu">
							<div className="logo_container">
								<Img fluid={logo1} alt="Fairily logo gris" className="img-fluid" />
							</div>
							<h3>FAIRILY VOUS PROPOSE DE <br/> DEVENIR ACTEUR DE VOTRE <br/> SHOPPING EN LIGNE</h3>
							<p>
								Chez nous, vous êtes au cœur de l’expérience. <br/> Vous avez le pouvoir de décision sur le
								produit et le prix.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Div>
	);
};

export default SectionFairilyConcept;

const Div = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	#section_concept {
		margin-top: 50px;
		/* height: 200px; */

		.div_logo_header {
			margin-top: -140px;

			& #logo_1 {
				margin-right: 24px;
			}
		}

		#votre_experience {
			padding-left: 60px;
			padding-bottom: 100px;
		}
	}

	#fairily_concept {
		.cont {
			max-height: 680px;
			/* margin-right: 85px; */
			/* margin-top: -200px; */
			/* top:-100px; */
		}
		.col-img {
			padding-left: 0;
			margin-top: -300px;
		}

		.logo_container {
			margin-bottom: 25px;
		}

		#fairily_purpose {
			background-color: #fff;
			padding-top: 50px;

			& #fairily_purpose_contenu {
				padding-left: 60px;
			}
		}
	}
`;
