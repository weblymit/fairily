import React from 'react';
import styled from 'styled-components';

const NewsLetter = () => {
	return (
		<Section id="fairily_newsletter">
			<div className="container">
				<p className="h1-size">Recevez la newsletter Fairily</p>
				<p>
					Rejoignez la communauté et suivez les offres en cours, les Fairy’Makers de la semaine et ceux à venir
					!
				</p>
				<div className="box-form">
					<form action="">
						<label htmlFor="mail">Votre mail</label>
						<input type="email" name="mail" id="input-mail" />
						<input type="submit" value="je m'abonne" className="btn btn-green" />
					</form>
				</div>
			</div>
		</Section>
	);
};

export default NewsLetter;

const Section = styled.section`
	background-color: #fff;
	padding-top: 130px;
	padding-bottom: 190px;
	padding-left: 240px;
	margin-left: 95px;

	.box-form {
		margin-top: 50px;

		label {
			text-transform: uppercase;
			margin-right: 20px;
		}

		#input-mail {
			border-width: 0;
			border-bottom-width: 2px;
			margin-right: 30px;
		}
	}
`;
