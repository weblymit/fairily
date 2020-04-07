import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import TypeForm from './TypeForm';

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
								// style={{ maxHeight: 'calc(50vh - 4rem)' }}
								// imgStyle={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className="col-md-6" id="fairily_purpose_contenu">
						<div className="container">
							<div className="mobileOnly">
								<h2>De nouvelles expériences à vivre</h2>
								<p className="h1-size">Votre expérience</p>
							</div>
							<div className="logo_container">
								<Img fluid={logo1} alt="Fairily logo gris" className="img-fluid" />
							</div>

							<h3>
								FAIRILY VOUS PROPOSE DE <br /> DEVENIR ACTEUR DE VOTRE <br /> SHOPPING EN LIGNE
							</h3>
							<p className="fairily_purpowe_paragraph">
								Chez nous, vous êtes au cœur de l’expérience. <br /> Vous avez le pouvoir de décision
								sur le produit et le prix. <br />
								Découvrez une sélection décoration, objets design, <br className="mobile-move" /> bijoux
								et accessoires.
							</p>
							<div>
								<h2>Type form</h2>
								<a
									href="https://manonlavalley12.typeform.com/to/IYwny8"
									className="btn btn-green mb-2"
									target="_blank"
									rel="noopener noreferrer"
								>
									Launch me Test new onglet
								</a>
								<TypeForm />
							</div>
						</div>
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

	@media (min-width: 320px) {
		padding-right: 15px;
		padding-left: 15px;
	}

	#section_concept {
		padding-top: 80px;
		margin-top: 50px;
		/* height: 200px; */

		@media (max-width: 768px) {
			.vl {
				display: none;
			}
		}

		.div_logo_header {
			margin-top: -220px;

			@media (min-width: 320px) {
				margin-top: -220px;
				padding-left: 0;
				padding-right: 0;
			}
			@media (min-width: 600px) {
				margin-top: -200px;
			}

			& #logo_1 {
				margin-right: 24px;
				margin-left: 15px;
			}
		}

		#votre_experience {
			padding-left: 60px;
			padding-bottom: 100px;

			@media (max-width: 767px) {
				display: none;
			}

			@media (min-width: 768px) {
				padding-left: 60px;
				padding-bottom: 0;
			}
		}
	}

	#fairily_concept {
		height: 500px;
		@media (min-width: 320px) {
			height: auto;
		}

		@media (min-width: 768px) {
			height: auto;
		}

		.cont {
			/* max-height: 280px; */
			/* height: 700px; */
			/* position: relative;
			top: -180px; */

			@media (min-width: 320px) {
				position: initial;
				top: 0;
				max-height: calc(60vh);
				object-fit: cover !important;
			}

			@media (min-width: 340px) {
				max-height: calc(70vh);
			}

			@media (min-width: 380px) {
				max-height: calc(75vh);
			}
			@media (min-width: 400px) {
				max-height: calc(80vh);
			}
			@media (min-width: 420px) {
				max-height: calc(85vh);
			}
			@media (min-width: 450px) {
				max-height: calc(92vh);
			}
			@media (min-width: 475px) {
				max-height: calc(96vh);
			}
			@media (min-width: 500px) {
				max-height: calc(100vh);
			}

			@media (min-width: 768px) {
				/* max-height: auto; */
				height: 700px;
				position: relative;
				top: 0;
			}
		}

		.col-img {
			/* padding-left: 0;
			height: 620px;
			overflow: hidden; */
			/* top: -300px; */

			@media (min-width: 320px) {
				top: initial;
				height: auto;
				padding-bottom: 30px;
				overflow: hidden;
			}

			@media (min-width: 768px) {
				height: 620px;
				top: -250px;
			}

			@media (min-width: 992px) {
				height: 620px;
				top: -200px;
				left: -95px;
			}
		}

		.logo_container {
			margin-bottom: 25px;
		}

		#fairily_purpose {
			background-color: #fff;

			@media (max-width: 599px) {
				padding-bottom: 60px;
				padding-top: 0;
			}
			@media (min-width: 600px) {
				padding-bottom: 60px;
				padding-top: 0;
			}
			@media (min-width: 768px) {
				padding-top: 0;
				margin-bottom: -200px;
			}
			@media (min-width: 992px) {
				padding-top: 0;
				margin-bottom: -100px;
				margin-left: 80px;
			}

			.col-md-6 {
				@media (min-width: 320px) {
					padding-right: 0;
					padding-left: 0;
				}
				@media (min-width: 768px) {
					padding-right: 15px;
					padding-left: 15px;
				}
			}

			& #fairily_purpose_contenu {
				padding-left: 60px;

				@media (min-width: 320px) {
					padding-left: 0;
					padding-right: 0;
					margin-top: 60px;
				}

				@media (min-width: 599px) {
					padding-top: 40px;
					padding-left: initial;
				}
				@media (min-width: 768px) {
					padding-top: 40px;
					padding-left: 50px;
					padding-right: initial;
					margin-top: 0;
				}
				@media (min-width: 992px) {
					padding-top: 40px;
					padding-left: initial;
					padding-right: initial;
					margin-top: 0;
				}

				.mobile-move {
					@media (max-width: 768px) {
						display: none;
					}
				}

				.mobileOnly {
					@media (min-width: 320px) {
						h2  {
							padding-bottom: 15px;
						}
					}

					@media (min-width: 768px) {
						display: none;
					}
				}

				.logo_container {
					@media (max-width: 720px) {
						padding-top: 30px;
					}
				}
			}
		}
	}
`;
