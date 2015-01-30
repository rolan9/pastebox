# str2color API
##Contents
- [str2color API](#description)
- [Data](#data)
 - [URL](#url)
 - [Types](#types)
- [Parameter](#parameter)
 - [string](#string-string)
 - [html_colorNames](#html_colornames-intbool)
 - [hex_colorNames](#hex_colornames-intbool)
- [Examples](#examples)
 - [jQuery AJAX](#call-it-via-jquery-ajax)
- [Copyright/License](#copyrightlicense)

##Description
The str2color API converts a given String into a Color and give u back some Informations about the converted color
```
(json) {
  (array)  rgb = [R,G,B]
  (string) rgb_string= R,G,B - RGB Colorstring
  (string) hex = Hexadecimalnumer
  (int)    lightness = Lightness index
  (string) text_color = recommended Textcolor (based on Lightness index)
  (string) string = Converted String - orginal
}
```
##Data
###URL
Call the API script: `http://color.elementcode.de/api.str2color.php`.
###Types
The API supports only `GET` Parameters!
##Parameter
Parameters are all stored in a JSON as Param `data`
Example Querystring:
```
?data={"string":"Hello World","html_colorNames":0}
```
Meaning of `int` Variables in `bool` context (intBool)

| int |  bool  |
|:----:|:-----:|
|   1  | true  |
|   0  | false |
###string (string)
The string Parameter contains the String what should be converted.
###html_colorNames (intBool)
Note HTML-Colornames while converting; for example `string=blue` are converted to HEX `#0000FF`.
###hex_colorNames (intBool)
Note HEX-Colornames while converting; for example `string=00FF00` are converted to HEX `#00FF00`.
##Examples
###Call it via jQuery AJAX
[api.ajax-example.html](https://github.com/wolf-w/pastebox/blob/master/str2color/api.ajax-example.html)
```javascript
$(document).ready(function(){
    $('.theForm').submit(function(event){
        event.preventDefault();
        var opt = JSON.stringify($(this).serializeObject());
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
The HTML code:
```html
<form class="theForm">
    <input name="string">
    <!-- another Param for example -->
    <input name="hex_colorNames" value="0" hidden>
    <input type="submit">
</form>
```
###Call it via jQuery AJAX
[api.ajax-example.html](https://github.com/wolf-w/pastebox/blob/master/str2color/api.ajax-example.html)
```php
//Aufrufen der API mit übergabe von Parametern
$json = api_str2color([
    'string' => urlencode('Hallo Welt!'),//Die Zeichenkette
    'html_colorNames' => true,//HTML Farbnamen wie 'blue','red'.. werden jeweils auch als Blau bzw. Rot ausgegeben 
    'hex_colorNames' => true,//HEX Farbnamen wie '0000FF','FF0000'.. werden jeweils auch als Blau bzw. Rot ausgegeben
]);
$result_arr = json_decode($json,true);//Das Ergebniss in ein Array umwandeln


// API_FUNCTION - DO NOT EDIT
function api_str2color($options){
    $tmp = false;

    $url = 'http://color.elementcode.de/api.str2color.php?data='.json_encode($options);
    $ch = curl_init($url);
    if ($ch) {
        ob_start();
        $tmp = curl_exec($ch);
        curl_close($ch);
        $tmp = ob_get_contents();
        ob_end_clean();
    }

    return $tmp;
}// API_FUNCTION()
```
##COPYRIGHT/LICENSE
Feel free to use, modify and redistribute this code. But please keep this copyright/license notice. (c) Copyright 2015 Wolf Wortmann <http://elementcode.de>/ <wolf@wolfgang-m.de>