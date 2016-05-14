/*!
 * ContextMenu
 *
 * @url <//github.com/wolf-w/pastebox/contextmenu/>
 * @author Wolf Wortmann <//elementcode.de> / <wolf@wolfgang-m.de>
 * @copyright (c) Copyright 2016 Wolf Wortmann <http://elementcode.de> / <wolf@wolfgang-m.de>
 * @license Feel free to use, modify and redistribute this code. But keep this license AND copyright notice.
 */
;(function () {
	var _ = window.ContextMenu = {
		_history: [],
		init: function () {
			document.addEventListener("mousedown", _.handleRightClick);//store all right-click events

			[].forEach.call(document.querySelectorAll('menuitem'), function(menuitem) {
				menuitem.addEventListener('click', _.handleItemClick);//run callback on menuitem click
			})
		},
		handleRightClick: function (event) {
			if( event.button == 2 ) {
				_._history.push(event);
			}
		}
		handleItemClick: function () {
			var callback = this.getAttribute('data-contextmenu');
			if(typeof callback != 'undefined'){
				var event = _._history.slice(-1)[0];//the last right-click event (contains the target)

				if(callback.match(/^function\((.*)\)\{(.*)\}$/)){
					callback = '('+callback+')';//creates anonymous function syntax
				}

				if(typeof eval(callback) == 'function'){
					eval(callback)(event, event.target);
				}
				else{
					console.error('[ContextMenu] "'+ callback +'" is not callable!', this);
				}
			}
			else{
				console.log('[ContextMenu] no callback for "'+this.label+'" specified!', this);
			}
		}
	};

	document.addEventListener("DOMContentLoaded", _.init);
})();
