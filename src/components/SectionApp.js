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
					<div className="col-md-6">
						<div className="box-right">
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
		</Section>
	);
};

export default SectionApp;

const Section = styled.section`
	padding: 0;
	height: 611px;
	/* overflow: hidden; */

	@media (max-width: 720px) {
		height: auto;
	}

	.box-img {
		height: 500px;
		@media (max-width: 720px) {
			height: auto;
		}
	}

	#img_left {
		padding-left: 0;
		position: relative;
		top: -70px;
		/* overflow: hidden; */

		@media (max-width: 720px) {
			top: 0;
			position: initial;
			padding-right: 0;
		}
	}

	.box-right {
		padding-left: 50px;
		padding-top: 110px;

		@media (max-width: 720px) {
			padding: 60px 0;
		}

		.h1-size {
			@media (max-width: 720px) {
				margin-bottom: 40px;
			}
		}

		.app_store {
			width: 220px;
			margin-bottom: 30px;
			margin-top: 30px;

			@media (max-width: 720px) {
				margin-left: auto;
				margin-right: auto;
			}

			& img {
				border-radius: 10px;
			}
		}

		.play_store {
			width: 220px;

			@media (max-width: 720px) {
				margin-left: auto;
				margin-right: auto;
			}

			& img {
				border-radius: 10px;
			}
		}
	}
`;
