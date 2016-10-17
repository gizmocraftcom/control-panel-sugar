/**
 * Control Panel Sugar
 */
var ControlPanelSugar = function() {
    // console.log('ControlPanelSugar constructor');

    var init = function() {
        // console.log('ControlPanelSugar init');

        /**
         * Add control panel functionality
         *
         * – Collapse/expand all to matrix blocks by clicking on block title bar while holdig Shift key
         * – Click on title bar checkbox while holdig Alt key selects or deselects all ckeckboxes
         */
        $('.matrixblock').on('mouseup', function(e) {
            // console.log('matrixblock clicked', e.shiftKey);
            // console.log('e.target:', e.target);
            // console.log('e.currentTarget:', e.currentTarget);

            if ($(e.target).hasClass('titlebar')) {
                // Titlebar of matrix block clicked
                if (e.shiftKey) {
                    if ($('.matrixblock:not(.collapsed)').length !== 0) {
                        // Collapse expanded boxes
                        collapseExpandedMatrixBlocks();
                    }
                    else {
                        // Expanded all boxes
                        expandMatrixBlocks();
                    }
                }
            }
            // else if ($(e.target).hasClass('checkbox')) {
            //     // Check box clicked
            //     if (e.altKey) {
            //         if ($(e.currentTarget).hasClass('sel')) {
            //             // Select all blocks
            //             selectMatrixBlocks();
            //         }
            //         else {
            //             // Deselect all blocks
            //             deselectMatrixBlocks();
            //         }
            //     }
            // }
        });


        /**
         * Add shortcuts to sidebar
         *  Fields
         *  Sections
         *  Tags
         */
        var settingsLink = $('#nav-settings a').attr('href');
        // $('#nav-settings').after('<li id="nav-settings" class="nav-settings-fields"><a class="" href="' + settingsLink + '/tags"><span class="icon"><span data-icon="settings"></span></span><span class="label">Tags</span></a></li>');
        $('#nav-settings').after('<li id="nav-settings" class="nav-settings-sections"><a class="" href="' + settingsLink + '/sections"><span class="icon"><span data-icon="settings"></span></span><span class="label">Sections</span></a></li>');
        $('#nav-settings').after('<li id="nav-settings" class="nav-settings-fields"><a class="" href="' + settingsLink + '/fields"><span class="icon"><span data-icon="settings"></span></span><span class="label">Fields</span></a></li>');

        /**
         * Modify layout
         *
         * – Visually group blocks. (Add left margin to blocks if title contains '➘' and remove left margin if title contains '➚'.)
         */
        var group = false;
        var title = '';
        $('.matrixblock .titlebar .blocktype').each(function() {
            title = $(this).text();
            if (title.indexOf('➘') >= 0) {
                group = true;
                return;
            }
            else if (title.indexOf('➚') >= 0) {
                group = false;
                return;
            }

            if (group) {
                $(this).addClass('controlpanelsugar-grouped');
            }
        });
    };


    /**
     * Collapse Expanded Matrix Blocks
     */
    var collapseExpandedMatrixBlocks = function() {
        // Trigger double click on title bar to close all expanded blocks
        $('.matrixblock:not(.collapsed) .titlebar').dblclick();
    };


    /**
     * Expand Matrix Blocks
     */
    var expandMatrixBlocks = function() {
        // Trigger double click on title bar to close all expanded blocks
        $('.matrixblock.collapsed .titlebar').dblclick();
    };


    /**
     * Select Matrix Blocks
     */
    var selectMatrixBlocks = function() {
        $('.matrixblock:not(.sel) .checkbox').click();
    };


    /**
     * Deselect Matrix Blocks
     */
    var deselectMatrixBlocks = function() {
        $('.matrixblock.sel .checkbox').click();
    };


    /**
     * Public functions
     */
    return {
        init: init,
        collapseExpandedMatrixBlocks: collapseExpandedMatrixBlocks
    };

};

var cps = new ControlPanelSugar();
// $(cps.init);
$(window).load(function() {
    cps.init();
});
