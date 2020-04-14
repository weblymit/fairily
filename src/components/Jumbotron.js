import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/nav/Navigation';

import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const JumbotronHome = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			jumbo: file(relativePath: { eq: "imgJumbo.jpg" }) {
				childImageSharp {
					fluid(quality: 80, maxWidth: 700) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const jumbo = data.jumbo.childImageSharp.fluid;
	return (
		<div>
			<Navigation />
			<BackgroundImage Tag="div" className={className} fluid={jumbo} backgroundColor={`#aec9ba`} />
			<div id="notre-concept" />
		</div>
	);
};

const StyledBackgroundSection = styled(JumbotronHome)`
	height: 100vh;
  background-position: center;
  background-size: cover;
	clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 55%);

	@media (max-width: 768px) {
		height: 80vh;
	}
  
`;

export default StyledBackgroundSection;


