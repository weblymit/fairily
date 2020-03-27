module.exports = {
	siteMetadata: {
		title: `Fairily`,
		description: `Voici le site de la startup Fairily`,
		author: `@fairily`,
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
		// typography
		// {
		// 	resolve: `gatsby-plugin-typography`,
		// 	options: {
		// 		pathToConfigModule: `src/utils/typography`
		// 	}
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/symbole_seul_gris.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
