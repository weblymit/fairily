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

	@media (min-width: 320px) {
		margin-top: 0;
	}

	@media (min-width: 768px) {
		margin-top: -310px;
	}

	@media (min-width: 992px) {
		margin-left: 160px;
	}

	.hl3 {
		@media (max-width: 992px) {
			display: none;
		}
	}

	.box-principal {
		background-color: #8c90a7;
		color: #fff;
		padding-top: 190px;
		padding-bottom: 150px;
		margin-left: 90px;

		@media (min-width: 320px) {
			padding-top: 60px;
			padding-bottom: 60px;
			margin-left: 0;
		}

		@media (min-width: 768px) {
			padding-top: 190px;
			padding-bottom: 150px;
			margin-left: 0;
		}
	}

	p {
		color: #fff;
	}

	.header-box {
		margin-left: 120px;

		@media (min-width: 320px) {
			margin-left: 0;
		}

		@media (min-width: 992px) {
					margin-left: 145px;
		}
	}

	.box-body {
		margin-left: 160px;
		margin-right: 180px;

		@media (min-width: 320px) {
			margin-left: 0;
			margin-right: 0;
		}

		@media (min-width: 768px) {
			margin-left: 60px;
			margin-right: 0;
		}

		@media (min-width: 992px) {
			margin-left: 140px;
			margin-right: 180px;
		}
	}
`;
