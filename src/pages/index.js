import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SectionFairilyConcept from '../components/SectionFairilyConcept';
import SectionThreeHome from '../components/sectionThreeHome';
import SectionFairilyShopper from '../components/SectionFairilyShopper';
import SectionFairilyParcours from '../components/SectionFairilyParcours';
import SectionFairilyExperience from '../components/SectionFairilyExperience';
import SectionFairilyFourImage from '../components/SectionFairilyFourImage';
import SectionFairilyAvantage from '../components/SectionFairilyAvantage';
import SectionFour from '../components/sectionFourHome';
import NewsLetter from '../components/NewsLetter';
import SectionApp from '../components/SectionApp';
import SEO from '../components/seo';
import styled from 'styled-components';

class IndexPage extends React.Component {
	render() {
		return (
			<Layout>
							<SEO title="Bienvenue chez Fairily. Nous vous proposons de devenir acteur de votre shopping en ligne Chez nous, vous êtes au cœur de l’expérience.
			Vous avez le pouvoir de décision sur le produit et le prix." />

				<Div>
					<SectionFairilyConcept />
					<SectionThreeHome />
					<SectionFairilyShopper />
					<SectionFairilyParcours />
					<SectionFairilyExperience />
					<SectionFairilyFourImage />
					<SectionFairilyAvantage />
					<SectionFour />
					<NewsLetter />
					<SectionApp />
				</Div>
			</Layout>
		);
	}
}

export default IndexPage;

const Div = styled.div`/* padding: 0; */`;
