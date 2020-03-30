import React from 'react';
import styled from 'styled-components';

const SectionFairilyAvantage = () => {
	return (
		<Section>
			<div className="hl3" />
			<div className="box-principal">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="header-box">
								<h2>Les avantages</h2>
								<p className="h1-size">
									Etre un <br /> Fairy'Maker
								</p>
							</div>
						</div>
						<div className="col-md-8">
							<div className="box-body">
								<h3>
									C'est être au coeur de sa propre <br /> expérience de vente
								</h3>
								<p>
									Grâce à un nouveau parcours d’achat, vos futurs clients découvrent vos séries
									limitées et négocient directement avec vous pour obtenir des produits de votre
									création.
								</p>
								<h3>Les avantages en tant que Fairy'Maker ?</h3>
								<p>
									Digitaliser votre métier, être visible sur une Marketplace pointue et différenciante
									qui valorise votre savoir-faire et votre univers créatif, connaître vos futurs
									clients, leurs attentes, l’attractivité de vos produits, établir un prix juste pour
									vous et pour les acheteurs, sécuriser le paiement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyAvantage;

const Section = styled.section`
	margin-top: -310px;

	.hl3 {
		@media (max-width: 720px) {
			display: none;
		}
	}

	@media (max-width: 720px) {
		margin-top: 0;
	}

	.box-principal {
		background-color: #8c90a7;
		color: #fff;
		padding-top: 190px;
		padding-bottom: 150px;
		margin-left: 90px;

		@media (max-width: 720px) {
			padding-top: 60px;
			padding-bottom: 60px;
			margin-left: 0;
		}
	}

	p {
		color: #fff;
	}

	.header-box {
		margin-left: 120px;

		@media (max-width: 720px) {
			margin-left: 0;
		}
	}
	.box-body {
		margin-left: 160px;
		margin-right: 180px;

		@media (max-width: 720px) {
			margin-left: 0;
			margin-right: 0;
		}
	}
`;
