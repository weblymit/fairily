import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SectionFairilyFourImage = () => {
	const data = useStaticQuery(graphql`
		query {
			img1: file(relativePath: { eq: "img4.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			img2: file(relativePath: { eq: "img6.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			img3: file(relativePath: { eq: "img7.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			img4: file(relativePath: { eq: "img5.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img1 = data.img1.childImageSharp.fluid;
	const img2 = data.img2.childImageSharp.fluid;
	const img3 = data.img3.childImageSharp.fluid;
	const img4 = data.img4.childImageSharp.fluid;
	return (
		<Section>
			<div className="container">
				<div className="row" id="box">
					<div className="col-md-6">
						<div className="container-img">
							<Img fluid={img1} alt="farily photo decoration" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="container-img-2">
							<Img fluid={img2} alt="farily photo decoration" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="container-img">
							<Img fluid={img3} alt="farily photo decoration" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="container-img-2">
							<Img fluid={img4} alt="farily photo decoration" />
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyFourImage;

const Section = styled.section`
	#box {
		/* margin-left: 150px;
		margin-right: 150px;
		position: relative;
		top: -180px; */

		@media (min-width: 320px) {
			margin-left: 0;
			margin-right: 0;
			position: initial;
			top: 0;
			padding: 60px 0;
		}

		@media (min-width: 768px) {
			position: relative;
			top: -180px;
			padding: 0;
		}
		.container-img  {
			/* max-width: 345px; */
			margin-bottom: 45px;
			@media (min-width: 992px) {
				margin-left: auto;
			}
		}
		.container-img-2  {
			/* max-width: 345px; */
			margin-bottom: 45px;
		}

		.container-img,
		.container-img-2  {
			@media (min-width: 992px) {
				max-width: 345px;
			}
		}
	}
`;
