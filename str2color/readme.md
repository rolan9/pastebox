# str2color API
####Call it via jQuery
```javascript
$(document).ready(function(){
    var $form = $('.theForm');
    $form.submit(function(event){
        event.preventDefault();
        var opt = JSON.stringify($form.serializeObject());
        $.ajax({
            'url' : 'http://color.elementcode.de/api.str2color.php',
            'type' : 'GET',
            'data' : 'data='+opt,
        }).done(function (data) {
            show(data);
        }).fail(function(){
            alert('Oooooops, da ist etwas schief gegangen. :(');
        });
    });
});
/* do NOT edit! */$.fn.serializeObject = function(){var o={};var a=this.serializeArray();$.each(a, function() {if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};// $.fn.serializeObject
```
API str2color
v. 1.0.0

@author (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>
@copyright Feel free to use, modify and redistribute this code. But please keep this copyright notice. (c) Copyright 2015 Wolf Wortmann / <wolf@wolfgang-m.de>

@method GET
@url = http://color.elementcode.de/api.str2color.php?

@param (json) $_GET['data'] = {
 (string) string = String to convert in Color 
 (bool)   html_colorNameshtmlColorNames = Note HTML-Colornames
 (bool)   hex_colorNames = Note HEX-Colornames
} = API-Options

@echo (json) {
(obj) 	 rgb = [R,G,B]
(string) rgb_string= R,G,B - RGB Colorstring
(string) hex = Hexadecimalnumer
(int) 	 lightness = Lightness index
(string) text_color = recommended Textcolor (based on Lightness index)
(string) string = Converted String - orginal
}
