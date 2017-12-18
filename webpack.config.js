module.exports = options => {
	return{
		entry:'./with&&.js',
		output:{
			filename:'bundle.js',
		},

		module:{
			rules:[
				{
					test:/.js$/,
					exclude: /node_modules/,
					use:[
						{
							loader: 'babel-loader',
							options:{
								cacheDirectory:true,
							},
						},
					],
				},
			],
		},
	},
	
}