import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const SectionFourHome = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			imageCoq: file(relativePath: { eq: "fairily_green.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const img = data.imageCoq.childImageSharp.fluid;
	return (
		<div>
			<BackgroundImage Tag="section" className={className} fluid={img} backgroundColor={`#aec9ba`} />
		</div>
	);
};

const StyledBackgroundSection = styled(SectionFourHome)`
	height: 320px;
  background-position: center;
  background-size: cover;
  /* background-attachment: fixed; */
`;

export default StyledBackgroundSection;
