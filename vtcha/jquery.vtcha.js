(function(options) {
  $this = $('input');
  $box = $('.vtcha');

  $this.attr('hidden',true);

  var defaults = {
    'ok': 'vtcha_accepted',
  }
  var settings = $.extend({}, defaults, options);

  var $dropArea = $('.target-box'),
  $targets = $('.target'),
  $items = $('.item'),
  droppableArr = [], dropAreaTimeout;

  // initialize droppables(s)
  $targets.each(function( i, el ) {
    droppableArr.push( new Droppable( el, {
      onDrop : function( instance, draggableEl ) {
        $target = $(instance.el);
        $item = $(draggableEl);

        if ($target.attr('data-match') == $item.attr('data-value')) {
          $target.addClass('complete');
          $target.parent().addClass('complete');
          $item.parent().find('.item').remove();
          accept();
        }
        else{
          setTimeout(function(){
            $item.removeClass('is-dropped');
            $item.removeClass('is-complete');
          },500)
        }
      }
    } ) );
  } );

  // initialize draggable(s)
  $items.each(function( i, el ) {
    new Draggable( el, droppableArr, {
      draggabilly : { containment: document.body },
      onStart : function( x ) {
        $dropArea.addClass('show');
      },
      onEnd : function( wasDropped ) {
        var afterDropFn = function() {
          $dropArea.removeClass('show');
        };
        afterDropFn();
      }
    } );
  } );

  function accept(){
    $box.addClass('hide');
    setTimeout(function(){
      //Remove box or do sth..
      //$box.remove();
    },400);

    $this.val(settings.ok);
  }
})();
