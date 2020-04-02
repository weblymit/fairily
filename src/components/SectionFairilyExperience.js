import React from 'react';
import styled from 'styled-components';

const SectionFairilyExperience = () => {
	return (
		<Section id="fairily_experience">
			<div className="hl2" />
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="box-experience">
							<h2>L'expérience</h2>
							<p className="h1-size">
								Etre un <br /> Fairy'Shopper{' '}
							</p>
						</div>
					</div>
					<div className="col-md-6" id="box-shopper">
						<h3>
							être un fairy'Shopper, <br /> c'est être au coeur de <br /> sa propre expérience <br />{' '}
							d'achat
						</h3>
						<p>
							Décider d’oser, de découvrir, d’aimer, <br /> de négocier, de posséder dans <br /> l’univers
							exaltant de Fairily.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyExperience;

const Section = styled.section`
	background-color: #fff;
	padding: 80px 0 290px;
	margin-right: 90px;

	@media (min-width: 320px) {
		padding: 80px 0 10px;
		margin-right: 0;
	}
	@media (min-width: 768px) {
		padding: 280px 15px;
		margin-right: 50px;
		margin-top: -190px;
	}

	@media (min-width: 992px) {
		padding: 830px 15px 280px;
		margin-right: 60px;
		margin-top: -790px;
	}

	.box-experience {
		/* margin-left: 50px; */

		@media (min-width: 320px) {
			margin-left: 0;
		}

		@media (min-width: 992px) {
			margin-left: 130px;
		}

		h2 {
			@media (min-width: 320px) {
				padding-bottom: 20px;
			}
		}
	}

	.hl2 {
		@media (max-width: 992px) {
			display: none;
		}
	}

	#box-shopper {
		padding-left: 100px;

		@media (min-width: 320px) {
			padding: 30px 15px;
		}
		@media (min-width: 992px) {
			padding: 30px 15px 30px 80px;
		}
	}
`;
