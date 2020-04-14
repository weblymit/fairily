import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import all section Component
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

class IndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Fairily | Bienvenue chez Fairily" />

				<div>
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
				</div>
			</Layout>
		);
	}
}

export default IndexPage;
