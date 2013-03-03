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
	<br />* more
		<br /><code>$('some-selector').more_less_button({'more' : false});</code>
			<br />- if set to false, the button will be "Read Less" and 'some-selector' will not be collapse at start.
	<br />* read_more / read_less
		<br /><code>$('some-selector').more_less_button({'read_more' : 'Some Read More Text', 'read_less' : 'Some Read LESS Text'});</code>
			<br />- determine the text attached to the buttons		
	<br />*  collapsed_value
		<br /><code>$('some-selector').more_less_button({'collapsed_value' : '200px'});</code>
			<br />- If you want the some-selector to be partly collapsed, insert a value by pixels
	<br />*  extended_value
		<br /><code>$('some-selector').more_less_button({'collapsed_value' : '200px', 'extended_value' : '400px'});</code>
			<br />- If you want the some-selector to partly extended, insert a value by pixels
	<br />*  extended_value
		<br /><code>$('some-selector').more_less_button({'sub_element' : '.some-jquery-selector'});</code>
			<br />- If you want to expand\collapse some sub elemnt within the #some-block

@See more at the demo directory attached to the plugin
