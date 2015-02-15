/**
  * vtcha
  * https://github.com/wolf-w/pastebox/tree/master/vtcha
  *
  * v 2015.02.15-01
  *
  * LICENCE Feel free to use, modify and redistribute this code. But please keep this copyright notice.
  * (c) Copyright 2015 Wolf Wortmann <wolf@wolfgang-m.de> / <http://elementcode.de>
  *
  * Needs modernizr.prefixed() from http://modernizr.com/download/#-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
  * and draggabilly from http://draggabilly.desandro.com
  * and dragdrop.js from https://github.com/codrops/DragDropInteractions (http://www.codrops.com)
  */
$.fn.vtcha = function(options) {
  $this = $(this);
  var defaults = {
    'ok': 'vtcha_accepted_2K15',
    'hide': null,
  }

  $this.each(function(){
    var $this = $(this),
    settings = $.extend({}, defaults, options),
    $box = $( create_html() ),
    $dropArea = $box.find('.target-box'),
    $targets = $dropArea.find('.target'),
    $items = $box.find('.item'),
    droppableArr = [], dropAreaTimeout;

    $box.insertAfter($this);
    $this.attr('hidden',true);
    $(settings.hide).hide(100);

    // initialize droppables(s)
    $targets.each(function( i, el ) {
      droppableArr.push( new Droppable( el, {
        onDrop : function( instance, draggableEl ) {
          $target = $(instance.el);
          $item = $(draggableEl);

          if ($target.attr('data-match') == $item.attr('data-value')) {
            $target.addClass('complete').parent().addClass('complete');
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
        draggabilly : { containment: $box[0] },
        onStart : function() {
          $dropArea.addClass('show');
        },
        onEnd : function( wasDropped ) {
          $dropArea.removeClass('show');
        }
      } );
    } );

    function accept(){
      $this.attr('value',settings.ok);
      setTimeout(function(){
        $box.addClass('hide');
      },700);
    }

    function create_html(){
      symb = symbols();
      data = [
        '<div class="target" data-match="1"><i class="fa fa-'+symb[1]+'"></i></div>',
        '<div class="target" data-match="0"><i class="fa fa-'+symb[0]+'"></i></div>',
        '<div class="target" data-match="2"><i class="fa fa-'+symb[2]+'"></i></div>',
      ];
      arr = shuffle(data);
      var html = 
        '<div class="vtcha">'+
        '  <div class="intro">Put one item in his target box.</div>'+
        ''+
        '  <div class="item-box">'+
        '    <div class="item-background-wrap">'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[0]+'"></i></div>'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[1]+'"></i></div>'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[2]+'"></i></div>'+
        '    </div>'+
        '    <div class="item-wrap">'+
        '      <div class="item-styles item" data-value="0"><i class="fa fa-'+symb[0]+'"></i></div>'+
        '      <div class="item-styles item" data-value="1"><i class="fa fa-'+symb[1]+'"></i></div>'+
        '      <div class="item-styles item" data-value="2"><i class="fa fa-'+symb[2]+'"></i></div>'+
        '    </div>'+
        '  </div>'+
        ''+
        '  <div class="target-box">'+
              arr[0]+arr[1]+arr[2]+
        '  </div>'+
        '</div>';
      return html;

      function shuffle(o){//http://css-tricks.com/snippets/javascript/shuffle-array/
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      }
    }

    function symbols(){
      var list = [
        'anchor',
        'asterisk',
        'bed',
        'bank',
        'bell',
        'bicycle',
        'binoculars',
        'bomb',
        'book',
        'briefcase',
        'bug',
        'bullhorn',
        'bus',
        'camera',
        'car',
        'child',
        'cloud',
        'coffee',
        'compass',
        'cutlery',
        'database',
        'desktop',
        'diamond',
        'envelope',
        'eye',
        'eyedropper',
        'female',
        'fighter-jet',
        'flag',
        'gamepad',
        'gavel',
        'glass',
        'globe',
        'gift',
        'heart',
        'leaf',
        'image',
        'magic',
        'lock',
        'map-marker',
        'music',
        'microphone',
        'paper-plane',
        'moon-o',
        'pencil',
        'plug',
        'recycle',
        'retweet',
        'road',
        'rocket',
        'star',
        'thumbs-down',
        'trophy',
        'tree',
        'umbrella',
        'volume-off',
        'video-camera',
        'user-secret',
        'warning',
        'wrench',
        'wifi'
      ];
      var min=2,max=60,data=[],icons=[];
      function get(){
        for (var i=0; i <= 2; i++) {
          data[i] = min+parseInt(Math.random()*((max+1)-min));
          icons[i] = list[ data[i] ];
        };
        if (same()) {
          get();
        };
      };
      get();

      function same(){
        if (data[0] == data[1] || data[0] == data[2] || data[1] == data[2]) {
          return true;
        };
        return false;
      }

      return icons;
    }
  })
};
