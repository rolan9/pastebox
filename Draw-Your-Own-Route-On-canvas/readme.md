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
    done            : 0,
    defaultColor    : 'rgb(0,0,0)',
    overColor       : 'rgb(0,190,190)',
    smoothingEnabled: true,
    lineWidth       : 3,
    lineCap         : 'round',
    draw            : true,
    edit            : false,
    c_width         : 0,
    c_height        : 0,
});
```
#### points
``````javascript
[{punkt-1},{punkt-2},{punkt-3},{...}] (array)
```
Es gibt zwei Formate wie Du einen Punkt deiner Rute festlegen kannst.
__Achtung!__ Der erste Punkt muss im format __a)__ definiert sein.
##### a)
Startpunkte und Endpunkte.
``````javascript
{"sx": start-X, "sy": start-Y, "ex": end-X, "ey": end-Y}, (object)
```
##### b)
nur Endpunkte, Startpunkte sind die davorstehenden Endpunkte.
``````javascript
{"ex": end-X, "ey": end-Y}, (object)
```
#### done
Bestimmt die Anzahl (vom 1. Startpunkt aus ) an (mit der `overColor`) markierten Linienstücken z.B. bereits zurückgelegte Strecke.
``````javascript
0 (int)
```
####defaultColor
Bestimmt die Farbe der Linie und darf in allen CSS3 gültigen Formen angegeben werden.
``````css
black | #000 | #000000 | rgb(0,0,0) | rgba(0,0,0,1 (string)
```
[wolf wortmann]:http://wolf.wolfgang-m.de
