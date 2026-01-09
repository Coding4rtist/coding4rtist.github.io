const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src', 'components'),
				'@layouts': path.resolve(__dirname, 'src', 'layouts'),
				'@styles': path.resolve(__dirname, 'src', 'styles'),
				'@hooks': path.resolve(__dirname, 'src', 'hooks'),
				'@lib': path.resolve(__dirname, 'src', 'lib'),
				'@images': path.resolve(__dirname, 'src', 'images'),
			},
		},
	});
};
