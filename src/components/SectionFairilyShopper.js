import React from 'react';
import styled from 'styled-components';

const SectionFairilyShopper = () => {
	return (
		<Section id="fairy_shoppers">
			<div className="container">
				<div className="row">
					<div className="col-md-6" >
						<div id="block_community">
							<h2>
								Nos fairy’shoppers <br /> Nos fairy’makers
							</h2>
							<p className="h1-size">
								Notre <br /> communauté
							</p>
							<div className="list_shopper">
								<ul>
									<li>Dénichez des produits d’exception</li>
									<li>Négociez le prix d’achat</li>
									<li>Osez prendre des risques</li>
									<li>Devenez un FAIRY’SHOPPER</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<h3>
							Fairily est l'application <br /> de négociation <br /> des produits d'exception
						</h3>
						<p>
							Dénichez d’authentiques produits sélectionnés avec soin, négociez le prix d’achat à travers
							une expérience intuitive, personnalisée et ludique. Devenez l’acteur de vos découvertes.
							Fairily est un véritable créateur de liens entre acheteurs en recherche de plaisir,
							découverte et artisans créateurs.
						</p>
						<div className="fairily_button">
							<a href="#" className="btn btn-success">
								s'inscrire
							</a>
						</div>
						<div className="fairily_button">
							<a href="#" className="btn btn-primary">
								devenir un Fairy'Maker
							</a>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyShopper;

const Section = styled.section`
	padding: 80px 0;
	#block_community {
		background-color: #fff;
		padding: 50px;
		/* margin-right: 10%; */
		margin-top: -200px;
	}
`;
