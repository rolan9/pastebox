# DRYOC - Draw Your Own Route On canvas
DRYOC braucht jQuery, einen `canvas`-Tag und eine Zeile Code.. Ansonnsten nichts.
## [Demo][2]
### Init
Die erste Route wird schnelle da sein, als Du schauen kannst!
```javascript
$('elem').DRYOC();
```
<hr>__Achtung!__ DRYOC kann nicht auf Arrayas angewand werden bzw benutzt nur dessen erstes Element!
```javascript
$('canvas').DRYOC();
```
``````html
<canvas><!-- wird benutzt --></canvas>
<canvas><!-- wird NICHT benutzt!! --></canvas>
```
<hr>
### Parameter
Nat&uuml;rlich kannst Du noch mehr Coole sachen damit machen, als ein Pfad in Form von ein paar Buchstaben anzeigen zu lassen.
```javascript
$('elem').DRYOC({
    points          : [{"sx": 5, "sy": 5, "ex": 30, "ey": 5},{"ex": 5, "ey": 30}],
    done            : 0,
    defaultColor    : 'rgba(0,0,0, .7)',
    overColor       : 'rgb(0,190,190)',
    lineWidth       : 3,
    lineCap         : 'round',
    draw            : true,
    edit            : false,
    grid            : false,
    c_width         : 0,
    c_height        : 0,
});
```
#### points
``````javascript
[{punkt-1},{punkt-2},{punkt-3},{...}] (array)
```
Es gibt zwei Formate wie Du einen Punkt deiner Rute festlegen kannst.<br>
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
Bestimmt die Anzahl (vom 1. Startpunkt aus ) an (mit der `overColor`) markierten Linienst&uuml;cken z.B. bereits zur&uuml;ckgelegte Strecke.
``````javascript
0 (int)
```
#### defaultColor
Bestimmt die Farbe der Linie und darf in allen CSS3 g&uuml;ltigen Formen angegeben werden.
``````css
black | #000 | #000000 | rgb(0,0,0) | rgba(0,0,0,1) (string)
```
#### overColor
Bestimmt die Farbe der von `done` markierten Linienst&uuml;cke und darf in allen CSS3 g&uuml;ltigen Formen angegeben werden.
``````css
blue | #00F | #0000FF | rgb(0,0,255) | rgba(0,0,255,1) (string)
```
#### lineWidth
Bestimt die Liniendicke in `px`.
``````javascript
3 (int)
```
#### lineCap
Bestimt die Linienenden. [Definitionen][1] der Begriffe sie [hier][1]
``````javascript
butt | round | square  (string)
```
#### draw
Bestimmt ob die Route gemalt werden soll oder nicht.<hr>
~~__Achtung!__ F&uuml;r diesen Modus, muss im `canvas`-Tag `width=""` und `height=""` gesetzt sein oder &uuml;ber die Parameter `c_width` und `c_height` &uuml;bergeben werden!<br>Wenn &uuml;ber CSS gestyled wird und keine Informationen &uuml;bergeben werden, kann es zu Nichtzeichnungen kommen.~~<hr>
``````javascript
true | false  (bool)
```
#### edit
Schaltet den Editier-Modus ein/aus.
Im Editiermodus, kann man auf dem canvas Punkte anklicken, die dann unterhalb des Canvas in einer Textbox im richtigen Vormat ausgegeben werden und zum &Uuml;berpr&uuml;fen direkt von dort aus zeichenbar sind.<hr>
~~__Achtung!__ F&uuml;r diesen Modus, muss im `canvas`-Tag `width=""` und `height=""` gesetzt sein oder &uuml;ber die Parameter `c_width` und `c_height` &uuml;bergeben werden!<br>Wenn &uuml;ber CSS gestyled wird und keine Informationen &uuml;bergeben werden, kann es zu Verzerrungen kommen.~~<hr>
``````javascript
true | false  (bool)
```
#### grid
Bestimmt ob ein Gitternetz &uuml;ber das canvas gelegt werden soll oder nicht.
``````javascript
true | false  (bool)
```
#### c_width
Bestimmt die Breite des Canvas
``````javascript
500 (int)
```
#### c_height
Bestimmt die H&ouml;he des Canvas
``````javascript
600 (int)
```
<!--<iframe width="600" height="1000" src="https://cdn.rawgit.com/wolf-w/pastebox/master/Draw-Your-Own-Route-On-canvas/index.html"></iframe>-->
[wolf wortmann]:http://wolf.wolfgang-m.de
[1]:http://www.w3schools.com/tags/canvas_linecap.asp
[2]:https://cdn.rawgit.com/wolf-w/pastebox/master/Draw-Your-Own-Route-On-canvas/index.html
