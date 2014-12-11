# DRYOC - Draw Your Own Route On canvas
DRYOC braucht jQuery, einen `canvas`-Tag und eine Zeile Code.. Ansonnsten nichts.
### Init
Die erste Route wird schnelle da sein, als Du schauen kannst!
```javascript
$('elem').DRYOC();
```
### Parameter
Natürlich kannst Du noch mehr Coole sachen damit machen, als ein Dreieck anzeigen zu lassen.
```javascript
$('elem').DRYOC({
    points          : [{"sx": 5, "sy": 5, "ex": 30, "ey": 5},{"ex": 5, "ey": 30}],
    defaultColor    : 'rgb(0,0,0)',
    overColor       : 'rgb(0,190,190)',
    canvas          : false,
    ctx             : false,
    draw            : true,
    edit            : false,
    done            : 0,
    c_width         : 0,
    c_height        : 0,
    smoothingEnabled: true,
    lineWidth       : 3,
    lineCap         : 'round',
});
```
#### points
Es gibt zwei Formate wie Du einen Punkt deiner Rute festlegen kannst.
__Achtung!__ Der erste Punkt muss im format a) definiert sein.
##### a)
``````javascript
{"sx": start-X, "sy": start-Y, "ex": end-X, "ey": end-Y},
```
##### b)
``````javascript
{"ex": end-X, "ey": end-Y},
```
####defaultColor
Bestimmt die Farbe der Linie und darf in allen CSS3 gültigen Formen angegeben werden.
``````css
black, #000, #000000, rgb(0,0,0), rgba(0,0,0,1)
```
[wolf wortmann]:http://wolf.wolfgang-m.de
