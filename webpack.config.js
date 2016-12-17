var webpack = require('webpack');

module.exports = {
	
	/* Where it should start processing your code. */
	entry: [
		'script!jquery/dist/jquery.min.js', /* script loader */
		'script!foundation-sites/dist/foundation.min.js', /* script loader */
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery'	
	},
	plugins: [
		new webpack.ProvidePlugin({				
			$: "jquery", /* allows us to not specify requring jQuery files in jsx files */
			jQuery: "jquery"
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {			
		root: __dirname, /* variable in node.js that gives path to file you're in */
		alias: { /* Webpack aliases */
			Main: 'app/components/Main.jsx',
			Navigation: 'app/components/Navigation.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			applicationStyles: 'app/styles/app.scss',
			Controls: 'app/components/Controls.jsx',
			ControlsTimer: 'app/components/ControlsTimer.jsx',
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:  [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map' /* for debugging, shows actual code not webpack code */
};
