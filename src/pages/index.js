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
				<SEO title="Home" />

				<Div>
					<SectionFairilyConcept />
					<SectionThreeHome />
					<SectionFairilyShopper />
					<SectionFairilyParcours />
					<SectionFairilyExperience />
					<SectionFairilyFourImage />
					<SectionFairilyAvantage />
					{/* <SectionFour /> */}
					{/* <NewsLetter /> */}
					{/* <SectionApp /> */}
				</Div>
			</Layout>
		);
	}
}

export default IndexPage;

const Div = styled.div`/* padding: 0; */`;
