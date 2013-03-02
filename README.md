More or Less - jQuery plugin for expanding content boxes
=========

More or Less is jQuery plugin that allow box to extend or collapse & attaching More\Less buttons with a lot of custom features: the text on the more\less buttons, the initial state of the box or the minimum height decrease in pixels/ <br/>


How to use
--------------
1. Include the more_or_less.js in your HTML file, please do not forget to include it AFTER the jQuery file.
2. Activate the plugin by using:
	$('some-selector').more_less_button();
	some-selector is a valid jQuery selectors.
3. You can use the following options:
	* more
		<code>$('some-selector').more_less_button({'more' : false});</code>
			- if set to false, the button will be "Read Less" and 'some-selector' will not be collapse at start.
	* read_more / read_less
		<code>$('some-selector').more_less_button({'read_more' : 'Some Read More Text', 'read_less' : 'Some Read LESS Text'});</code>
			- determine the text attached to the buttons		
	*  collapsed_value
		<code>$('some-selector').more_less_button({'collapsed_value' : '200px'});</code>
			- If you want the some-selector to be partly collapsed, insert a value by pixels
	*  extended_value
		<code>$('some-selector').more_less_button({'collapsed_value' : '200px', 'extended_value' : '400px'});</code>
			- If you want the some-selector to partly extended, insert a value by pixels

@See more at the demo directory attached to the plugin
