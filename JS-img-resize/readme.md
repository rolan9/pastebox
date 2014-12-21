# JS img resize
<small>V 1.0</small><br>
Verkleinert das Bild in H�he und Breite auf die Maximalbreite
## Init f�r Dateien aus dem Input-feld
Standartm��ig wird ein Bild so verkleinert:
```javascript
resize_file( file, maxSize, callback );
```
## Init f�r reine dataUrl's
```javascript
resize_dataUrl( dataUrl, maxSize, callback );
```
__Achtung!__ pr�fe vor der �bergabe ob die DataUrl wirklich die eines Bildes ist!
## Parameter
#### file
Eine Datei (z.B. aus Inputfeld)
``````javascript
file {name: '*',type: 'image/*', size: >0, path: ''} (object)
```
#### maxSize
Maximale H�he bzw. Breite des Bildes in Pixeln
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