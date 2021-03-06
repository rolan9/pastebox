/**
 * DRYOC - Draw Your Own Route On canvas
 * v 1.1
 *
 * @author (c) Copyright 2014 Wolf Wortmann <wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
 * @copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2014 Wolf Wortmann <http://wolf.wolfgang-m.de> / <wolf@wolfgang-m.de>
 *
 */
(function($) {
    $.fn.DRYOC = function(opt) {
        var defaults = {
            points          : [{"sx": 5, "sy": 5, "ex": 10, "ey": 30}, {"ex": 15, "ey": 20}, {"ex": 20, "ey": 30}, {"ex": 25, "ey": 5}, {"sx": 30, "sy": 5, "ex": 35, "ey": 30}, {"ex": 40, "ey": 20}, {"ex": 45, "ey": 30}, {"ex": 50, "ey": 5}],
            done            : 0,
            defaultColor    : 'rgba(0,0,0, .7)',
            overColor       : 'rgb(0,190,190)',
            smoothingEnabled: true,
            lineWidth       : 3,
            lineCap         : 'round',
            draw            : true,
            edit            : false,
            grid            : false,
            c_width         : 0,
            c_height        : 0,
            canvas          : false,
            ctx             : false,
        };
        var DRYOC = $.extend(defaults, opt);
        DRYOC.opt = opt;
        DRYOC.defaults = defaults;
        DRYOC.jQ_this = $(this);
        DRYOC.DOM_this = DRYOC.jQ_this.get()[0];
        DRYOC.ctx = DRYOC.DOM_this.getContext('2d');

        if (DRYOC.c_width == 0) {DRYOC.c_width = DRYOC.jQ_this.width()}
        if (DRYOC.c_height == 0) {DRYOC.c_height = DRYOC.jQ_this.height()};
        DRYOC.DOM_this.width = DRYOC.c_width;
        DRYOC.DOM_this.height = DRYOC.c_height;

        console.log(DRYOC);

        DRYOC.jQ_this.addClass('DRYOC_canvas');
        if (DRYOC.grid == true) {
            grid();
        };
        if (DRYOC.draw == true) {
            print_path(DRYOC.points);
        };
        if (DRYOC.edit == true) {
            init_edit();
        };

        function draw_line(sx,sy,ex,ey,c){
            if (typeof sx == 'undefined') {sx = last.ex};
            if (typeof sy == 'undefined') {sy = last.ey};

            DRYOC.ctx.beginPath();
                DRYOC.ctx.moveTo(sx,sy);
                DRYOC.ctx.lineTo(ex,ey);

                DRYOC.ctx.strokeStyle = c;
                DRYOC.ctx.smoothingEnabled = DRYOC.smoothingEnabled;
                DRYOC.ctx.lineWidth = DRYOC.lineWidth;
                DRYOC.ctx.lineCap = DRYOC.lineCap;
            DRYOC.ctx.stroke();

            last = {'sx':sx,'sy':sy,'ex':ex,'ey':ey,'c':c};
        }
        function print_path(points, r,done){
            if (typeof done != 'number') {
                done = DRYOC.done;
            };
            if (r == true) {
                DRYOC.ctx.clearRect(0,0,DRYOC.c_width,DRYOC.c_height);
                if (DRYOC.grid == true) {
                    grid();
                };
            };
            $.each(points,function(i,v){
                var c = DRYOC.defaultColor;
                if (i <= done-1) {
                    c = DRYOC.overColor;
                };
                draw_line(v.sx,v.sy,v.ex,v.ey,c);
            })
        }
        function grid(){
            // 100
                for (var x = 0.5; x < DRYOC.c_width+1; x += 100) {DRYOC.ctx.moveTo(x, 0);DRYOC.ctx.lineTo(x, DRYOC.c_height+1);}
                for (var y = 0.5; y < DRYOC.c_height+1; y += 100) {DRYOC.ctx.moveTo(0, y);DRYOC.ctx.lineTo(DRYOC.c_width+1, y);}
                DRYOC.ctx.strokeStyle = "rgba(0,0,0, .7)";
                DRYOC.ctx.lineWidth = 2;
                DRYOC.ctx.stroke();

            // 50
                for (var x = 0.5; x < DRYOC.c_width+1; x += 50) {DRYOC.ctx.moveTo(x, 0);DRYOC.ctx.lineTo(x, DRYOC.c_height+1);}
                for (var y = 0.5; y < DRYOC.c_height+1; y += 50) {DRYOC.ctx.moveTo(0, y);DRYOC.ctx.lineTo(DRYOC.c_width+1, y);}
                DRYOC.ctx.strokeStyle = "rgba(0,0,0, .4)";
                DRYOC.ctx.lineWidth = 1;
                DRYOC.ctx.stroke();

            // 10
                for (var x = 0.5; x < DRYOC.c_width+1; x += 10) {DRYOC.ctx.moveTo(x, 0);DRYOC.ctx.lineTo(x, DRYOC.c_height+1);}
                for (var y = 0.5; y < DRYOC.c_height+1; y += 10) {DRYOC.ctx.moveTo(0, y);DRYOC.ctx.lineTo(DRYOC.c_width+1, y);}
                DRYOC.ctx.strokeStyle = "rgba(0,0,0, .3)";
                DRYOC.ctx.lineWidth = 1;
                DRYOC.ctx.stroke();
        }
        function init_edit(){
            var html = "<div class='DRYOC_edit'>\
                            <div class='DRYOC_bar'>\
                                <button class='DRYOC_reprint DRYOC_button'>Zeichnen</button>\
                                <button class='DRYOC_reset DRYOC_button'>Reset</button>\
                            </div>\
                            <div class='DRYOC_points' contenteditable></div>\
                        </div>\
                        <style>\
                            .DRYOC_edit{\
                                width: "+DRYOC.c_width+"px;\
                                min-height: 100px;\
                                background-color: rgb(35,35,35);\
                                color: rgb(200,200,200);\
                                font-family: 'sans-serif';\
                            }\
                            .DRYOC_edit *{\
                                -webkit-box-sizing: border-box;\
                                -moz-box-sizing: border-box;\
                                box-sizing: border-box;\
                                word-wrap: break-word;\
                            }\
                            .DRYOC_edit div.DRYOC_bar.DRYOC_bar{\
                                height: 30px;\
                                border-bottom: 1px solid rgba(200,200,200, .4);\
                            }\
                            .DRYOC_edit button.DRYOC_button.DRYOC_button{\
                                display: inline-block;\
                                border: none;\
                                border-radius: 0px;\
                                background-color: transparent;\
                                height: 29px;\
                                line-height: 29px;\
                                padding: 0 20px;\
                                color: rgb(200,200,200);\
                                transition: all .4s;\
                                cursor: pointer;\
                            }\
                            .DRYOC_edit button.DRYOC_button.DRYOC_button:hover{\
                                background-color: rgba(200,200,200, .4);\
                            }\
                            .DRYOC_edit div.DRYOC_points.DRYOC_points{\
                                width: 100%;\
                                min-height: 2em;\
                                padding: 20px;\
                            }\
                        </style>";
            DRYOC.jQ_this.after(html);
            
            var i = 0;
            DRYOC.jQ_this.click(function(e){
                var offset = $(this).offset(); 
                var relX = Math.round(e.pageX - offset.left, 0);
                var relY = Math.round(e.pageY - offset.top, 0);
                if (i > 1) {
                    $('.DRYOC_points').append(', {"ex": '+relX+', "ey": '+relY+'}');
                }
                else{
                    if(i == 0){
                        $('.DRYOC_points').append('{"sx": '+relX+', "sy": '+relY+'');
                    }
                    if(i == 1){
                        $('.DRYOC_points').append(', "ex": '+relX+', "ey": '+relY+'}');
                    }
                }
                if (i > 0) {
                	try {
                    	print_path($.parseJSON('['+$(this).parent().find('.DRYOC_points').html()+']'),true,0);
	                }
	                catch(ex) {
	                    alert('Syntaxeror in JSON form Data! (Press Reset button and retry!)');
	                }
                };
                i++;
            });
            $('.DRYOC_reprint').click(function(){
                try {
                    print_path($.parseJSON('['+$(this).parent().parent().find('.DRYOC_points').html()+']'),true,0);
                }
                catch(ex) {
                    alert('Syntaxeror in JSON form Data! (Press Reset button and retry!)');
                }
            });$('.DRYOC_reset').click(function(){
                $(this).parent().parent().find('.DRYOC_points').html('');
                i = 0;
                DRYOC.done = DRYOC.done;
                print_path(DRYOC.points,true);
            });
        }
    }
})(jQuery);
