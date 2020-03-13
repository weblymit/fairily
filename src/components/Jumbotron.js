import React from 'react';
// import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const JumbotronHome = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			jumbo: file(relativePath: { eq: "imgJumbo.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const jumbo = data.jumbo.childImageSharp.fluid;
	return (
		<Div>
			<BackgroundImage Tag="div" className={className} fluid={jumbo} backgroundColor={`#aec9ba`}>
				{/* <Jumbotron fluid>
					<Container>
						<h1>Fairily</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron> */}
			</BackgroundImage>
		</Div>
	);
};

const StyledBackgroundSection = styled(JumbotronHome)`
	height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
	clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 55%);
  
`;

export default StyledBackgroundSection;

const Div = styled.div`
	.jumbotron {
		height: 85vh;
		clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 64%);
		background-color: #bb6b44;
		color: #fff;

		p {
			color: #fff;
		}
	}
`;
