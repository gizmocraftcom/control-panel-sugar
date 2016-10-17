# Control Panel Sugar 0.3.3

Control Panel Sugar is an experimental plugin for [Craft CMS](https://craftcms.com/) that adds some extra functionality to the control panel and various other stuff.

## Features

### Control Panel GUI

* Adds sidebar shortcuts to pages _Fields_ and _Sections_.
* Adds dynamic width CSS to control panel sidebar.
* Adds table row highlight color on plugin page

### Matrix Fields

* Adds feature to visually group blocks.
* ~~Hold down `Shift` and click the title bar of a _Matrix block_ to **collapse all** or **expand all blocks**.~~
* ~~Hold down `Alt` and click the check box in the title bar of a _Matrix block_ to **select all** or **deselect all check boxes**.~~

#### Browser Console

* Disables twig log messages, when Craft debug mode is activated.

#### SEO

* `headlineTag` hook to ensure every page has just one `h1` tag.

## Installing

1. Copy the `controlpanelsugar` directory into your `craft/plugins` directory
1. Open Craft Settings > Plugins page and click on the _Install_ button next to _Control Panel Sugar_

## Updates

* 0.3.0
  * Added: Visually group blocks. Use arrow characters in the block type title description to use grouping: '➘' to start group and '➚' to close group
* 0.2.0
  * Added `Alt` check box click feature
* 0.1.0
  * Initial release

## Todo

* Add options to config.php
* Entries: Add locale info
* …
* Suggestions? :-)

## Author

Mario Pizzinini, [gizmocraft.com](https://gizmocraft.com/)

## License

MIT © [gizmocraft.com](https://gizmocraft.com/)