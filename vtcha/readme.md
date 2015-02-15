# vtcha - smart & userfriendly captcha 
##Contents
- [vtcha](#description)
- [Parameter](#parameter)
 - [ok](#string-string)
 - [hide](#hide-string)
- [Examples](#examples)
 - [Call it](#call-it)
- [Copyright/License](#copyrightlicense)

##Description
Vtcha crates a drag&drop captcha on a input element. If the vtcha get completed the input becames a specificated value.
##Parameter
###ok (string)
Input value after vtcha completation.
Default is `vtcha_accepted_2K15`
###hide (string)
It's a simple CSS selector eg: '.the-info-p-tag, #no-js-info'.
Elements selected by the CSS selector get hidden on vtcha's init.
Default is `null`.
##Examples
###Call it
```javascript
$(document).ready(function(){
    $('input[data-vtcha]').vtcha()
});
```
The HTML code:
```html
<form>
    Name: <input>
    Email: <input type="email">
    <input data-vtcha>
    <input type="submit">
</form>
```

##COPYRIGHT/LICENSE
Feel free to use, modify and redistribute this code. But please keep this copyright/license notice. (c) Copyright 2015 Wolf Wortmann <wolf@wolfgang-m.de> / <http://elementcode.de>
