# vtcha - smart & userfriendly captcha 
##Contents
- [vtcha](#description)
- [Parameter](#parameter)
 - [ok](#ok-string)
 - [hide](#hide-string)
- [Examples](#examples)
 - [Simply](#simply)
 - [Hardcore](#hardcore)
- [Copyright/License](#copyrightlicense)

##Description
Vtcha crates a drag&drop captcha on a input element. If the vtcha get completed the input becames a specificated value.
<br>**[vtcha in action](http://codepen.io/wolf-w/full/emVjQv)**
##Parameter
###ok (string)
Input value after vtcha completation.
Default is `vtcha_accepted_2K15`
```javascript
$('input').vtcha({
    ok: 'human-detected',
})
```
###hide (string)
It's a simple CSS selector eg: '.the-info-p-tag, #no-js-info'.
Elements selected by the CSS selector get hidden on vtcha's init.
Default is `null`.
```javascript
$('input').vtcha({
    hide: '.the-info-p-tag, #another_tag',
})
```
##Examples
**[vtcha in action](http://codepen.io/wolf-w/full/emVjQv)**
###Simply
```javascript
$(document).ready(function(){
    $('input').vtcha()
});
```
The HTML code:
```html
<input>
```
###Hardcore
```javascript
$(document).ready(function(){
    $('input[data-vtcha]').vtcha({
        ok: 'human-detected',
        hide: '.info',
    })
});
```
The HTML code:
```html
<form>
    Name: <input>
    Email: <input type="email">
    <p class="info">Javascript required!</p>
    <input data-vtcha>
    <input type="submit">
</form>
```

##COPYRIGHT/LICENSE
Feel free to use, modify and redistribute this code. But please keep this copyright/license notice. (c) Copyright 2015 Wolf Wortmann <wolf@wolfgang-m.de> / <http://elementcode.de>
