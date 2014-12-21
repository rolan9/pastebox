# JS img resize
<small>V 1.0</small><br>
Verkleinert das Bild in Höhe und Breite auf die Maximalbreite
## Init für Dateien aus dem Input-feld
Standartmäßig wird ein Bild so verkleinert:
```javascript
resize_file( file, maxSize, callback );
```
## Init für reine dataUrl's
```javascript
resize_dataUrl( dataUrl, maxSize, callback );
```
__Achtung!__ prüfe vor der Übergabe ob die DataUrl wirklich die eines Bildes ist!
## Parameter
#### file
Eine Datei (z.B. aus Inputfeld)
``````javascript
file {name: '*',type: 'image/*', size: >0, path: ''} (object)
```
#### maxSize
Maximale Höhe bzw. Breite des Bildes in Pixeln
``````javascript
0 (int)
```
#### callback
``````javascript
function(resizedDataUrl){} (function)
```

### Beispiel
``````javascript
resize_dataUrl( file, 200, function (resizedDataUrl) {
    console.log(resizedDataUrl);
} );
```