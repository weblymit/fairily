import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

class IndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<h1>Titre h1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos vero tenetur cupiditate possimus corrupti minima! Facere distinctio eos eum iste ducimus, maxime recusandae sint asperiores quibusdam, enim modi dolorem?</h1>
				<h2>Titre h2</h2>
				<h3>Titre h3</h3>
				<p>Welcome to your new Gatsby site.</p>
				<p>Now go build something great.</p>
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					<Image />
				</div>
				<Link to="/page-2/">Go to page 2</Link>
			</Layout>
		);
	}
}

export default IndexPage;
