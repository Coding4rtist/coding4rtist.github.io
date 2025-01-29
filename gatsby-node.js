const path = require('path');

exports.onCreateWebpackConfig = ({
	stage,
	rules,
	loaders,
	plugins,
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src', 'components'),
				'@layouts': path.resolve(__dirname, 'src', 'layouts'),
				'@styles': path.resolve(__dirname, 'src', 'styles'),
				'@context': path.resolve(__dirname, 'src', 'context'),
				'@hooks': path.resolve(__dirname, 'src', 'hooks'),
				'@lib': path.resolve(__dirname, 'src', 'lib'),
				'@images': path.resolve(__dirname, 'src', 'images'),
			},
		},
	});
};
