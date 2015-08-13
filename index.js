module.exports = function(kibana) {
	// Return a new instance of kibana.Plugin that holds
	// information about this plugin.
	return new kibana.Plugin({
		// We have some ui components, that we need to describe
		uiExports: {
			// Register our visualizations (a plugin can have multiple visualizations)
			visTypes: [
				'plugins/tr-k4p-clock/clock'
			]
		}
	});
};