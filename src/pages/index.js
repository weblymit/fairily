import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SectionThreeHome from '../components/sectionThreeHome';
import SectionFairilyShopper from '../components/SectionFairilyShopper';
import SectionFairilyConcept from '../components/SectionFairilyConcept';
import SectionFairilyParcours from '../components/SectionFairilyParcours';
import SectionFairilyExperience from '../components/SectionFairilyExperience';
import SectionFairilyAvantage from '../components/SectionFairilyAvantage';
import SectionFourHome from '../components/SectionFourHome';
import NewsLetter from '../components/NewsLetter';
import SectionApp from '../components/SectionApp';
// import Image from '../components/image';
// import ImgLogoGris from '../images/symbole_seul_gris.png';
import SEO from '../components/seo';
import styled from 'styled-components';
import SectionFairilyFourImage from '../components/SectionFairilyFourImage';

class IndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Home" />

				<Div className="">
					<SectionFairilyConcept />
					<section id="fairily_section_three">
						<SectionThreeHome />
					</section>
					<SectionFairilyShopper />
					<SectionFairilyParcours />
					<SectionFairilyExperience />
					<SectionFairilyFourImage />
					<SectionFairilyAvantage />
					<SectionFourHome />
					<NewsLetter />
					<SectionApp />
				</Div>
			</Layout>
		);
	}
}

export default IndexPage;

const Div = styled.div`
/* padding: 0; */
`