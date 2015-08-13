// public parts of the plugin (i.e. parts that reside in the public folder and will be transfered to the client)
// must be AMD modules (RequireJS)
define(function(require) {

	// Include our custom CSS (LESS also works)
	require('plugins/tr-k4p-clock/clock.css');

	// The provider function must return the visualization
	function ClockProvider(Private) {
		// Load TemplateVisType
		var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

		// Return a new instance describing this visualization
		return new TemplateVisType({
			name: 'trClock', // the internal id of the visualization
			title: 'Clock', // the name shown in the visualize list
			icon: 'fa-clock-o', // the class of the font awesome icon for this
			description: 'Add a digital clock to your dashboards.', // description shown to the user
			requiresSearch: false, // Cannot be linked to a search
			template: require('plugins/tr-k4p-clock/clock.html') // Load the template of the visualization
		});
	}

	// Register the above provider to the visualization registry
	require('ui/registry/vis_types').register(ClockProvider);

	// Return the provider, so you potentially load it with RequireJS.
	// This isn't mandatory, but since all Kibana plugins do this, you might
	// want to also return the provider.
	return ClockProvider;

});