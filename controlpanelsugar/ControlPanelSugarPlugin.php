<?php
namespace Craft;

class ControlPanelSugarPlugin extends BasePlugin
{
	/**
	 * Private vars
	 */

	// Check if H1 is already in use.
	private $h1Required = true;

	/**
	 * @return string
	 */
	public function getName()
	{
		return 'Control Panel Sugar';
	}

	/**
	 * Returns the plugin’s version number.
	 *
	 * @return string The plugin’s version number.
	 */
	public function getVersion()
	{
		return '0.3.3';
	}

	/**
	 * Returns the plugin developer’s name.
	 *
	 * @return string The plugin developer’s name.
	 */
	public function getDeveloper()
	{
		return 'gizmocraft.com';
	}

	/**
	 * Returns the plugin developer’s URL.
	 *
	 * @return string The plugin developer’s URL.
	 */
	public function getDeveloperUrl()
	{
		return 'https://gizmocraft.com';
	}

	/**
	 * @return string
	 */
	public function getDocumentationUrl()
	{
		return 'https://bitbucket.org/gizmocraft/control-panel-sugar';
	}

	/**
	 * Release feed
	 *	- must be valid JSON
	 *	- must begin with https://
	 * https://craftcms.com/support/updating-plugins-for-craft-2.5#plugin-update-notifications
	 * @return string
	 */
	public function getReleaseFeedUrl()
	{
		return 'https://bitbucket.org/gizmocraft/control-panel-sugar/raw/master/releases.json';
	}

	/**
	 * Init
	 */
	function init() {

		// Check we have a cp request as we don't want to this js to run anywhere but the cp
		// and while we're at it check for a logged in user as well
		if ( craft()->request->isCpRequest() && craft()->userSession->isLoggedIn() )
		{

			// The includeJs method lets us add js to the bottom of the page
			// craft()->templates->includeJs('var Myjs = "foo";');

			// The includeCss method will add css in the head
			// craft()->templates->includeCss('.myFunkyPluginSelector { color: red; }');

			// The includeJsResource method will add a js file to the bottom of the page
			craft()->templates->includeJsResource('controlpanelsugar/js/main.js');

			// The includeCssResource method will add a link in the head
			craft()->templates->includeCssResource('controlpanelsugar/css/style.css');

		}


		/**
		 * Disable twig debug logs in browser console
		 * source: http://craftcms.stackexchange.com/questions/8520/is-it-possible-to-disable-dev-output-in-a-template-when-devmode-is-true
		 */
        craft()->log->removeRoute('WebLogRoute');
        craft()->log->removeRoute('ProfileLogRoute');


		/**
		 * HeadlineTag hook
		 *
		 * The variable headlineTag will be set to contain the required headline tag, according to SEO requirements.
		 * 'h1' will be set just once per page. Every other call will set 'h2'.
		 *
		 * Template usage:
		 *		1. Call hook: {% hook 'HeadlineTag' %}
 	 	 *		2. Use variable: {{ headlineTag }}
		 */
		craft()->templates->hook('HeadlineTag', function(&$context)
		{
			if ($this->h1Required) {
				$this->h1Required = false;
				$context['headlineTag'] = 'h1';
			}
			else {
				$context['headlineTag'] = 'h2';
			}
		});

	}

}
