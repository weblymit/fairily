module.exports = {
	siteMetadata: {
		title: `Fairily`,
		description: `Fairily vous propose de devenir acteur de votre shopping en ligne Chez nous, vous êtes au cœur de l’expérience.Vous avez le pouvoir de décision sur le produit et le prix`,
		author: `@weblymit`,
		image: '/images/favicon.png',
		siteUrl: `https://fairily.io`,
		menuLinLinks: [
			{
				name: 'item1',
				slug: '/item1'
			},
			{
				name: 'item2',
				slug: '/item2'
			},
			{
				name: 'item3',
				slug: '/item3'
			},
			{
				name: 'item4',
				slug: '/item4'
			}
		],
		menuFooter: [
			{
				name: 'Contactez-nous',
				slug: '/contact'
			},
			{
				name: 'FAQ',
				slug: '/faq'
			},
			{
				name: 'Mentions légales',
				slug: '/mentions-legales'
			},
			{
				name: 'Livraison et retours',
				slug: '/livraison-retour'
			},
			{
				name: 'CGV',
				slug: '/cgv'
			},
			{
				name: 'Carrières',
				slug: '/carriere'
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-netlify',
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Fairily`,
				short_name: `Fairily`,
				start_url: `/`,
				background_color: `#adc9ba`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [ `/` ]
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
