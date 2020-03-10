import React from 'react';
import styled from 'styled-components';

const SectionFairilyParcours = () => {
	return (
		<Section id="fairily_parcour">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<p>hello</p>
					</div>
					<div className="col-md-8">
						<p>Découverte des séries limitées de la semaine</p>
						<h2>Notre parcours</h2>

						<div>
							<span className="badge badge-pill badge-primary">1</span>
							<h3>Créez votre sélection personnalisée</h3>
							<p>Selon vos goûts et vos envies.</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">2</span>
							<h3>Un coup de coeur</h3>
							<p>
								Faites une offre et laissez-vous prendre au jeu de la négociation ! Visualisez le nombre
								de Fairy’Shoppers intéressés et négociez à vos risques et périls...
							</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">3</span>
							<h3>Validez votre selection</h3>
							<p>Avant qu’elle ne s’évapore...</p>
						</div>
						<div>
							<span className="badge badge-pill badge-primary">4</span>
							<h3>Le fairy'Maker accèpte votre proposition ?</h3>
							<p>La magie opère. À vous de jouer !</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SectionFairilyParcours;

const Section = styled.section`width: 100%;`;
