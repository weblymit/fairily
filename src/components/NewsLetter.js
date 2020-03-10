import React from 'react';

const NewsLetter = () => {
	return (
		<section id="fairily_newsletter">
			<div className="container">
				<h2>Recevez la newsletter Fairily</h2>
				<p>
					Rejoignez la communauté et suivez les deals en cours, les Fairy’Makers de la semaine et ceux à venir
					!
				</p>
				<form action="">
					<label htmlFor="mail">Votre mail</label>
					<input type="email" name="mail" id="" />
					<input type="submit" value="je m'abonne" />
				</form>
			</div>
		</section>
	);
};

export default NewsLetter;
