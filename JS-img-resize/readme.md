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
