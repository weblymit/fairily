import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const SectionThreeHome = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			imageCoq: file(relativePath: { eq: "fairily_coquillage.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img = data.imageCoq.childImageSharp.fluid;
	return (
		<div id="fairy_shoppers">
			<BackgroundImage Tag="div" className={className} fluid={img} backgroundColor={`#aec9ba`} />
		</div>
	);
};

const StyledBackgroundSection = styled(SectionThreeHome)`
	height: 300px;
  background-position: center;
  background-size: cover;
		@media (max-width: 720px) {
			height: 170px;
		}
  
`;

export default StyledBackgroundSection;
