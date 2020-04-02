import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SectionApp = () => {
	const data = useStaticQuery(graphql`
		query {
			img: file(relativePath: { eq: "mockup.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 920, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			appstore: file(relativePath: { eq: "store.png" }) {
				childImageSharp {
					fluid(maxHeight: 520, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			gstore: file(relativePath: { eq: "play.png" }) {
				childImageSharp {
					fluid(maxHeight: 520, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img1 = data.img.childImageSharp.fluid;
	const gstore = data.gstore.childImageSharp.fluid;
	const appstore = data.appstore.childImageSharp.fluid;
	return (
		<Section id="app">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6" id="img_left">
						<div className="box-img">
							<Img fluid={img1} alt="fairily photo" />
						</div>
					</div>
					<div className="col-md-6 colRight">
						<div className="box-right">
							<div className="container">
								<p className="h1-size">
									Découvrez notre <br /> application <br /> mobile
								</p>
								<p>
									Les ventes éphémères repensées pour vous, <br /> avec vous et par vous !
								</p>
								<div className="app_store">
									<Img fluid={appstore} />
								</div>
								<div className="play_store">
									<Img fluid={gstore} />
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionApp;

const Section = styled.section`
	padding: 0;
	height: 611px;
	/* overflow: hidden; */

	@media (min-width: 320px) {
		height: auto;
	}
	@media (min-width: 768px) {
		padding: 90px 0;
	}
	@media (min-width: 992px) {
		padding: 90px 0 28px;
	}

	.box-img {
		@media (min-width: 320px) {
			height: auto;
		}

		@media (min-width: 768px) {
			height: 500px;
		}
	}

	.colRight {
		@media (min-width: 320px) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	#img_left {
		padding-left: 0;
		position: relative;
		top: -70px;
		/* overflow: hidden; */

		@media (min-width: 320px) {
			top: 0;
			position: initial;
			padding-right: 0;
		}

		@media (min-width: 992px) {
			padding-left: 0;
			position: relative;
			top: -170px;
		}
	}

	.box-right {
		padding-left: 50px;
		padding-top: 110px;

		@media (min-width: 320px) {
			padding: 60px 0 80px;
		}

		@media (min-width: 768px) {
			padding-left: 20px;
			padding-top: 0;
		}

		@media (min-width: 992px) {
			padding: 0 0 60px 50px;

		}

		.h1-size {
			@media (min-width: 320px) {
				margin-bottom: 40px;
			}
		}

		.app_store {
			margin-bottom: 30px;
			margin-top: 30px;
			
			@media (min-width: 320px) {
				width: 220px;
				margin-left: auto;
				margin-right: auto;
			}

			@media (min-width: 768px) {
				/* width: 220px; */
			}

			@media (min-width: 992px) {
				margin-bottom: 30px;
				margin-top: 30px;
				margin-left: 0;
				margin-right: 0;
			}

			& img {
				border-radius: 10px;
			}
		}

		.play_store {
			
			@media (min-width: 320px) {
				width: 220px;
				margin-left: auto;
				margin-right: auto;
			}

			@media (min-width: 768px) {
				/* width: 220px; */
			}

			@media (min-width: 992px) {
				margin-left: 0;
				margin-right: 0;
			}

			& img {
				border-radius: 10px;
			}
		}
	}
`;
